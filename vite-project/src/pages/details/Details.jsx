import { useParams } from "react-router-dom"
import data from"../../data/data.json"

const Details = () => {
    const {id} = useParams()
    const place = data.find((el) => el.id === +id)
    return (
        <>
        <h1>{place.name}</h1>
        <p>{place.description}</p>
        <p>{place.country}</p>
        <p>{place.category}</p>

        </>
    )
}
export default Details