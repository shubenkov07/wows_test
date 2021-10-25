import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_SHIPS } from '../../query/ships';
import { IShip } from '../../interfaces/IShip';
import { Ship } from '../Ship/Ship';
import logo from '../../assets/img/logo.png'

export const App = () => {
    const { data, loading, error } = useQuery(GET_ALL_SHIPS);
    const [ships, setShips] = useState<IShip[]>([]);

    useEffect(() => {
        if (!loading) {
            console.log(data.vehicles);
            setShips(data.vehicles);
        }
    }, [data]);

    if (loading) {
        return (
            <h1>Загрузка..</h1>
        );
    }

    return (
        <div className="app">
            <div className="logo">
                <a href="https://worldofwarships.ru/">
                    <img src={logo} alt="Logo World of Warships"/>
                </a>
            </div>
            <div className="ships">
                {ships.map((ship: IShip) => <Ship ship={ship} />)}
            </div>
        </div>
    );
};
