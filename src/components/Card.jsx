import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Card = ({data}) => {

    const [monsterDetail, setMonsterDetail] = useState({})
    const [urlInfo, setUrlInfo] = useState('')

    useEffect(() => {
        if (urlInfo === '') return
        const getDetail = async () => {
            const URL = `https://www.dnd5eapi.co${urlInfo}`
            const result = await axios.get(URL)
            setMonsterDetail(result.data)
        }

       getDetail()
    }, [urlInfo])

    const handleHover = () => {
        setUrlInfo(data.url)
    }

    return (
        <div className='col-md-4 mb-3'>
            <div 
                className='card'
                onMouseEnter={() => handleHover()}
            >
                <div className='card-body'>
                    <h5 className='card-title'>{data.name}</h5>
                    <p className='card-text'>CR: {monsterDetail.challenge_rating}</p>
                    <p className='card-text'>Size: {monsterDetail.size}</p>
                    <p className='card-text'>Type: {monsterDetail.type}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;