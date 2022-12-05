export type StringAttribute = { type: 'single' | 'multi'; values: { id: number }[] };
export type RangeAttribute = { type: 'range'; values: [{ min: number; max: number }] };
export type FieldAttribute = { field: string; values: { id: number }[] }[];
