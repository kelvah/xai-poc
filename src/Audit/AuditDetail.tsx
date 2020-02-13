import React from "react";
import {
    Flex,
    FlexItem, FlexModifiers,
    Grid,
    GridItem,
    PageSection,
    PageSectionVariants,
    Text,
    TextContent, Title
} from "@patternfly/react-core";
import InputDataList from "./InputDataList";
import DecisionOutput from "./DecisionOutput";
import ModelSummary from "./ModelSummary";
import FeaturesTornadoChart from "./FeaturesTornadoChart";

import LoanInputDetail from "../Mocks/loan-input-detail-mock";
import DecisionOutputData from "../Mocks/decision-outcome-mock";

type state = {}
type props = {}
class AuditDetail extends React.Component<props, state> {
    render() {
        return (
            <>
                <PageSection variant={PageSectionVariants.light}>
                    <TextContent>
                        <Title size="4xl" headingLevel="h1">Decision Detail</Title>
                        <Text component="p">Here you can access the decision inputs, outcome, explaination and the details about the involved decision model.</Text>
                    </TextContent>
                </PageSection>
                <PageSection isFilled={true}>
                    <Grid gutter="md">
                        <GridItem span={6} rowSpan={3}>
                            <InputDataList inputData={LoanInputDetail}/>
                        </GridItem>
                        <GridItem span={6}>
                            <Flex breakpointMods={[{modifier: FlexModifiers.grow}]}>
                                <FlexItem style={{flex: "1", alignSelf: "stretch"}}>
                                    <DecisionOutput decision={DecisionOutputData}/>
                                </FlexItem>
                                <FlexItem style={{flex: "1", alignSelf: "stretch"}}>
                                    <ModelSummary />
                                </FlexItem>
                            </Flex>
                        </GridItem>
                        <GridItem span={6}>
                            <FeaturesTornadoChart/>
                        </GridItem>
                        <GridItem span={6}>
                            span = 4, rowSpan = 2
                        </GridItem>

                    </Grid>
                </PageSection>
            </>
        )
    }
}

export default AuditDetail;