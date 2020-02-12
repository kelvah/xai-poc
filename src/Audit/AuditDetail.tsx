import React from "react";
import {Grid, GridItem, PageSection, PageSectionVariants, Text, TextContent} from "@patternfly/react-core";
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
                        <Text component="h1">Decision Detail</Text>
                        <Text component="p">Here you can access the decision inputs, outcome, explaination and the details about the involved decision model.</Text>
                    </TextContent>
                </PageSection>
                <PageSection>
                    <Grid gutter="md">
                        <GridItem span={6} rowSpan={3}>
                            <InputDataList inputData={LoanInputDetail}/>
                        </GridItem>
                        <GridItem span={3}>
                            <DecisionOutput decision={DecisionOutputData}/>
                        </GridItem>
                        <GridItem span={3}>
                            <ModelSummary/>
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