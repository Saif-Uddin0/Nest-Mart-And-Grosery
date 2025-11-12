import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const Button = () => {
    return (
        <div>
            <button className='btn flex gap-2 text-white bg-[#29A56C] text-sm font-medium'>
                            <p className=''>Shop Now </p>
                            <p><FaArrowRight /></p>
                        </button>
        </div>
    );
};

export default Button;