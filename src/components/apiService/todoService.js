import { apiClient } from "./ApiClient";

export const getAll=(username)=>{
    apiClient.get(`/todos1/${username}/list`)
}