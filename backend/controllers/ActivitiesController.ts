import {Request, Response} from "express";
import ActivitiesEntry from "../models/ActivitiesEntry";

const getTrueKey = ({obj}: { obj: { asleep: boolean, looking_away: boolean, distracted: boolean } }) => {
    for (const key in obj) {
        // @ts-ignore
        if (obj[key]) return key;
    }
    return undefined;
};
export const add = async (req: Request, res: Response) => {
    const {body} = req;
    const getFirstTruthyItem = getTrueKey({ obj: body });

    const newActivity = new ActivitiesEntry({
        activitiesType: getFirstTruthyItem || 'active',
        createdAt: new Date()  // Though this is not needed as you have default set in the schema
    });

    await newActivity.save()
    res.status(200).send();
};

export const getActivity = async (req: Request, res: Response) => {
    const pipeline = [
        {
            // Filter documents from the last 24 hours
            $match: {
                createdAt: { $gte: new Date(new Date().getTime() - (24 * 60 * 60 * 1000)) }
            }
        },
        {
            // Group by activitiesType and count occurrences
            $group: {
                _id: "$activitiesType",
                count: { $sum: 1 }
            }
        }
    ];

// Execute the aggregation pipeline
    const activityInLast24H = await ActivitiesEntry.aggregate(pipeline);
    res.status(200).send({data: {activitys: activityInLast24H}});
};

export const getActualActivity = async (req: Request, res: Response) => {
    const thirtyMinutesAgo = new Date(new Date().getTime() - (30 * 60 * 1000)); // 30 minutes in milliseconds

    const pipeline30M = [
        {
            // Filter documents from the last 30 minutes
            $match: {
                createdAt: { $gte: thirtyMinutesAgo }
            }
        },
    ];

    // Execute the aggregation pipeline
    const activityInLast30M = await ActivitiesEntry.aggregate(pipeline30M);
    res.status(200).send({data: {activitys: activityInLast30M}});
};