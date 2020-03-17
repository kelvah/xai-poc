import React, {useState} from 'react';
import {
    Select,
    SelectOption,
    SelectOptionObject,
    SelectVariant
} from "@patternfly/react-core";
import {
    DataToolbar,
    DataToolbarContent,
    DataToolbarItem
} from "@patternfly/react-core/dist/js/experimental";
import {IModelVersion} from "./types";
import ModelOutcomeDialog from "./ModelOutcomeDialog";

type propsType = {
    version: IModelVersion,
    history?: IModelVersion[],
    selectedVersion: string,
    onVersionChange: (version:string) => void
};

const ModelVersionsBrowser = (props: propsType) => {
    const { version, history, selectedVersion, onVersionChange } = props;
    const [isExpanded, setIsExpanded] = useState(false);
    //const [selected, setSelected] = useState<string | SelectOptionObject>(version.version);
    const [isDisabled] = useState(false);
    const versionId = "version-id";
    const onToggle = (isExpanded:boolean) => {
        setIsExpanded(isExpanded);
    };

    const onSelect = (event: React.MouseEvent | React.ChangeEvent<Element>, value:string | SelectOptionObject) => {
        setIsExpanded(false);
        if (typeof value === "string") {
            onVersionChange(value);
        }
    };

    return (
        <DataToolbar id="model-version-browser">
            <DataToolbarContent>
                <DataToolbarItem>
                    <span>
                        <span>Decision taken by model:</span> <strong>{version.version}</strong>, <span>released on:</span> <strong>{version.releaseDate}</strong>
                    </span>
                </DataToolbarItem>
                <DataToolbarItem variant="separator" />
                <DataToolbarItem variant="label">Switch Model Version</DataToolbarItem>
                <DataToolbarItem>
                        <Select
                            id="model-version-history"
                            className="model-version-browser__history"
                            variant={SelectVariant.single}
                            aria-label="Select Input"
                            onToggle={onToggle}
                            onSelect={onSelect}
                            selections={selectedVersion}
                            isExpanded={isExpanded}
                            ariaLabelledBy={versionId}
                            isDisabled={isDisabled}
                            placeholderText="Choose version"
                        >
                            {history && history.map((option, index) => (
                                <SelectOption
                                    key={index}
                                    value={option.version}
                                    isSelected={(option.version === selectedVersion)}
                                >{`${option.version} - ${option.releaseDate}`}</SelectOption>
                            ))}
                        </Select>
                </DataToolbarItem>
                <DataToolbarItem variant="separator" />
                <DataToolbarItem>
                    <ModelOutcomeDialog isOriginalVersion={(version.version === selectedVersion)} selectedVersion={selectedVersion}/>
                </DataToolbarItem>
            </DataToolbarContent>
        </DataToolbar>
    );
};

export default ModelVersionsBrowser;