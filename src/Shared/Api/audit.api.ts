import httpClient from "./httpClient";

const DECISIONS = "/decisions";

const getDecisions = (from: string, to: string) => {
    return httpClient.get(DECISIONS, {
        params: {
            from,
            to
        }
    })
};

export {
    getDecisions
};