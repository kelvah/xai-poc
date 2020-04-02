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

const ApprovalBadge = (props:{result:string}) => {
    let className = "decision-outcome-badge decision-outcome-badge--" + props.result.toLocaleLowerCase();
    return (
        <span className={className}>{props.result}</span>
    );
};

const prepareDecisionTableRows = (rowData:IDecision[]) => {
    let rows:IRow[] = [];

    rowData.forEach((item, index) => {
        let row:IRow = {};
        let cells = [];
        cells.push(item.id);
        cells.push(new Date(item.evaluationDate).toLocaleString());
        cells.push({ title: <Link to={`/audit/${item.id}`}>View Detail</Link> });
        row.cells = cells;
        row.decisionKey = 'key-' + index;
        rows.push(row);
    });
    return rows;
};

const Audit = () => {
    const emptyRow = SkeletonRows(3, 8, "decisionKey");
    const [columns] = useState(['ID', 'Date', '']);
    const [rows, setRows] = useState<IRow[]>(emptyRow);
    const [searchString, setSearchString] = useState('');
    const [latestSearches] = useState(["1001", "1007", "1032"]);

    useEffect(() => {
        getDecisions().then(response => {
            setRows(prepareDecisionTableRows(response.data.data));
        });
    }, []);

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
                <Form onSubmit={searchSubmit}>
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
                <Table header="Latest Decisions" cells={columns} rows={rows}>
                    <TableHeader />
                    <TableBody rowKey="decisionKey" />
                </Table>
            </PageSection>
        </>
    )
};
export default Audit;