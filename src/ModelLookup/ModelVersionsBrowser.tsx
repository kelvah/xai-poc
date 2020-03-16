import React, {useState} from 'react';
import {
    Select,
    SelectOption,
    SelectOptionObject,
    SelectVariant,
    Toolbar, ToolbarGroup,
    ToolbarItem
} from "@patternfly/react-core";

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
        <div className="model-diagram__switch">
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarItem>
                        <Select
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
                    </ToolbarItem>
                </ToolbarGroup>
            </Toolbar>
        </div>
    );
};

export default ModelVersionsBrowser;