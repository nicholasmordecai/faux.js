export interface IItem {
    title: string;
    children?: IItem[];
    source?: string;
}