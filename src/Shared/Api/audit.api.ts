import httpClient from "./httpClient";

const DECISIONS = "/executions";

const getDecisions = (from: string, to: string, limit: number, offset: number) => {
    return httpClient.get(DECISIONS, {
        params: {
            from,
            to,
            limit,
            offset
        }
    })
};

export {
    getDecisions
};