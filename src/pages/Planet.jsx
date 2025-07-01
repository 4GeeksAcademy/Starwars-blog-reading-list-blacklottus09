

import useGlobalReducer from "../hooks/useGlobalReducer"
import { useParams } from "react-router-dom"
import planetImage from '../assets/img/planet-image.png'

export const Planet = () => {
  const { id } = useParams()
  const { store, dispatch } = useGlobalReducer()
  const { planets } = store
  const planet = planets.find(item => item.uid === id)

  if (!planet) {
    return (
      <div className="container text-center">
        <h2>Loading planet details...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 ">
          <img src={planetImage} className="img-fluid" alt={planet.properties.name} />
        </div>
        <div className="col-6">
          <div className="text-center">
            <h1 className="card-title">{planet.properties.name}</h1>
            <p className="card-text fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper eget leo sit amet ultricies. Sed sollicitudin mauris ac ullamcorper rhoncus. Curabitur elit risus, varius sed tempus id, pharetra sit amet ligula. Nunc ultricies turpis nec purus volutpat venenatis. Nunc ut rhoncus lectus. Sed scelerisque tristique arcu, quis posuere enim pulvinar et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
        </div>
        <b><hr className="border-danger border-5 my-3" /></b>
        <div className="row text-danger text-center fs-4">
          <div className="col-2">
            <p>Name</p>
            <p>{planet.properties.name}</p>
          </div>
          <div className="col-2">
            <p>Climate</p>
            <p>{planet.properties.climate}</p>
          </div>
          <div className="col-2">
            <p>Population</p>
            <p>{planet.properties.population}</p>
          </div>
          <div className="col-2">
            <p>Orbital Period</p>
            <p>{planet.properties.orbital_period}</p>
          </div>
          <div className="col-2">
            <p>Rotation Period</p>
            <p>{planet.properties.rotation_period}</p>
          </div>
          <div className="col-2">
            <p>Diameter</p>
            <p>{planet.properties.diameter}</p>
          </div>
        </div>
      </div>
    </div>
  )
}