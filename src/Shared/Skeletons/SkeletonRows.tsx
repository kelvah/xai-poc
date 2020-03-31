import React from "react";
import "./Skeletons.scss";

/*
* Based on a number of rows and columns, this thing creates an array specifically intended
* for use with the Patternfly table component. Feeding this array to the table rows prop,
* it will produce animated stripes to display while loading the real data
* */

const SkeletonRows = (colsNumber: number, rowsNumber: number) => {
    let skeletons = [];
    for (let j = 0; j < rowsNumber; j++) {
        let cells = [];
        for (let i = 0; i < colsNumber; i++) {
            let className = "skeleton__stripe";
            className += ((i + j) % 2 ) ? " skeleton__stripe--lg" : " skeleton__stripe--md";
            cells.push({
                title: (
                    <span className={className} />
                )
            })
        }
        let skeletonRow = {
            cells
        };
        skeletons.push(skeletonRow);
    }
    return skeletons;
};

export default SkeletonRows;
