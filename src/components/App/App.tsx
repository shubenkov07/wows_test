import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_SHIPS } from '../../query/ships';
import { IShip } from '../../interfaces/IShip';
import { Ship } from '../Ship/Ship';
import logo from '../../assets/img/logo.png';
import { nanoid } from 'nanoid';

export const App: React.FC = () => {
    const { data, loading, error } = useQuery(GET_ALL_SHIPS);
    const [ships, setShips] = useState<IShip[]>([]);

    useEffect(() => {
        if (!loading) {
            setShips(data.vehicles);
        }
    }, [data]);

    if (loading) {
        return (
            <div className="app_loading">
                <h2>Загрузка..</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="app_error">
                <h2>Произошла какая-то ошибка, попробуйте позже</h2>
            </div>
        )
    }

    return (
        <div className="app">
            <div className="logo">
                <a href="https://worldofwarships.ru/">
                    <img src={logo} alt="Logo World of Warships"/>
                </a>
            </div>
            <div className="ships">
                {ships.map((ship: IShip) => <Ship ship={ship} key={nanoid()} />)}
            </div>
        </div>
    );
};
