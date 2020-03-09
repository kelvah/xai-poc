import React from 'react';
import { VictoryStack, VictoryBar } from 'victory';

const FeatureDistributionStackedChart = () => {
    return (
        <div style={{
            width: "220px",
            marginTop: 0,
            paddingTop: 0
        }}>
            <VictoryStack
                colorScale={["tomato", "orange", "gold"]}
                horizontal={true}
                width={220}
                height={60}
                padding={{ top: 0, bottom: 0 }}
            >
                <VictoryBar
                    data={[{x: "a", y: 2}]}
                    barWidth={15}
                />
                <VictoryBar
                    data={[{x: "a", y: 1}]}
                    barWidth={15}
                />
                <VictoryBar
                    data={[{x: "a", y: 3}]}
                    barWidth={15}
                />
            </VictoryStack>
        </div>
    );
};

export default FeatureDistributionStackedChart;