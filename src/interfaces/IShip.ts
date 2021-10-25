import { IIcons } from './IIcons';

export interface IShip {
    description: string,
    icons: IIcons,
    level: number,
    nation: {
        color: string,
        icons: IIcons,
        name: string,
        title: string,
    },
    title: string,
    type: {
        icons: IIcons,
        name: string,
        title: string,
    }
}
