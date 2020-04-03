import React from 'react';
import {DataToolbar, DataToolbarContent, DataToolbarItem} from "@patternfly/react-core/dist/js/experimental";
import {Button, ButtonVariant, InputGroup, TextInput} from "@patternfly/react-core";
import {SearchIcon} from '@patternfly/react-icons'
type ownProps = {
    fromDate: string,
    toDate: string,
    onFromDateUpdate: (date: string) => void,
    onToDateUpdate: (date: string) => void
};

const DecisionListToolbar = (props:ownProps) => {
    const from = props.fromDate;
    const to = props.toDate;
    const updateFromDate = (date: string) => {
        props.onFromDateUpdate(date);
    };
    const updateToDate = (date: string) => {
        props.onToDateUpdate(date);
    };

    return (
        <DataToolbar id="audit-list-toolbar" style={{marginBottom: 'var(--pf-global--spacer--lg)'}}>
            <DataToolbarContent>
                <DataToolbarItem variant="label" id="stacked-example-resource-select">From</DataToolbarItem>
                <DataToolbarItem>
                    <InputGroup>
                        <TextInput name="date-from" id="date-from" type="date" aria-label="set starting date" value={from} onChange={updateFromDate}/>
                    </InputGroup>
                </DataToolbarItem>
                <DataToolbarItem variant="label" id="stacked-example-resource-select">To</DataToolbarItem>
                <DataToolbarItem>
                    <InputGroup>
                        <TextInput name="date-to" id="date-to" type="date" aria-label="set starting date" value={to} onChange={updateToDate}/>
                    </InputGroup>
                </DataToolbarItem>
                <DataToolbarItem>
                    <InputGroup>
                        <TextInput name="search" id="search" type="search" aria-label="search executions by ID" />
                        <Button variant={ButtonVariant.control} aria-label="search button for search input">
                            <SearchIcon />
                        </Button>
                    </InputGroup>
                </DataToolbarItem>
            </DataToolbarContent>
        </DataToolbar>
    );
};

export default DecisionListToolbar;