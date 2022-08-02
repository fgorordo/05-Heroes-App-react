import React from 'react'
import MainNav from './MainNav';
import AppRouter from '../routes/AppRouter';

const HerosApp = () => {
    return (
        <main className="container mt-3">
            <h1>HeroesApp</h1>
            <MainNav/>
            <AppRouter/>
        </main>
    )
}

export default HerosApp