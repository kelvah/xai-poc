import React from "react";
import {PageSection, PageSectionVariants, Text, TextContent} from "@patternfly/react-core";
import {Table, TableHeader, TableBody, IRow} from "@patternfly/react-table";
import {Link} from "react-router-dom";
import AuditList from "../Mocks/decisions-list-mock";

type appProps = {};
type stateType = {
    columns: string[],
    rows: IRow[]
}
const rowData = [...AuditList];
rowData.map((item:IRow, index) => {
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
            columns: ['ID', 'Subject Name', 'Age', 'Outcome', ''],
            rows: []
        };
    }
    componentDidMount(): void {
        this.setState((state) => ({
            rows: [...state.rows, ...rowData]
        }));
    };
    render() {
        const { columns, rows } = this.state;
        return (
            <>
                <PageSection variant={PageSectionVariants.light}>
                    <TextContent>
                        <Text component="h1">Audit Investigation</Text>
                        <Text component="p">
                            Here you can retrieve all the available information about past cases
                        </Text>
                    </TextContent>
                </PageSection>
                <PageSection>
                    <Table header="Decisions" cells={columns} rows={rows}>
                        <TableHeader />
                        <TableBody rowKey="decisionKey" />
                    </Table>
                </PageSection>
            </>
        )
    }
}

export default Audit;