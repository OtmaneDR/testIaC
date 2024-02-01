import axios from "axios";

import { getAccessToken } from "@bonprix/backoffice-tool-library/utils/authStore";

const getData = async () => {
    const headers = {
        Authorization: `Bearer ${getAccessToken()}`,
    };
    const response = await axios.get(import.meta.env.VITE_API, {
        headers: headers,
        params: {
            page: 0,
            filter: "",
            "page-size": 10000,
        },
    });
    return response.data;
};

export const test = async () => {
    const data = await getData();
    console.log(data);
};
