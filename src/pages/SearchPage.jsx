import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HeroCard from '../components/HeroCard'
import { getHeroByName } from '../helpers/getHeroByName'
import queryString from 'query-string'

const SearchPage = () => {
    const location = useLocation();
    const {q} = queryString.parse(location.search);
    const navigate = useNavigate();
    const [search, setSearch] = useState(q);

    const onInputChange = (event) => {
        setSearch(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        if (search.trim().length < 3) return;
        navigate(`?q=${search}`)
    }
    
    const heroes = getHeroByName(q);

    return (
        <>
            <div className='row mt-5'>
                <div className="col-5">
                    <h4>Search a Hero</h4>
                    <form onSubmit={ onFormSubmit }>
                        <input type="text" placeholder='Search a hero' className='form-control mt-4' name='searchText' value={ search } onChange={ onInputChange } />
                        <button className='btn mt-3' type='submit'>Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4 className='text-center'>Results</h4>
                    {
                        heroes.length > 0 ?
                        heroes.map(hero => {
                            return <HeroCard key={hero.id} hero={hero} />
                        })
                        :
                        <div className='alert alert-danger'>
                            There is not a hero whit the name <b>{q}</b>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default SearchPage