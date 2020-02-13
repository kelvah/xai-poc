import React from "react";
import {Card, CardBody, CardHeader, Flex, FlexItem, FlexModifiers, Title} from "@patternfly/react-core";

type propsType = {
    decision: {
        score: number,
        outcome: string
    }
}

const DecisionOutput = (props: propsType) => {
    let {score, outcome} = props.decision;
    let indicatorPosX = score*200;
    return (
        <Card>
            <CardHeader>
                <Title headingLevel="h3" size="xl">
                    Decision Outcome
                </Title>
            </CardHeader>
            <CardBody className="decision">
                <Flex>
                    <FlexItem>
                        <span className="decision__outcome">{outcome}</span>
                    </FlexItem>
                    <FlexItem breakpointMods={[{modifier: FlexModifiers["align-right"]}]}>
                        <span className="decision__score">
                            <span className="decision__score__label">Score</span>
                            <span className="decision__score__value">{score}</span>
                            <span className="decision__score__bar">
                                <span className="decision__score__bar__indicator" style={{left: indicatorPosX+'%'}} />
                            </span>
                        </span>
                    </FlexItem>
                </Flex>
            </CardBody>
        </Card>
    )
};

export default DecisionOutput;