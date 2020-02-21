import React from "react";
import {
    Flex,
    FlexItem, FlexModifiers,
    Grid,
    GridItem,
    PageSection,
    PageSectionVariants, Stack, StackItem,
    Text,
    TextContent, Title
} from "@patternfly/react-core";
// import InputDataList from "./InputDataList";
import DecisionOutput from "./DecisionOutput";
import ModelSummary from "./ModelSummary";
import FeaturesTornadoChart from "./FeaturesTornadoChart";

// import LoanInputDetail from "../Mocks/loan-input-detail-mock";
import DecisionOutputData from "../Mocks/decision-outcome-mock";
import DecisionDistributionChart from "./DecisionDistributionChart";
import NestedInputDataList from "./NestedInputDataList";

type state = {}
type props = {}
class AuditDetail extends React.Component<props, state> {
    render() {
        return (
            <>
                <PageSection variant={PageSectionVariants.light}>
                    <TextContent>
                        <Title size="4xl" headingLevel="h1">ID #1008 - Decision Detail</Title>
                        <Text component="p">Here you can access the decision inputs, outcome, explaination and the details about the involved decision model.</Text>
                    </TextContent>
                </PageSection>
                <PageSection isFilled={true}>
                    <Grid gutter="md">
                        <GridItem span={6} rowSpan={3}>
                            <Stack gutter={"md"}>
                                <StackItem>
                                    <NestedInputDataList />
                                </StackItem>
                                {/*<StackItem>
                                    <InputDataList inputData={LoanInputDetail}/>
                                </StackItem>*/}
                            </Stack>
                        </GridItem>
                        <GridItem span={6}>
                            <Stack gutter="md">
                                <StackItem>
                                    <Flex breakpointMods={[{modifier: FlexModifiers.grow}]}>
                                        <FlexItem style={{flex: "1", alignSelf: "stretch"}}>
                                            <DecisionOutput decision={DecisionOutputData}/>
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
                                    <DecisionDistributionChart />
                                </StackItem>
                            </Stack>
                        </GridItem>
                    </Grid>
                </PageSection>
            </>
        )
    }
}

export default AuditDetail;