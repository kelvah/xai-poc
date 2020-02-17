import React from "react";
import {Card, CardBody, CardHeader, Title} from "@patternfly/react-core";
import ModelInspector from "./ModelInspector";
const modelInfo = {
      version: 'v5.0',
      history: [
        'v4.0',
        'v3.0',
        'v2.0',
        'v1.0'
      ]
};
const ModelSummary = () => {
    return (
        <Card style={{height: "100%"}}>
            <CardHeader>
                <Title headingLevel="h3" size="2xl">
                    Model Lookup
                </Title>
            </CardHeader>
            <CardBody className="decision">
                <span>Mortgage Model v5.0</span> ~ <ModelInspector model={modelInfo}/>
            </CardBody>
        </Card>
    )
};

export default ModelSummary;