import React from 'react';
import {
    Card, CardBody, CardHeader,
    Grid,
    GridItem,
    PageSection,
    Stack,
    StackItem, Title
} from "@patternfly/react-core";
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
                    </Stack>
                </GridItem>
            </Grid>
        </PageSection>
    );
};

export default AuditDetailOverview;