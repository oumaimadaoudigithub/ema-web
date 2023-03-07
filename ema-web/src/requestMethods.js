import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTdkMjhmYzEwODEzOGZlMTRhYjhkMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Nzg2MzQ3NSwiZXhwIjoxNjc4MTIyNjc1fQ.4my5UOeFe-vXxpub2ZBVbHABHHHokUwADtJgI71n5dg";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{ token:`Bearer ${TOKEN}` },
})