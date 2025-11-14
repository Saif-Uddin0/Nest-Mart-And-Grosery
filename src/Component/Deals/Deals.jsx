import React from 'react';
import { useNavigate } from 'react-router';

const Deals = () => {
    const navigate = useNavigate();
    return (
        <div>
            {
                navigate('/')
            }
        </div>
    );
};

export default Deals;