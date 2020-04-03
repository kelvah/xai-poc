import React, {useEffect, useState} from "react";
import {
    Button,
    ButtonVariant, Form, InputGroup, List, ListItem, ListVariant,
    PageSection,
    PageSectionVariants,
    Text,
    TextContent,
    TextInput, Title
} from "@patternfly/react-core";
import {Link} from "react-router-dom";
import {Table, TableHeader, TableBody, IRow} from "@patternfly/react-table";
import SkeletonRows from "../Shared/Skeletons/SkeletonRows";
import {getDecisions} from "../Shared/Api/audit.api";
import {IDecision} from "./types";
import './Audit.scss';
import DecisionListToolbar from "./DecisionListToolbar/DecisionListToolbar";

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

const prepareDecisionTableRows = (rowData:IDecision[]) => {
    let rows:IRow[] = [];

    rowData.forEach((item, index) => {
        let row:IRow = {};
        let cells = [];
        cells.push(item.id);
        cells.push(item.executorName);
        cells.push(new Date(item.evaluationDate).toLocaleString());
        cells.push({
            title: <ExecutionStatus result={item.evaluationSucceeded}/>
        });
        cells.push({ title: <Link to={`/audit/${item.id}`}>View Detail</Link> });
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
        getDecisions(fromDate, toDate, pageSize, pageSize * (page - 1)).then(response => {
            setRows(prepareDecisionTableRows(response.data.data));
            setTotal(response.data.total);
        });
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
                <DecisionListToolbar
                    fromDate={fromDate}
                    toDate={toDate}
                    onFromDateUpdate={setFromDate}
                    onToDateUpdate={setToDate}
                    page={page}
                    total={total}
                    pageSize={pageSize}
                    onSetPage={setPage}
                    onSetPageSize={setPageSize}
                />
                <Form onSubmit={searchSubmit} style={{display: "none"}}>
                    <InputGroup style={{width: "500px", marginBottom: 'var(--pf-global--spacer--lg)'}}>
                        <TextInput name="auditSearch" id="auditSearch" type="text" value={searchString} onChange={setSearchString} aria-label="search applications" />
                        <Button type="submit" variant={ButtonVariant.control} aria-label="search button for search input">
                            Search
                        </Button>
                    </InputGroup>
                </Form>
                <div style={{marginBottom: 'var(--pf-global--spacer--lg)'}}>
                    <List variant={ListVariant.inline}>
                        <ListItem>Last Opened Decisions:</ListItem>
                        {latestSearches.map((item, index) => {
                            return <ListItem key={`row-${index}`}><Link to={`/audit/${item}`}>#{item}</Link></ListItem>
                        })}
                    </List>
                </div>
                <Table cells={columns} rows={rows} aria-label="Executions list">
                    <TableHeader />
                    <TableBody rowKey="decisionKey" />
                </Table>
            </PageSection>
        </>
    )
};
export default Audit;