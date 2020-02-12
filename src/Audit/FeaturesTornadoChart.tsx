import React from "react";
import {VictoryBar, VictoryChart, VictoryAxis} from "victory";
import {Card, CardBody, CardHeader, Title} from "@patternfly/react-core";

const chartData = [
    {feature: 1, weight: 0.2, fill: 'blue'},
    {feature: 2, weight: 0.23, fill: 'blue'},
    {feature: 3, weight: -0.34, fill: 'orange'},
    {feature: 4, weight: 0.11, fill: 'blue'},
    {feature: 5, weight: -0.13, fill: 'orange'},
    {feature: 6, weight: -0.3, fill: 'orange'},
    {feature: 7, weight: -0.21, fill: 'orange'}
];

const FeaturesTornadoChart = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Title headingLevel="h3" size="xl">
                        Features Explaination
                    </Title>
                </CardHeader>
                <CardBody>
                    <VictoryChart
                        /* domain={{y: [-1,1]}} */
                        domainPadding={{x: 10, y: 10}}
                    >
                        <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={() => ""} />
                        <VictoryAxis tickFormat={() => ""} />
                        <VictoryBar
                            data={chartData}
                            x="feature"
                            y="weight"
                            horizontal
                            labels={({ datum }) => `${datum.weight}`}
                            alignment="middle"
                            style={{
                                data: {
                                    fill: ({ datum }) => datum.fill
                                }
                            }}
                        />
                    </VictoryChart>
                </CardBody>
            </Card>
        </>
    )
};

export default FeaturesTornadoChart;