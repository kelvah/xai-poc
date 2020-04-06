import React from 'react';
import {InputGroup, TextInput} from "@patternfly/react-core";

const FromFilter = (props: { fromDate: string, onFromDateUpdate: (date: string) => void }) => {
    const { fromDate } = props;
    const updateFromDate = (date: string) => props.onFromDateUpdate(date);

    return (
        <InputGroup>
            <TextInput name="date-from" id="date-from" type="date" aria-label="set starting date" value={fromDate} onChange={updateFromDate}/>
        </InputGroup>
    );
};

export default FromFilter;