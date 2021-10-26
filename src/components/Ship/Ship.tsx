import React from 'react';
import { IShip } from '../../interfaces/IShip';
import { romanize } from '../../scripts/romanize';

interface ShipProps {
    ship: IShip
}

export const Ship: React.FC<ShipProps> = ({ ship }) => {
    return (
        <div className="ship">
            <div className="ship__img">
                <img src={ship.icons.medium} alt={ship.title} />
            </div>
            <div className="ship-info">
                <div className="ship-info__level">{romanize(ship.level)}</div>
                <div className="ship-info__nation">
                    <img src={ship.nation.icons.small} alt={ship.nation.title} />
                </div>
            </div>
            <div className="ship__title">{ship.type.title} {ship.title}</div>
            <div className="ship__description">
                <p>{ship.description}</p>
            </div>
        </div>
    );
};
