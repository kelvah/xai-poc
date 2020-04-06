import httpClient from "./httpClient";

const EXECUTIONS = "/executions";

const getExecutions = (from: string, to: string, limit: number, offset: number) => {
    return httpClient.get(EXECUTIONS, {
        params: {
            from,
            to,
            limit,
            offset
        }
    })
};

export {
    getExecutions
};