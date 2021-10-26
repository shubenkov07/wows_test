import { IIcons } from './IIcons';

export interface IShip {
    description: string,
    icons: IIcons,
    level: number,
    nation: {
        icons: IIcons,
        title: string,
    },
    title: string,
    type: {
        title: string,
    }
}
