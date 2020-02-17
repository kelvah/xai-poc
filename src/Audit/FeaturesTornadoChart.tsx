import React from "react";
import {VictoryBar, VictoryChart, VictoryAxis} from "victory";
import {Card, CardBody, CardHeader, Title} from "@patternfly/react-core";
import {sortBy} from "lodash";

let chartData = [
    {feature: 1, weight: 0.21, desc: 'Annual Income'},
    {feature: 2, weight: 0.23, desc: 'Mortgage Amount'},
    {feature: 3, weight: -0.34, desc: 'Down Payment'},
    {feature: 4, weight: 0.11, desc: 'Years of amortization'},
    {feature: 5, weight: -0.13, desc: 'Age of Property (yrs)'},
    {feature: 6, weight: -0.33, desc: 'Sale Price'}
];
chartData = sortBy(chartData, [(item) => Math.abs(item.weight)]);
chartData.map((item, i) => {
    item.feature = i;
    return item;
});
const colorFill = (value: number): string => {
    return (value >= 0) ? 'var(--pf-global--palette--blue-300)' : 'var(--pf-global--palette--orange-200)';
};
const FeaturesTornadoChart = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Title headingLevel="h3" size="2xl">
                        Features Explaination
                    </Title>
                </CardHeader>
                <CardBody>
                    <VictoryChart
                        /* domain={{y: [-1,1]}} */
                        domainPadding={{x: 20, y: 50}}
                        height={260}
                        padding={{top: 10, right:50, bottom: 10, left: 50}}
                    >
                        <VictoryAxis tickValues={[]} tickFormat={() => ""} />
                        <VictoryAxis tickFormat={() => ""} style={{axis: {stroke: "#c6c6c6"}}}/>
                        <VictoryBar
                            data={chartData}
                            x="feature"
                            y="weight"
                            horizontal
                            labels={({ datum }) => `${datum.desc} \n ${datum.weight}`}
                            alignment="middle"
                            style={{
                                data: {
                                    fill: ({ datum }) => colorFill(datum.weight)
                                },
                                labels: {
                                    fontSize: 10,
                                    fontFamily: "overpass"
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