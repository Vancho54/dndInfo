import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card'


const Main = ({data}) => {

    if (data.length === 0) return null


    return (
        <div className='row mt-5'>
            {data.map(d => (
                <Card data={d}/>
            ))}
        </div>
    );
};

export default Main;