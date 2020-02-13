import React from "react";
import {Card, CardBody, CardHeader, Title} from "@patternfly/react-core";

type propsType = {
    decision: {
        score: number,
        outcome: string
    }
}

const DecisionOutput = (props: propsType) => {
    let {score, outcome} = props.decision;
    return (
        <Card>
            <CardHeader>
                <Title headingLevel="h3" size="xl">
                    Decision Outcome
                </Title>
            </CardHeader>
            <CardBody className="decision">
                <span className="decision__outcome">{outcome}</span>
                <span className="decision__score" style={{float: "right"}}>
                    <span className="decision__score__label">Score</span>
                    <span className="decision__score__value">{score}</span></span>
            </CardBody>
        </Card>
    )
};

export default DecisionOutput;