import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

const HeroPage = () => {
  const navigate = useNavigate()
  const { heroId } = useParams();
  const hero = getHeroById(heroId);

  const goBackHandler = () => {
    navigate(-1)
  }

  if (!hero) {
    return (
      <Navigate to='/' />
    );
  }

  return (
    <>
      <h2 className="mt-4">Hero Page {'>'} <span className='hero-name'>{hero.superhero}</span></h2>
      <hr />
      <div className='hero-page__container'>
        <div className='hero-page__img'>
          <img src={`/assets/${hero.id}.jpg`} alt={hero.superhero} />
        </div>
        <div className='hero-page__details'>
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">{hero.superhero}</li>
            <li class="list-group-item">Alter Ego: {hero.alter_ego}</li>
            <li class="list-group-item">Personajes: {hero.characters}</li>
            <li class="list-group-item">Primera aparición: {hero.first_appearance}</li>
            <li class="list-group-item">Publisher: {hero.publisher}</li>
          </ul>
        </div>
        <div className='hero-page__btn'>
          <button
            className='btn'
            onClick={goBackHandler}
          >
            GO BACK
          </button>
        </div>
      </div>
    </>
  )
}

export default HeroPage