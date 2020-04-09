import React from 'react';
import {
    Grid,
    GridItem, gridSpans
} from "@patternfly/react-core";

type ownProps = {
    rowsNumber: number,
    colsNumber: number,
    gutterSize: "sm" | "md" | "lg"
}

const SkeletonGrid = (props: ownProps) => {
    const { rowsNumber, colsNumber, gutterSize } = props;
    const colSize = 12 / colsNumber;
    const gridRows = [];
    for (let i = 0; i < rowsNumber; i++) {
        for (let j = 0; j < colsNumber; j++) {
            let className = "skeleton__stripe";
            className += ((i + j) % 2 ) ? " skeleton__stripe--lg" : " skeleton__stripe--md";
            gridRows.push((
                <GridItem span={colSize as gridSpans} key={`skeleton-grid-${j}-${i}`}>
                    <span className={className} />
                </GridItem>
            ));
        }
    }
    return (
        <Grid gutter={gutterSize}>
            {gridRows.map(item => item)}
        </Grid>
    );
};

export default SkeletonGrid;