export interface IInputData {
    label: string,
    value?: string | number,
    children?: { [key: string]: IInputData },
    list?: { [key: string]: object }[],
    impact?: boolean | number,
    score?: number
}