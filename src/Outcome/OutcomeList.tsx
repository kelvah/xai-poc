import React from 'react';
import {Grid, GridItem, Title} from "@patternfly/react-core";
import './Outcome.scss';

const OutcomeList = () => {
    return (
        <div className={"outcome-list"}>
            <Title headingLevel="h4" size="xl" className={"outcome-list__title"}>
                6 Recommended Loan Products
            </Title>

            <ul className={"outcome-list__items"}>
                <li className={"outcome-list__item"}>
                    <Title headingLevel="h5" size="lg" className={"outcome-list__item__title"}>
                        Lender B - ARM5/1-Standard
                    </Title>
                    <Grid gutter={"md"}>
                        <GridItem span={4}>{"Note Amount"}</GridItem>
                        <GridItem span={8}>{"$273,775.90"}</GridItem>
                        <GridItem span={4}>{"Recommendation"}</GridItem>
                        <GridItem span={8}>{"Best"}</GridItem>
                    </Grid>
                </li>
                <li className={"outcome-list__item"}>
                    <Title headingLevel="h5" size="lg" className={"outcome-list__item__title"}>
                        Lender B - ARM5/1-Standard
                    </Title>
                    <Grid gutter={"md"}>
                        <GridItem span={4}>{"Note Amount"}</GridItem>
                        <GridItem span={8}>{"$273,775.90"}</GridItem>
                        <GridItem span={4}>{"Recommendation"}</GridItem>
                        <GridItem span={8}>{"Best"}</GridItem>
                    </Grid>
                </li>
                <li className={"outcome-list__item"}>
                    <Title headingLevel="h5" size="lg" className={"outcome-list__item__title"}>
                        Lender B - ARM5/1-Standard
                    </Title>
                    <Grid gutter={"md"}>
                        <GridItem span={4}>{"Note Amount"}</GridItem>
                        <GridItem span={8}>{"$273,775.90"}</GridItem>
                        <GridItem span={4}>{"Recommendation"}</GridItem>
                        <GridItem span={8}>{"Best"}</GridItem>
                    </Grid>
                </li>
                <li className={"outcome-list__item"}>
                    <Title headingLevel="h5" size="lg" className={"outcome-list__item__title"}>
                        Lender B - ARM5/1-Standard
                    </Title>
                    <Grid gutter={"md"}>
                        <GridItem span={4}>{"Note Amount"}</GridItem>
                        <GridItem span={8}>{"$273,775.90"}</GridItem>
                        <GridItem span={4}>{"Recommendation"}</GridItem>
                        <GridItem span={8}>{"Best"}</GridItem>
                    </Grid>
                </li>
                <li className={"outcome-list__item"}>
                    <Title headingLevel="h5" size="lg" className={"outcome-list__item__title"}>
                        Lender B - ARM5/1-Standard
                    </Title>
                    <Grid gutter={"md"}>
                        <GridItem span={4}>{"Note Amount"}</GridItem>
                        <GridItem span={8}>{"$273,775.90"}</GridItem>
                        <GridItem span={4}>{"Recommendation"}</GridItem>
                        <GridItem span={8}>{"Best"}</GridItem>
                    </Grid>
                </li>
                <li className={"outcome-list__item"}>
                    <Title headingLevel="h5" size="lg" className={"outcome-list__item__title"}>
                        Lender B - ARM5/1-Standard
                    </Title>
                    <Grid gutter={"md"}>
                        <GridItem span={4}>{"Note Amount"}</GridItem>
                        <GridItem span={8}>{"$273,775.90"}</GridItem>
                        <GridItem span={4}>{"Recommendation"}</GridItem>
                        <GridItem span={8}>{"Best"}</GridItem>
                    </Grid>
                </li>


            </ul>
        </div>
    );
};

export default OutcomeList;