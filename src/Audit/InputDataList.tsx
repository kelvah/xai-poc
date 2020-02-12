import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    DataList,
    DataListCell,
    DataListItem,
    DataListItemCells,
    DataListItemRow,
    Title
} from "@patternfly/react-core";

type inputDataProps = {
    inputData: inputElement[]
}
type inputElement = {
    inputName: string,
    inputValue: string | number | boolean
}

const InputDataList = (props: inputDataProps) => {
    const inputList = props.inputData;
    return (
        <>
            <Card>
                <CardHeader>
                    <Title headingLevel="h3" size="xl">
                        Input Data
                    </Title>
                </CardHeader>
                <CardBody>
                    <DataList aria-label="Simple data list example">
                        {inputList.map((input, index) => {
                            return (
                                <DataListItem aria-labelledby="simple-item1" key={`input-item${index}`}>
                                    <DataListItemRow>
                                        <DataListItemCells
                                            dataListCells={[
                                                <DataListCell key="primary content">
                                                    <span>{input.inputName}</span>
                                                </DataListCell>,
                                                <DataListCell key="secondary content" alignRight={true}>{input.inputValue}</DataListCell>
                                            ]}
                                        />
                                    </DataListItemRow>
                                </DataListItem>
                            )
                        })}
                    </DataList>
                </CardBody>
            </Card>
        </>
    );
};

export default InputDataList;