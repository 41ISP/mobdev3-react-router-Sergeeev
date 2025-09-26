import { useNavigate } from "react-router-dom"
import places from "../../data/data.json"
   
const Destinations = () => {
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`destination/${id}`)
    }
    return (
        <>
        <h1>Доступные туры</h1>
        {places.map((place) => (
            <div onClick={() => handleClick(place.id)} className="card">
                <h4 className="card_title">
                    {place.name}
                </h4>
            </div>
    ))}
        </>
    )
}

export default Destinations