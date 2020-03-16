import React from 'react';
import {PageSection} from "@patternfly/react-core";
import "./ModelLookup.scss";
import ModelDiagram from "./ModelDiagram";
import ModelVersionsBrowser from "./ModelVersionsBrowser";
const modelInfo = {
    version: {
        version: "v5.0",
        releaseDate: "10/02/2020",
        authoredBy: "Edward Blake"
    },
    history: [
        {
            version: "v5.0",
            releaseDate: "10/02/2020",
            authoredBy: "Edward Blake"
        },
        {
            version: "v4.0",
            releaseDate: "12/01/2020",
            authoredBy: "Edward Blake"
        },
        {
            version: "v3.0",
            releaseDate: "11/11/2019",
            authoredBy: "Edward Blake"
        },
        {
            version: "v2.0",
            releaseDate: "06/10/2019",
            authoredBy: "Edward Blake"
        },
        {
            version: "v1.0",
            releaseDate: "09/09/2019",
            authoredBy: "Edward Blake"
        }
    ]
};
const ModelLookup = () => {
    return (
        <>
            <PageSection variant={"light"}>
                <ModelVersionsBrowser version={modelInfo.version} history={modelInfo.history}/>
                <ModelDiagram />
            </PageSection>
        </>
    );
};

export default ModelLookup;