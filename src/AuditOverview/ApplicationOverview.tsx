import React from 'react';
import {Card, CardBody, CardHeader, Grid, GridItem, Title} from "@patternfly/react-core";

const ApplicationOverview = () => {
    return (
        <Card>
            <CardHeader>
                <Title headingLevel="h3" size="2xl">
                    APPLICATION SUMMARY
                </Title>
            </CardHeader>
            <CardBody>
                <Grid gutter="md" className={"data"}>
                    <GridItem span={6}>
                        <label className={"data__label"}>Application ID</label>
                        <span>#1008</span>
                    </GridItem>
                    <GridItem span={6}>
                        <label className={"data__label"}>Application Status</label>
                        <span>Closed</span>
                    </GridItem>
                    <GridItem span={6}>
                        <label className={"data__label"}>Applicant Name</label>
                        <span>Jim Osterberg</span>
                    </GridItem>
                    <GridItem span={6}>
                        <label className={"data__label"}>Date</label>
                        <span>12/02/2020</span>
                    </GridItem>
                </Grid>
            </CardBody>
        </Card>
    );
};

export default ApplicationOverview;