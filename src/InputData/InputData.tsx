import React from 'react';
import {
    PageSection,
    PageSectionVariants,
    Text,
    TextContent,
    Title
} from "@patternfly/react-core";

const InputData = () => {
    return (
        <>
            <PageSection variant={PageSectionVariants.light}>
                <TextContent>
                    <Title size="4xl" headingLevel="h1">ID #1008 - Decision Detail</Title>
                    <Text component="p">Here you can access the decision inputs, outcome, explaination and the details about the involved decision model.</Text>
                </TextContent>
            </PageSection>
            <PageSection isFilled={true}>
                <h1>input data</h1>
            </PageSection>
        </>
    );
};

export default InputData;