import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    DataList,
    DataListCell,
    DataListItem,
    DataListItemCells,
    DataListItemRow, Flex, FlexItem, FlexModifiers,
    Switch,
    Title
} from "@patternfly/react-core";
import { RebalanceIcon } from '@patternfly/react-icons';
import { StickyContainer, Sticky } from 'react-sticky';
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
                <InputValue inputLabel={"Type"} inputValue={"Checking Savings Brokerage account"} category="Borrower / Assets"/>
                <InputValue inputLabel={"Institution Account or Description"} inputValue={"Chase"} category="Borrower / Assets" />
                <InputValue inputLabel={"Value"} inputValue={"35000"} category="Borrower" hasEffect={true} />
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
    const {inputValue, inputLabel, category, hasEffect} = props;
    const effectItemClass = (hasEffect === true) ? "input-data--affecting" : "input-data--ignored";
    const hideImpactIconClass = (hasEffect !== true) ? "input-data__icons--hidden" : "";
    return (
        <DataListItem aria-labelledby={"Input columns"} key={`input-item-heading`} className={`input-data__item ${effectItemClass}`}>
            <DataListItemRow>
                <DataListItemCells dataListCells={[
                    <DataListCell key="primary content" className="input-data__wrap">
                        <span>{inputLabel}</span><span className="input-data__wrap__desc">{category}</span>
                    </DataListCell>,
                    <DataListCell key="secondary content"><span>{inputValue}</span></DataListCell>,
                    <DataListCell isIcon alignRight key="chart content" className="input-data__icons">
                        <RebalanceIcon title={"Impacting feature"} className={`input-data__icons__effect ${hideImpactIconClass}`} />
                    </DataListCell>
                ]}>
                </DataListItemCells>
            </DataListItemRow>
        </DataListItem>
    )
};
class NestedInputDataList extends React.Component<any, any>  {
    constructor(props:any) {
        super(props);
        this.state = {
            showAffectingInput: false
        };
    };
    affectingInputChange = (isChecked:boolean) => {
        this.setState({showAffectingInput: isChecked})
    };
    render() {
        const {showAffectingInput} = this.state;
        const filterClass = (showAffectingInput) ? "js-show-affecting-only" : "";
        return (
            <>
                <Card>
                    <CardHeader>
                        <Title headingLevel="h3" size="2xl">
                            Input Data
                        </Title>
                    </CardHeader>
                    <CardBody>
                        <Flex breakpointMods={[{modifier: FlexModifiers["align-items-flex-start"]}, {modifier: FlexModifiers["space-items-sm"]}]}>
                            <FlexItem>
                                <RebalanceIcon style={{fontSize: 18/16 + "em"}}/>
                            </FlexItem>
                            <FlexItem>
                                <span>Show only features affecting outcome</span>
                            </FlexItem>
                            <FlexItem>
                                <Switch
                                    id="affecting-features"
                                    className="input-data__affecting-switch"
                                    isChecked={showAffectingInput}
                                    onChange={this.affectingInputChange}
                                />
                            </FlexItem>
                        </Flex>
                        <DataList aria-label="Simple data list example" className={filterClass}>
                            <InputValue inputLabel={"Credit Score"} inputValue={"213"} hasEffect={true}/>
                            <InputValue inputLabel={"Down Payment"} inputValue={"100k"} />
                            <StickyContainer>
                                <Sticky>{({ style }) => <div style={style}><CategoryLine categoryLabel={"Property"} /></div>}</Sticky>
                                <InputValue inputLabel={"Purchase Price"} inputValue={80000} category="Property" hasEffect={true} />
                                <InputValue inputLabel={"Monthly Tax Payment"} inputValue={10000} category="Property" hasEffect={true} />
                                <InputValue inputLabel={"Monthly Insurance Payment"} inputValue={350} category="Property" />
                                <InputValue inputLabel={"Monthly HOA Condo Fee"} inputValue={0} category="Property" />
                            </StickyContainer>
                            <StickyContainer>
                                <Sticky>{({ style }) => <div style={style}><CategoryLine categoryLabel={"Property / Address"} /></div>}</Sticky>
                                <InputValue inputLabel={"Street"} inputValue={"272 10th St."} category="Property / Address" />
                                <InputValue inputLabel={"Unit"} inputValue={null} category="Property / Address" />
                                <InputValue inputLabel={"City"} inputValue={"Marina"} category="Property / Address" />
                                <InputValue inputLabel={"State"} inputValue={"CA"} category="Property / Address" hasEffect={true} />
                                <InputValue inputLabel={"ZIP"} inputValue={"93933"} category="Property / Address" />
                            </StickyContainer>
                            <StickyContainer>
                                <Sticky>{({ style }) => <div style={style}><CategoryLine categoryLabel={"Borrower"} /></div>}</Sticky>
                                <InputValue inputLabel={"Full Name"} inputValue={"Jim Osterberg"} category="Borrower" hasEffect={true} />
                                <InputValue inputLabel={"Tax ID"} inputValue={"1111222333"} category="Borrower" hasEffect={true} />
                                <InputValue inputLabel={"Employement Income"} inputValue={"10000"} category="Borrower" hasEffect={true} />
                                <InputValue inputLabel={"Other Income"} inputValue={"0"} category="Borrower" />
                            </StickyContainer>
                            <StickyContainer>
                                <Sticky>{({ style }) => <div style={style}><CategoryLine categoryLabel={"Borrower / Assets"} /></div>}</Sticky>
                                <ListItem />
                                <ListItem />
                                <ListItem />
                            </StickyContainer>
                            <StickyContainer>
                                <Sticky>{({ style }) => <div style={style}><CategoryLine categoryLabel={"Liabilities"} /></div>}</Sticky>
                                <ListItem />
                                <ListItem />
                                <ListItem />
                            </StickyContainer>
                            <StickyContainer>
                                <Sticky>{({ style }) => <div style={style}><CategoryLine categoryLabel={"Lender Ratings"} /></div>}</Sticky>
                                <ListItem />
                                <ListItem />
                                <ListItem />
                            </StickyContainer>
                        </DataList>
                    </CardBody>
                </Card>
            </>
        );
    }
}

export default NestedInputDataList;
