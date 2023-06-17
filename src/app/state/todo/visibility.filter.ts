export enum VISIBILITY_FILTER {
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    SHOW_ACTIVE = 'SHOW_ACTIVE',
    SHOW_ALL = 'SHOW_ALL'
}

export type TodoFilter = {
    label: string;
    value: VISIBILITY_FILTER;
};