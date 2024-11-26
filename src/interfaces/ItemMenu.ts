export interface MenuItem {
    id: string,
    content: string,
    title: string,
    icon: string,
    isDeleted : boolean,
    isHidden: boolean,
    parent?: string,
    url?: string,
    component?: string,
    createdAt: Date,
    updatedAt: Date
}