export interface IModule { [key: string]: { source: string } }
export interface IGroup { [key: string]: IModule }
export interface IRoot { [key: string]: IGroup }
export interface IRoutes { [key: string]: IRoot };
