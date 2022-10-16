import axios from "axios";
import { Credentials } from "@chatapp/shared";

export const fetchUsers = async (): Promise<Credentials[]> => {
    const response = await axios.get<Credentials[]>("/login");
    return response.data;
};