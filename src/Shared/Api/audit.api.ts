import {callOnce} from "./httpClient";
import {AxiosRequestConfig} from "axios";

const EXECUTIONS = "/executions";

const getExecutions = (from: string, to: string, limit: number, offset: number) => {
    const getExecutionsConfig:AxiosRequestConfig = {
        url: EXECUTIONS,
        method: 'get',
        params: {
            from,
            to,
            limit,
            offset
        }
    };
    return callOnce(getExecutionsConfig);
};

export {
    getExecutions
};