import React from "react";
import {
    Button,
    ButtonVariant, Form, InputGroup, List, ListItem, ListVariant,
    PageSection,
    PageSectionVariants,
    Text,
    TextContent,
    TextInput, Title
} from "@patternfly/react-core";
import {Table, TableHeader, TableBody, IRow} from "@patternfly/react-table";
import {Link} from "react-router-dom";
import AuditList from "../Mocks/decisions-list-mock";
const latestSearches = ["1001", "1007", "1032"];
type appProps = {};
type stateType = {
    columns: string[],
    rows: IRow[],
    search: string
}
const ApprovalState = (props:{result:string}) => {
    let className = "decision-outcome-badge decision-outcome-badge--" + props.result.toLocaleLowerCase();
    return (
        <span className={className}>{props.result}</span>
    );
};
const rowData = [...AuditList];
rowData.map((item:IRow, index) => {
    if (item.cells && item.cells.length) {
        let value = item.cells.pop();
        if (typeof value === "string") {
            item.cells.push({
                title: <ApprovalState result={value}/>
            });
        }
    }
    if (item.cells) {
        item.cells.push({title: <Link to={`/audit/${item.cells[0]}`}>View Detail</Link>});
    }
    item.decisionKey = 'key-' + index;
    return item;
});
class Audit extends React.Component<appProps, stateType> {
    constructor(props: appProps) {
        super(props);
        this.state = {
            columns: ['ID', 'Subject Name', 'Date', 'Outcome', ''],
            rows: [],
            search: ''
        };
    }
    componentDidMount(): void {
        this.setState((state) => ({
            rows: [...state.rows, ...rowData]
        }));
    };
    handleSearchChange = (searchString:string):void => {
        this.setState( {search: searchString});
    };
    search = (event:React.SyntheticEvent):void => {
        event.preventDefault();
        this.setState((state) => {
            return {
                rows: rowData.filter(item => item.cells[0].includes(state.search))
            }
        })
    };
    render() {
        const { columns, rows, search } = this.state;
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
                    <Form onSubmit={this.search}>
                        <InputGroup style={{width: "500px", marginBottom: 'var(--pf-global--spacer--lg)'}}>
                            <TextInput name="auditSearch" id="auditSearch" type="text" value={search} onChange={this.handleSearchChange} aria-label="search applications" />
                            <Button type="submit" variant={ButtonVariant.control} aria-label="search button for search input">
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                    <Text component="p" style={{marginBottom: 'var(--pf-global--spacer--lg)'}}>
                        <List variant={ListVariant.inline}>
                            <ListItem>Last opened audits:</ListItem>
                            {latestSearches.map(item => {
                                return <ListItem><Link to={`/audit/${item}`}>#{item}</Link></ListItem>
                            })}
                        </List>
                    </Text>
                    <Table header="Applications" cells={columns} rows={rows}>
                        <TableHeader />
                        <TableBody rowKey="decisionKey" />
                    </Table>
                </PageSection>
            </>
        )
    }
}

export default Audit;