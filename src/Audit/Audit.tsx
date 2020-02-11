import React from "react";
import {PageSection, PageSectionVariants, Text, TextContent} from "@patternfly/react-core";
import {Table, TableHeader, TableBody, IRow} from "@patternfly/react-table";
import {Link} from "react-router-dom";

type appProps = {};
type stateType = {
    columns: string[],
    rows: IRow[]
}
const rowData = [
    {
        cells: ['1000', 'John Doe', '33', 'Rejected']
    },
    {
        cells: ['1001', 'Jane Doe', '35', 'Approved']
    },
    {
        cells: ['1002', 'Jim Osterberg', '37', 'Approved']
    }];
rowData.map((item:IRow, index) => {
    if (item.cells) {
        item.cells.push({title: <Link to="/detail">View Detail</Link>});
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
        console.log(rowData);
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