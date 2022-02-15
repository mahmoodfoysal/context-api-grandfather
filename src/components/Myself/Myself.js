import React from 'react';
import Spacial from '../Spacial/Spacial';

const Myself = (props) => {
    const {house, ornaments} = props;
    return (
        <div>
            <h2>Myself</h2>
            <small>House: {house}</small>
            <Spacial ornaments= {ornaments}></Spacial>
        </div>
    );
};

export default Myself;