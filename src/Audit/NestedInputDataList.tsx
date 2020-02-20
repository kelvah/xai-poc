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
/*
const data = [
    {
        inputLabel: "Credit Score",
        inputValue: 738
    },
    {
        inputLabel: "Down Payment",
        inputValue: 70000
    },
    {
        inputLabel: "Property",
        inputValue: [
            {
                inputLabel: "Purchase Price",
                inputValue: 340000
            },
            {
                inputLabel: "Monthly Tax Payment",
                inputValue: 350
            },
            {
                inputLabel: "Monthly Insurance Payment",
                inputValue: 100
            }
        ]
    },
    {
        inputLabel: "Borrowe",
        inputValue: {}
    }
];
*/
const ListItem = () => {
    return (
        <DataListItem aria-labelledby={""} className={"category__sublist"}>
            <DataList aria-label={""} className={"category__sublist__item"}>
                <InputValue inputLabel={"Other Income"} inputValue={"0"} category="Borrower" />
                <InputValue inputLabel={"Type"} inputValue={"Checking Savings Brokerage account"} category="Borrower / Assets"/>
                <InputValue inputLabel={"Institution Account or Description"} inputValue={"Chase"} category="Borrower / Assets" />
            </DataList>
        </DataListItem>
    )
};
const CategoryLine = (props:any) => {
    const {categoryLabel} = props;
    const categoryKey = categoryLabel.replace(' ', '');
    return (
        <DataListItem aria-labelledby={""} key={"category-" + categoryKey} className="category__heading">
            <DataListItemRow>
                <DataListItemCells dataListCells={[
                    <DataListCell key="primary content"><span>{categoryLabel}</span></DataListCell>
                ]}>
                </DataListItemCells>
            </DataListItemRow>
        </DataListItem>
    )
};
const InputValue = (props:any) => {
    const {inputValue, inputLabel, category} = props;
    return (
        <DataListItem aria-labelledby={"Input columns"} key={`input-item-heading`} >
            <DataListItemRow>
                <DataListItemCells dataListCells={[
                    <DataListCell key="primary content" className="category-wrap">
                        <span>{inputLabel}</span><span className="category-wrap__desc">{category}</span>
                    </DataListCell>,
                    <DataListCell key="secondary content"><span>{inputValue}</span></DataListCell>,
                    <DataListCell isFilled={false} alignRight key="chart content">a</DataListCell>
                ]}>
                </DataListItemCells>
            </DataListItemRow>
        </DataListItem>
    )
};
const NestedInputDataList = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Title headingLevel="h3" size="2xl">
                        Input Data
                    </Title>
                </CardHeader>
                <CardBody>
                    <DataList aria-label="Simple data list example">
                        <DataListItem aria-labelledby={"Input columns"} key={`input-item-heading 1`}>
                            <DataListItemRow>
                                <DataListItemCells dataListCells={[
                                    <DataListCell key="primary content"><span>Credit Score</span></DataListCell>,
                                    <DataListCell key="secondary content"><span>213</span></DataListCell>,
                                    <DataListCell isFilled={false} alignRight key="chart content">a</DataListCell>
                                ]}>
                                </DataListItemCells>
                            </DataListItemRow>
                        </DataListItem>
                        <DataListItem aria-labelledby={""}>
                            <DataListItemRow>
                                <DataListItemCells dataListCells={[
                                    <DataListCell key="primary content"><span>Down Payment</span></DataListCell>,
                                    <DataListCell key="secondary content"><span>100k</span></DataListCell>,
                                    <DataListCell isFilled={false} alignRight key="chart content">a</DataListCell>
                                ]}>
                                </DataListItemCells>
                            </DataListItemRow>
                        </DataListItem>
                        <CategoryLine categoryLabel={"Property"} />
                        <InputValue inputLabel={"Purchase Price"} inputValue={80000} category="Property"/>
                        <InputValue inputLabel={"Monthly Tax Payment"} inputValue={10000} category="Property" />
                        <InputValue inputLabel={"Monthly Insurance Payment"} inputValue={350} category="Property" />
                        <InputValue inputLabel={"Monthly HOA Condo Fee"} inputValue={0} category="Property" />
                        <CategoryLine categoryLabel={"Property / Address"}/>
                        <InputValue inputLabel={"Street"} inputValue={"272 10th St."} category="Property / Address" />
                        <InputValue inputLabel={"Unit"} inputValue={null} category="Property / Address" />
                        <InputValue inputLabel={"City"} inputValue={"Marina"} category="Property / Address" />
                        <InputValue inputLabel={"State"} inputValue={"CA"} category="Property / Address" />
                        <InputValue inputLabel={"ZIP"} inputValue={"93933"} category="Property / Address" />
                        <CategoryLine categoryLabel={"Borrower"}/>
                        <InputValue inputLabel={"Full Name"} inputValue={"Jim Osterberg"} category="Borrower" />
                        <InputValue inputLabel={"Tax ID"} inputValue={"1111222333"} category="Borrower" />
                        <InputValue inputLabel={"Employement Income"} inputValue={"10000"} category="Borrower" />
                        <InputValue inputLabel={"Other Income"} inputValue={"0"} category="Borrower" />
                        <CategoryLine categoryLabel={"Borrower / Assets"}/>
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </DataList>
                </CardBody>
            </Card>
        </>
    );
};

export default NestedInputDataList;
