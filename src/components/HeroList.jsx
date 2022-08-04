import React from 'react';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import HeroCard from './HeroCard';
import '../index.css'

const HeroList = ({ publisher }) => {
    const heroes = getHeroesByPublisher(publisher);
    return (
        <div className='heroes-container'>
            {
                heroes.map((hero) => {
                    return (
                        <HeroCard hero={hero} key={hero.id}/>
                    )
                })
            }
        </div>
    )
}

export default HeroList