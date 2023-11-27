import axios from "axios";
import { LoginResponse } from "../types/user";

const BASE_URL = "http://localhost:3001/api/user";

export const login = (email: string, password: string): Promise<LoginResponse> => {
  return axios.post(`${BASE_URL}/test`, { email, password }).then(resp => resp.data);
};
