import React from "react";
import {VictoryChart, VictoryLine, VictoryTheme, VictoryAxis} from "victory";
import {Card, CardBody, CardHeader, Title} from "@patternfly/react-core";

let chartData = [
    { x: 0, y: 0 },
    { x: 0.1, y: 10 },
    { x: 0.2, y: 18 },
    { x: 0.3, y: 48 },
    { x: 0.4, y: 39 },
    { x: 0.5, y: 33 },
    { x: 0.6, y: 49 },
    { x: 0.7, y: 77 },
    { x: 0.8, y: 65 },
    { x: 0.9, y: 31 },
    { x: 0.1, y: 7 }
];

const DecisionDistributionChart = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Title headingLevel="h3" size="xl">
                        Decision distribution (last 90 days)
                    </Title>
                </CardHeader>
                <CardBody>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        height={130}
                        padding={{top: 10, right:30, bottom: 30, left: 30}}
                    >
                        <VictoryLine
                            style={{
                                data: { stroke: "var(--pf-global--info-color--200)" },
                                parent: { border: "1px solid #ccc"}
                            }}
                            data={chartData}
                            interpolation="basis"
                        />
                        <VictoryAxis
                            dependentAxis
                            axisValue={0.46}
                            style={{
                                axis: {
                                    stroke: "var(--pf-global--palette--orange-200)"
                                },
                                ticks: {
                                    stroke: "transparent"
                                },
                                tickLabels: { fill: "none" },
                                grid: {
                                    stroke: "transparent"
                                }
                            }}
                        />
                        <VictoryAxis style={{
                            tickLabels: {
                                fontSize: 9,
                                fontFamily: "overpass",
                            },
                            grid: {
                                stroke: "transparent"
                            }
                        }}/>
                        <VictoryAxis dependentAxis style={{
                            tickLabels: {
                                fontSize: 9,
                                fontFamily: "overpass"
                            },
                            grid: {
                                stroke: "transparent"
                            }
                        }}/>
                    </VictoryChart>
                </CardBody>
            </Card>
        </>
    )
};

export default DecisionDistributionChart;