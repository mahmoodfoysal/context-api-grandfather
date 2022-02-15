import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Spacial = (props) => {
    
    const ornaments = useContext(RingContext)
    return (
        <div>
            <h2>Spacial</h2>
            <small>{ornaments}</small>
        </div>
    );
};

export default Spacial;