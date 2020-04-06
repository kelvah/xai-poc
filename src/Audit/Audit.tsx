import React, {useEffect, useState} from "react";
import {
    Button,
    ButtonVariant,
    Form,
    InputGroup,
    List,
    ListItem,
    ListVariant,
    PageSection,
    PageSectionVariants,
    Text,
    TextContent,
    TextInput,
    Title
} from "@patternfly/react-core";
import {Link} from "react-router-dom";
import {IRow, Table, TableBody, TableHeader} from "@patternfly/react-table";
import SkeletonRows from "../Shared/Skeletons/SkeletonRows";
import {getExecutions} from "../Shared/Api/audit.api";
import {IExecution} from "./types";
import './Audit.scss';
import {
    DataToolbar,
    DataToolbarContent,
    DataToolbarItem,
    DataToolbarItemVariant
} from "@patternfly/react-core/dist/js/experimental";
import {SearchIcon} from "@patternfly/react-icons";
import FromFilter from "./FromFilter/FromFilter";
import ToFilter from "./ToFilter/ToFilter";
import PaginationContainer from "./PaginationContainer/PaginationContainer";

const ExecutionStatus = (props:{result:boolean}) => {
    let className = "execution-status-badge execution-status-badge--";
    let status;
    if (props.result) {
        className += 'success';
        status = "Completed";
    } else {
        className += 'failure';
        status = "Failed";
    }
    return (
        <span className={className}>{status}</span>
    );
};

const prepareExecutionTableRows = (rowData:IExecution[]) => {
    let rows:IRow[] = [];

    rowData.forEach((item, index) => {
        let row:IRow = {};
        let cells = [];
        cells.push('#' + item.executionId);
        cells.push(item.executorName);
        cells.push(new Date(item.executionDate).toLocaleString());
        cells.push({
            title: <ExecutionStatus result={item.executionSucceeded}/>
        });
        cells.push({ title: <Link to={`/audit/${item.executionId}`}>View Detail</Link> });
        row.cells = cells;
        row.decisionKey = 'key-' + index;
        rows.push(row);
    });
    return rows;
};

const skeletonRows = SkeletonRows(5, 8, "decisionKey");

const Audit = () => {
    const [columns] = useState(['ID', 'Executor', 'Date', 'Execution Status', '']);
    const [rows, setRows] = useState<IRow[]>(skeletonRows);
    const [searchString, setSearchString] = useState('');
    const [latestSearches] = useState(["1001", "1007", "1032"]);
    let fromInitDate = new Date();
    fromInitDate.setMonth(fromInitDate.getMonth() - 1);
    const [fromDate, setFromDate] = useState(new Date().toISOString().substr(0, 10));
    const [toDate, setToDate] = useState(fromInitDate.toISOString().substr(0, 10));
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setRows(skeletonRows);
        getExecutions(fromDate, toDate, pageSize, pageSize * (page - 1))
            .then(response => {
                setRows(prepareExecutionTableRows(response.data.headers));
                setTotal(response.data.total);
            })
            .catch(() => {});
    }, [fromDate, toDate, page, pageSize]);

    const searchSubmit = (event:React.SyntheticEvent):void => {
        event.preventDefault();
        /* if (searchString.length > 3) {
            setRows(rowData.filter(item => item.cells[0].includes(searchString)))
        }*/
    };

    return (
        <>
            <PageSection variant={PageSectionVariants.light}>
                <TextContent>
                    <Title size="4xl" headingLevel="h1">Audit Investigation</Title>
                    <Text component="p">
                        Here you can retrieve all the available information about past cases
                    </Text>
                </TextContent>
            </PageSection>
            <PageSection style={{minHeight: "50em"}} isFilled={true}>
                <div style={{marginBottom: 'var(--pf-global--spacer--lg)'}}>
                    <List variant={ListVariant.inline}>
                        <ListItem>Last Opened Decisions:</ListItem>
                        {latestSearches.map((item, index) => {
                            return <ListItem key={`row-${index}`}><Link to={`/audit/${item}`}>#{item}</Link></ListItem>
                        })}
                    </List>
                </div>
                <DataToolbar id="audit-list-top-toolbar" style={{marginBottom: 'var(--pf-global--spacer--lg)'}}>
                    <DataToolbarContent>
                        <DataToolbarItem variant="label" id="stacked-example-resource-select">From</DataToolbarItem>
                        <DataToolbarItem>
                            <FromFilter fromDate={fromDate} onFromDateUpdate={setFromDate}/>
                        </DataToolbarItem>
                        <DataToolbarItem variant="label" id="stacked-example-resource-select">To</DataToolbarItem>
                        <DataToolbarItem>
                            <ToFilter toDate={toDate} onToDateUpdate={setToDate}/>
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
                            <PaginationContainer
                                total={total}
                                page={page}
                                pageSize={pageSize}
                                onSetPage={setPage}
                                onSetPageSize={setPageSize}
                                paginationId="audit-list-top-pagination"
                            />
                        </DataToolbarItem>
                    </DataToolbarContent>
                </DataToolbar>

                <Form onSubmit={searchSubmit} style={{display: "none"}}>
                    <InputGroup style={{width: "500px", marginBottom: 'var(--pf-global--spacer--lg)'}}>
                        <TextInput name="auditSearch" id="auditSearch" type="text" value={searchString} onChange={setSearchString} aria-label="search applications" />
                        <Button type="submit" variant={ButtonVariant.control} aria-label="search button for search input">
                            Search
                        </Button>
                    </InputGroup>
                </Form>

                <Table cells={columns} rows={rows} aria-label="Executions list">
                    <TableHeader />
                    <TableBody rowKey="decisionKey" />
                </Table>

                <DataToolbar id="audit-list-bottom-toolbar" style={{marginTop: 'var(--pf-global--spacer--lg)'}}>
                    <DataToolbarContent>
                        <DataToolbarItem variant={DataToolbarItemVariant.pagination}>
                            <PaginationContainer
                                total={total}
                                page={page}
                                pageSize={pageSize}
                                onSetPage={setPage}
                                onSetPageSize={setPageSize}
                                paginationId="audit-list-bottom-pagination"
                            />
                        </DataToolbarItem>
                    </DataToolbarContent>
                </DataToolbar>
            </PageSection>
        </>
    )
};
export default Audit;