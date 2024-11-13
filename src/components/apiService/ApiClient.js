import axios from "axios";
export const apiClient=axios.create(
    {
        basicURL:'http://localhost:8080'
    }
);