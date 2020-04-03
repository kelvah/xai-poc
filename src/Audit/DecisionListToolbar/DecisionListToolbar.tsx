import React from 'react';
import {
    DataToolbar,
    DataToolbarContent,
    DataToolbarItem,
    DataToolbarItemVariant
} from "@patternfly/react-core/dist/js/experimental";
import {Button, ButtonVariant, InputGroup, Pagination, PaginationVariant, TextInput} from "@patternfly/react-core";
import {SearchIcon} from '@patternfly/react-icons';

type ownProps = {
    fromDate: string,
    toDate: string,
    onFromDateUpdate: (date: string) => void,
    onToDateUpdate: (date: string) => void,
    total: number,
    page: number,
    pageSize: number,
    onSetPage: (page: number) => void,
    onSetPageSize: (size: number) => void
};

const DecisionListToolbar = (props: ownProps) => {
    const {fromDate, toDate, total, page, pageSize} = props;
    const updateFromDate = (date: string) => {
        props.onFromDateUpdate(date);
    };
    const updateToDate = (date: string) => {
        props.onToDateUpdate(date);
    };
    const updatePage = (event: any, page: number) => {
        props.onSetPage(page);
    };
    const updatePageSize = (event: any, page: number) => {
        props.onSetPageSize(page);
    };

    return (
        <DataToolbar id="audit-list-toolbar" style={{marginBottom: 'var(--pf-global--spacer--lg)'}}>
            <DataToolbarContent>
                <DataToolbarItem variant="label" id="stacked-example-resource-select">From</DataToolbarItem>
                <DataToolbarItem>
                    <InputGroup>
                        <TextInput name="date-from" id="date-from" type="date" aria-label="set starting date" value={fromDate} onChange={updateFromDate}/>
                    </InputGroup>
                </DataToolbarItem>
                <DataToolbarItem variant="label" id="stacked-example-resource-select">To</DataToolbarItem>
                <DataToolbarItem>
                    <InputGroup>
                        <TextInput name="date-to" id="date-to" type="date" aria-label="set starting date" value={toDate} onChange={updateToDate}/>
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
                <DataToolbarItem variant={DataToolbarItemVariant.pagination}>
                    <Pagination
                        itemCount={total}
                        perPage={pageSize}
                        page={page}
                        onSetPage={updatePage}
                        widgetId="decisions-list-pagination"
                        onPerPageSelect={updatePageSize}
                        variant={PaginationVariant.right}
                    />
                </DataToolbarItem>
            </DataToolbarContent>
        </DataToolbar>
    );
};

export default DecisionListToolbar;