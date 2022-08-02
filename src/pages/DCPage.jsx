import React from 'react'
import HeroList from '../components/HeroList'

const DCPage = () => {
    return (
        <section className="mt-3">
            <h2>DC Page</h2>
            <hr />
            <HeroList publisher={'DC Comics'}/>
        </section>
    )
}

export default DCPage