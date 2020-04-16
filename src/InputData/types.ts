export interface IItemObject {
    inputName: string,
    typeRef: string,
    value?: string | number,
    components?: (IItemObject | IItemObject[])[],
    impact?: boolean | number,
    score?: number
}

export interface IInputRow {
    inputLabel: string,
    inputValue?: string | number,
    hasEffect?: boolean | number,
    score?: number,
    key: string,
    category: string
}
