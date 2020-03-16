import React, {useState} from 'react';
import {
    Button,
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

type propsType = {
    version: {
        version: string,
        releaseDate: string,
        authoredBy: string
    },
    history?: {
        version: string,
        releaseDate: string,
        authoredBy: string
    }[]
};

const ModelVersionsBrowser = (props: propsType) => {
    const { version, history } = props;
    const [isExpanded, setIsExpanded] = useState(false);
    const [selected, setSelected] = useState<string | SelectOptionObject>(version.version);
    const [isDisabled] = useState(false);
    const versionId = "version-id";
    const onToggle = (isExpanded:boolean) => {
        setIsExpanded(isExpanded);
    };

    const onSelect = (event: React.MouseEvent | React.ChangeEvent<Element>, value:string | SelectOptionObject) => {
        setIsExpanded(false);
        setSelected(value);
    };

    return (
        <DataToolbar id="model-version-browser">
            <DataToolbarContent>
                <DataToolbarItem>
                    <span>Version used:</span> <strong>{version.version}</strong>
                </DataToolbarItem>
                <DataToolbarItem>
                    <span>Released on:</span> <strong>{version.releaseDate}</strong>
                </DataToolbarItem>
                <DataToolbarItem variant="separator" />
                <DataToolbarItem variant="label">Browse History</DataToolbarItem>
                <DataToolbarItem>
                        <Select
                            id="model-version-history"
                            variant={SelectVariant.single}
                            aria-label="Select Input"
                            onToggle={onToggle}
                            onSelect={onSelect}
                            selections={selected}
                            isExpanded={isExpanded}
                            ariaLabelledBy={versionId}
                            isDisabled={isDisabled}
                            placeholderText="Choose version"
                        >
                            {history && history.map((option, index) => (
                                <SelectOption
                                    key={index}
                                    value={option.version}
                                    isSelected={(option.version === selected)}
                                >{`${option.version} - ${option.releaseDate}`}</SelectOption>
                            ))}
                        </Select>
                </DataToolbarItem>
                <DataToolbarItem variant="separator" />
                <DataToolbarItem><Button variant="secondary">View Outcome</Button></DataToolbarItem>
            </DataToolbarContent>

        </DataToolbar>
    );
};

export default ModelVersionsBrowser;