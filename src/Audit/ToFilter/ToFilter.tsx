import React from 'react';
import {InputGroup, TextInput} from "@patternfly/react-core";

const ToFilter = (props: {toDate: string, onToDateUpdate: (date: string) => void }) => {
    const { toDate, onToDateUpdate } = props;

    return (
        <InputGroup>
            <TextInput name="date-to" id="date-to" type="date" aria-label="set starting date" value={toDate} onChange={onToDateUpdate} />
        </InputGroup>
    );
};

export default ToFilter;