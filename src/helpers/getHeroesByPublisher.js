import { heroes } from '../data/heroes.js'

export const getHeroesByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`Editorial Invalida: ${publisher}`)
    }
    return heroes.filter((hero) => {
        return hero.publisher === publisher;
    })

}