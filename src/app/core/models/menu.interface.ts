export interface Menu {
    label?: string;
    icon?: string;
    link?: string;
    roles?: string[];
    children?: Menu[];
}