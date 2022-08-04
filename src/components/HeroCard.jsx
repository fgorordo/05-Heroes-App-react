import React from 'react'
import { Link } from "react-router-dom";

const HeroCard = ({hero}) => {
    return (
        <div className="card">
            <img src={`/assets/${hero.id}.jpg`} alt={hero.superhero}/>
                <div className="card-body">
                    <h5 className="card-title">{hero.superhero}</h5>
                    <p className="card-text">{hero.publisher}</p>
                    <Link to={`/hero/${hero.id}`} className='btn'>Details</Link>
                </div>
        </div>
    )
}

export default HeroCard