import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <nav className="navbar navbar-light bg-light mb-3 px-4">
            <div className="container">
                <Link to="/">
                    <img src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/57A0EA5BFA41EA7991E8629C6563BC178462B0399E733A6249F8150F93ACFED8/compose?aspectRatio=1.78&format=webp&width=80" alt="Star Wars Logo" />
                </Link>
                <div className="ms-auto">
                    <div className="dropdown">
                        <button
                            className="btn btn-primary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                            {store.favorites.length > 0 ? (
                                store.favorites.map((favorite) => (
                                    <li key={`${favorite.type}-${favorite.uid}`} className="d-flex justify-content-between align-items-center px-2 py-1">
                                        <Link className="dropdown-item" to={`/${favorite.type}/${favorite.uid}`}>
                                            {favorite.properties.name}
                                        </Link>
                                        <button
                                            className="btn btn-sm text-danger"
                                            onClick={() => dispatch({ type: "REMOVE_FAVORITE", payload: favorite })}
                                        >
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <li><span className="dropdown-item text-muted">(empty)</span></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};