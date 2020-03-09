import React, {useEffect, useState} from 'react';
import {
    Button,
    DataList,
    DataListCell,
    DataListItem,
    DataListItemCells,
    DataListItemRow
} from "@patternfly/react-core";

import "./inputDataBrowser.scss";
import FeatureDistributionBoxPlot from "../Audit/FeatureDistributionBoxPlot";
import FeatureDistributionStackedChart from "./FeatureDistributionStackedChart";

type itemObject = {
    label: string,
    value?: string | number,
    children?: { [key: string]: itemObject },
    list?: { [key: string]: object }[],
    impact?: boolean | number,
    score?: number
}
type inputItems = { [key: string]: itemObject };
const ItemsSubList = (props:{itemsList: { [key: string]: itemObject }}) => {
    const {itemsList} = props;
    let elements = [];
    for (let element in itemsList) {
        if (itemsList.hasOwnProperty(element)) {
            elements.push(itemsList[element]);
        }
    }
    return (
        <DataListItem aria-labelledby={""} className={"category__sublist"}>
            <DataList aria-label={""} className={"category__sublist__item"}>
                { elements.map(item => {
                    return (
                        <InputValue
                            inputLabel={item.label}
                            inputValue={item.value}
                            hasEffect={item.impact}
                            score={item.score}
                            key={Math.floor(Math.random() * 10000)}
                            category={itemCategory}
                        />
                    )})
                }
            </DataList>
        </DataListItem>
    )
};
const CategoryLine = (props:any) => {
    const {categoryLabel} = props;
    const categoryKey = categoryLabel.replace(' ', '').toLocaleLowerCase();
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
    const {inputValue, inputLabel, category, hasEffect, score} = props;
    const effectItemClass = (hasEffect === true) ? "input-data--affecting" : "input-data--ignored";
    //const effectIconClass = (hasEffect === true) ? "input-data__icons__effect" : "input-data__icons__no-effect";
    //const effectTitle = (hasEffect === true) ? "Impacting Feature" : "Not Impacting Feature";
    const dataListCells = [];
    dataListCells.push(<DataListCell width={3} key="primary content" className="input-data__wrap">
        <span>{inputLabel}</span><span className="input-data__wrap__desc">{category}</span>
    </DataListCell>);
    dataListCells.push(<DataListCell width={2} key="secondary content"><span>{inputValue}</span></DataListCell>);
    dataListCells.push((
        <DataListCell width={1} key="score content" className="input-data__score">
            {score}
        </DataListCell>
    ));
    if (typeof inputValue === "number") {
        dataListCells.push((
            <DataListCell width={1} key="dist 1" className="input-data__wrap">
                <span>640</span><span className="input-data__wrap__desc">Mean</span>
            </DataListCell>
        ));
        dataListCells.push((
            <DataListCell width={1} key="dist 2" className="input-data__wrap">
                <span>75</span><span className="input-data__wrap__desc">Std Mean</span>
            </DataListCell>
        ));
        dataListCells.push((
            <DataListCell width={1} key="dist 3" className="input-data__wrap">
                <span>900</span><span className="input-data__wrap__desc">High</span>
            </DataListCell>
        ));
        dataListCells.push((
            <DataListCell width={1} key="dist 4" className="input-data__wrap">
                <span>500</span><span className="input-data__wrap__desc">Avg</span>
            </DataListCell>
        ));
        dataListCells.push((
            <DataListCell width={2} key="dist 5" style={{paddingTop: 0}}>
                {<FeatureDistributionBoxPlot />}
            </DataListCell>
        ));
    }
    if (typeof inputValue === "string") {
        dataListCells.push((
            <DataListCell width={1} key="dist 1" className="input-data__wrap">
                <span>15</span><span className="input-data__wrap__desc">Unique</span>
            </DataListCell>
        ));
        dataListCells.push((
            <DataListCell width={1} key="dist 2" className="input-data__wrap">
                <span>Some Value</span><span className="input-data__wrap__desc">Top</span>
            </DataListCell>
        ));
        dataListCells.push(<DataListCell key={"dist 4"}/>);
        dataListCells.push((
            <DataListCell width={1} key="dist 3" className="input-data__wrap">
                <span>154</span><span className="input-data__wrap__desc">Top Freq</span>
            </DataListCell>
        ));
        dataListCells.push((
            <DataListCell width={2} key="dist 5" style={{paddingTop: 0}}>
                {<FeatureDistributionStackedChart />}
            </DataListCell>
        ));
    }
    return (
        <DataListItem aria-labelledby={"Input columns"} key={`input-item-heading`} className={`input-data__item ${effectItemClass}`}>
            <DataListItemRow>
                <DataListItemCells dataListCells={dataListCells}>
                </DataListItemCells>
            </DataListItemRow>
        </DataListItem>
    )
};


let itemCategory = "";
const renderItem = (item:itemObject, category?:string) => {
    if (item.hasOwnProperty('value')) {
        let key = Math.floor(Math.random() * 10000);
        return <InputValue inputLabel={item.label} inputValue={item.value} hasEffect={item.impact} score={item.score} category={itemCategory} key={key} />

    }
    if (item.hasOwnProperty('children')) {
        // console.table(item);
        itemCategory = (category) ? `${itemCategory} / ${category}` : item.label;
        let categoryLabel = (itemCategory.length > 0) ? `${itemCategory}` : item.label;
        let children = [];
        for (let child in item.children) {
            if (item.children.hasOwnProperty(child)) {
                children.push(item.children[child]);
            }
        }
        return (
            <React.Fragment key={Math.floor(Math.random() * 10000)}>
                <div className='category' >
                    <CategoryLine categoryLabel={categoryLabel} />
                </div>
                {children.map(item => renderItem(item, item.label))}
            </React.Fragment>
        )
    }
    if (item.hasOwnProperty('list')) {
        itemCategory = (category) ? `${itemCategory} / ${category}` : item.label;
        let categoryLabel = (itemCategory.length > 0) ? `${itemCategory}` : item.label;
        let listItems:any[] = [];
        if (item.list) {
            item.list.forEach((object) => {
                let itemFeatures = [];
                for (let property in object) {
                    if (object.hasOwnProperty(property)) {
                        itemFeatures.push(object[property]);
                    }
                }
                listItems.push(itemFeatures);
            });
        }

        return (
            <React.Fragment key={Math.floor(Math.random() * 10000)}>
                <div className='category'><CategoryLine categoryLabel={categoryLabel} key={Math.random()} /></div>
                {listItems && listItems.map((item) => (
                        <ItemsSubList itemsList={item} key={Math.floor(Math.random() * 10000)} />
                    )
                )}
            </React.Fragment>
        )
    }
};

const InputDataBrowser = (props:{inputData:inputItems}) => {
    const {inputData} = props;
    const [inputs, setInputs] = useState<itemObject[] | null>(null);
    const [categories, setCategories] = useState<string[]>([]);
    const [viewSection, setViewSection] = useState<number>(0);

    const handleSectionSwitch = (index:number) => {
        setViewSection(index);
    };

    useEffect(() => {
        const items:itemObject[] = [];
        const categories = [];
        const rootSection:itemObject = {
            label: "Root",
            children: {}
        };
        for (let item in inputData) {
            if (inputData.hasOwnProperty(item)) {
                if (inputData[item].hasOwnProperty("value")) {
                    // collecting properties with values at root level (orphans of category)
                    rootSection.children![item] = {...inputData[item]};
                } else {
                    items.push(inputData[item]);
                    categories.push(inputData[item].label);
                }
            }
        }
        if (Object.keys(rootSection).length) {
            // if orphan properties has been found, add them to sections array and create "main" section
            items.unshift(rootSection);
            categories.unshift("Root");
        }
        setInputs(items);
        setCategories(categories);
        // open the fist section as default
        setViewSection(0);
    }, [inputData]);
    return (
        <div className="input-browser">
            <div className="input-browser__section-list">
                <span className="input-browser__section-list__label">Browse Section</span>
                {categories.map((item, index) => (
                    <Button
                        type={"button"}
                        variant={(index === viewSection) ? "primary" : "control"}
                        isActive={(index === viewSection)}
                        key={`section-${index}`}
                        onClick={() => handleSectionSwitch(index)}>
                        {item}
                    </Button>
                ))}
            </div>
            <DataList aria-label="Simple data list example">
                <DataListItem aria-labelledby="header" key="header" className="input-browser__header">
                    <DataListItemRow>
                        <DataListItemCells dataListCells={[
                            <DataListCell width={3} key="head 1"><span>Input Data</span></DataListCell>,
                            <DataListCell width={2} key="head 2"><span>Value</span></DataListCell>,
                            <DataListCell width={1} key="head 3"><span>Score</span></DataListCell>,
                            <DataListCell width={1} key="head 4"><span>Distribution</span></DataListCell>,
                            <DataListCell width={1} key="head 5"/>,
                            <DataListCell width={1} key="head 6"/>,
                            <DataListCell width={1} key="head 7"/>,
                            <DataListCell width={2} key="head 8"/>
                        ]}>
                        </DataListItemCells>
                    </DataListItemRow>
                </DataListItem>

                { inputs && renderItem(inputs[viewSection]) }
            </DataList>
        </div>
    );
};

export default InputDataBrowser;
