import React from 'react';
import { FaThLarge, FaListUl, FaTh, FaUserCog } from 'react-icons/fa';

const DashboardCards = () => {
    const cards = [
        {
            title: 'Categories',
            count: 0,
            icon: <FaThLarge size={30} color="cyan" />,
            borderColor: 'border-info',
        },
        {
            title: 'Sub-Categories',
            count: 0,
            icon: <FaListUl size={30} color="red" />,
            borderColor: 'border-danger',
        },
        {
            title: 'Models',
            count: 0,
            icon: <FaTh size={30} color="green" />,
            borderColor: 'border-success',
        },
        {
            title: 'Dealers',
            count: 0,
            icon: <FaUserCog size={30} color="orange" />,
            borderColor: 'border-warning',
        },
    ];

    return (
        <div className="container mt-5">
            <div className="row">
                {cards.map((card, idx) => (
                    <div key={idx} className="col-md-3 mb-4">
                        <div className={`card shadow-sm ${card.borderColor} border-2`}>
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div>
                                    <h6>{card.title}</h6>
                                    <h4 className="text-primary">{card.count}</h4>
                                </div>
                                <div>{card.icon}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardCards;
