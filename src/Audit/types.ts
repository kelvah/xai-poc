export interface IDecision {
    id: string,
    evaluationDate: Date,
    evaluationSucceeded: boolean,
    executorName: string,
    decision: {
        decisionId: string,
        decisionName: string,
        evaluationStatus: string,
        result: string,
        messages: string[],
        hasErrors: boolean
    }
}

export interface IDecisionsList {
    versions: string,
    availableRecords: number,
    returnedRecords: number,
    offset: number,
    data: IDecision[]
}