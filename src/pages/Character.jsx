import useGlobalReducer from "../hooks/useGlobalReducer"
import { useParams } from "react-router-dom"

export const Character = () => {
  const { id } = useParams()
  const { store, dispatch } = useGlobalReducer()
  const { characters } = store
  const character = characters.find(item => item.uid === id)

  if (!character) {
    return (
      <div className="container text-center">
        <h2>Loading character details...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row ">
        <div className="col-6">
          <img src={`https://raw.githubusercontent.com/vieraboschkova/swapi-gallery/refs/heads/main/static/assets/img/people/${id}.jpg`} className="details-image img-fluid" alt={character.properties.name} />
        </div>
        <div className="col-6">
          <div className="text-center">
            <h1 className="card-title">{character.properties.name}</h1>
            <p className="card-text fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper eget leo sit amet ultricies. Sed sollicitudin mauris ac ullamcorper rhoncus. Curabitur elit risus, varius sed tempus id, pharetra sit amet ligula. Nunc ultricies turpis nec purus volutpat venenatis. Nunc ut rhoncus lectus. Sed scelerisque tristique arcu, quis posuere enim pulvinar et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed cursus lobortis lacus, in ornare felis posuere id.Donec lobortis, neque hendrerit aliquam mattis, urna tellus egestas mi, eget scelerisque mauris mi ac lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
          </div>
        </div>
        <b><hr className="border-danger border-5 my-3" /></b>
        <div className="row text-danger text-center fs-4">
          <div className="col-2">
            <p>Name</p>
            <p>{character.properties.name}</p>
          </div>
          <div className="col-2">
            <p>Birth Year</p>
            <p>{character.properties.birth_year}</p>
          </div>
          <div className="col-2">
            <p>Gender</p>
            <p>{character.properties.gender}</p>
          </div>
          <div className="col-2">
            <p>Height</p>
            <p>{character.properties.height}</p>
          </div>
          <div className="col-2">
            <p>Skin Color</p>
            <p>{character.properties.skin_color}</p>
          </div>
          <div className="col-2">
            <p>Eye Color</p>
            <p>{character.properties.eye_color}</p>
          </div>
        </div>
      </div>
    </div>
  )
}