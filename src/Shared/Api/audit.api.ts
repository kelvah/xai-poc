import httpClient from "./httpClient";

const DECISIONS = "/decisions";

const getDecisions = () => httpClient.get(DECISIONS);

export {
    getDecisions
};