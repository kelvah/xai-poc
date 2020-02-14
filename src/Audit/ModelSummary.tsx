import React from "react";
import {Button, Card, CardBody, CardHeader, Title} from "@patternfly/react-core";

const ModelSummary = () => {
    return (
        <Card style={{height: "100%"}}>
            <CardHeader>
                <Title headingLevel="h3" size="xl">
                    Model Lookup
                </Title>
            </CardHeader>
            <CardBody className="decision">
                <span>Mortgage Model v5.0</span> <Button variant="link" isInline>View Diagram</Button>
            </CardBody>
        </Card>
    )
};

export default ModelSummary;