import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Grid,
    GridItem,
    PageSection,
    Stack,
    StackItem,
    Title
} from "@patternfly/react-core";
import OutcomeList from "../Outcome/OutcomeList";
import FeaturesTornadoChart from "../Audit/FeaturesTornadoChart";
import NestedInputDataList from "../InputData/NestedInputDataList";

const Explanation = () => {
    return (
        <PageSection isFilled={true}>
            <Grid gutter="md">
                <GridItem span={6}>
                    <Stack gutter={"md"}>
                        <StackItem>
                            <Card>
                                <CardHeader>
                                    <Title headingLevel="h3" size="2xl">
                                        DECISION OUTCOME
                                    </Title>
                                </CardHeader>
                                <CardBody>
                                    <OutcomeList allAttributes={true}/>
                                </CardBody>
                            </Card>
                        </StackItem>
                    </Stack>
                </GridItem>
                <GridItem span={6}>
                    <Stack gutter="md">
                        <StackItem>
                            <FeaturesTornadoChart />
                        </StackItem>
                        <StackItem>
                            <NestedInputDataList showOnlyAffecting={true}/>
                        </StackItem>
                    </Stack>
                </GridItem>
            </Grid>
        </PageSection>
    );
};

export default Explanation;