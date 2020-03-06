import React from 'react';
import {
    Card, CardBody, CardHeader,
    Grid,
    GridItem,
    PageSection,
    Stack,
    StackItem, Title
} from "@patternfly/react-core";
import NestedInputDataList from "../InputData/NestedInputDataList";
import SingleDecisionOutput from "../Audit/SingleDecisionOutput";
import DecisionOutputData from "../Mocks/decision-outcome-mock";
import ModelSummary from "../Audit/ModelSummary";
import FeaturesTornadoChart from "../Audit/FeaturesTornadoChart";
import DecisionDistributionChart from "../Audit/DecisionDistributionChart";
import ApplicationOverview from "./ApplicationOverview";
import ModelOverview from "./ModelOverview";
import OutcomeList from "../Outcome/OutcomeList";

const AuditDetailOverview = () => {
    return (
        <PageSection isFilled={true}>
            <Grid gutter="md">
                <GridItem span={6}>
                    <Stack gutter={"md"}>
                        <StackItem>
                            <ApplicationOverview />
                        </StackItem>
                        <StackItem>
                            <ModelOverview />
                        </StackItem>
                        {/*
                        <StackItem>
                            <NestedInputDataList />
                        </StackItem>
                        <StackItem>
                                <InputDataList inputData={LoanInputDetail}/>
                        </StackItem>
                        */}
                    </Stack>
                </GridItem>
                <GridItem span={6}>
                    <Stack gutter="md">
                        <StackItem>
                            <Card>
                                <CardHeader>
                                    <Title headingLevel="h3" size="2xl">
                                        DECISION OUTCOME
                                    </Title>
                                </CardHeader>
                                <CardBody>
                                    <OutcomeList allAttributes={false} />
                                </CardBody>
                            </Card>
                        </StackItem>
                        {/*
                        <StackItem>
                            <Flex breakpointMods={[{modifier: FlexModifiers.grow}]}>
                                <FlexItem style={{flex: "1", alignSelf: "stretch"}}>
                                    <SingleDecisionOutput decision={DecisionOutputData}/>
                                </FlexItem>
                                <FlexItem style={{flex: "1", alignSelf: "stretch"}}>
                                    <ModelSummary />
                                </FlexItem>
                            </Flex>
                        </StackItem>
                        <StackItem>
                            <FeaturesTornadoChart/>
                        </StackItem>
                        <StackItem>
                            <Card>
                                <CardHeader>
                                    <Title headingLevel="h3" size="2xl">
                                        Decision distribution (last 90 days)
                                    </Title>
                                </CardHeader>
                                <CardBody>
                                    <DecisionDistributionChart />
                                </CardBody>
                            </Card>
                        </StackItem>
                        */}
                    </Stack>
                </GridItem>
            </Grid>
        </PageSection>
    );
};

export default AuditDetailOverview;