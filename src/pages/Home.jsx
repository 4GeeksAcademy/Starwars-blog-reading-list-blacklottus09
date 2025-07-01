import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const { characters } = store
	const { planets } = store

	const handleFavoriteClick = (item, type) => {
        const isFavorite = store.favorites.some(favorite => favorite.uid === item.uid && favorite.type === type);
        const actionType = isFavorite ? "REMOVE_FAVORITE" : "ADD_FAVORITE";
        dispatch({ type: actionType, payload: { ...item, type } });
    };

	return (
        <div className="container mt-5 px-4">
            <h2 className="text-danger mb-3">Characters</h2>
            <div className="d-flex overflow-auto pb-3">
                {characters.map((character) => {
                    const isCharacterFavorite = store.favorites.some(fav => fav.uid === character.uid && fav.type === 'character');
                    
                    return (
                        <div key={character.uid} className="card border-light shadow-sm m-2">
                            <img 
                                src={`https://raw.githubusercontent.com/vieraboschkova/swapi-gallery/refs/heads/main/static/assets/img/people/${character.uid}.jpg`} 
                                className="card-img-top" 
                                alt={character.name} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <div>
                                    <p><strong>Gender:</strong> {character.properties.gender}</p>
                                    <p><strong>Hair Color:</strong> {character.properties.hair_color}</p>
                                    <p><strong>Eye Color:</strong> {character.properties.eye_color}</p>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <Link to={`/character/${character.uid}`} className="btn btn-outline-primary">
                                        Learn more!
                                    </Link>
                                    <button onClick={() => handleFavoriteClick(character, 'character')} className="btn btn-outline-warning">
                                        <i className={`${isCharacterFavorite ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <h2 className="text-danger mt-5 mb-3">Planets</h2>
            <div className="d-flex overflow-auto pb-3">
                {planets.map((planet) => {
                    const isPlanetFavorite = store.favorites.some(fav => fav.uid === planet.uid && fav.type === 'planet');

                    return (
                        <div key={planet.uid} className="card border-light shadow-sm m-2" >
                            <img 
                                src="https://picsum.photos/200/300" 
                                className="card-img-top" 
                                alt={planet.name} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <div>
                                    <p><strong>Population:</strong> {planet.properties.population}</p>
                                    <p><strong>Terrain:</strong> {planet.properties.terrain}</p>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    
                                    <Link to={`/planet/${planet.uid}`} className="btn btn-outline-primary">
                                        Learn more!
                                    </Link>
                                    <button onClick={() => handleFavoriteClick(planet, 'planet')} className="btn btn-outline-warning">
                                        <i className={`${isPlanetFavorite ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};