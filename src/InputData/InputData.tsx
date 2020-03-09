import React from 'react';
import InputDataBrowser from "./InputDataBrowser";
import loanProductsInputScores from '../Mocks/loan-products-input-data-with-scores';
import {Divider, PageSection, PageSectionVariants} from "@patternfly/react-core";

const InputData = () => {
    return (
        <>
            <PageSection
                variant={PageSectionVariants.light}
                style={{paddingTop: 0, paddingBottom: 0}}>
                <Divider />
            </PageSection>
            <PageSection variant={PageSectionVariants.light}>
                <InputDataBrowser inputData={loanProductsInputScores.data}/>
            </PageSection>
        </>
    );
};

export default InputData;