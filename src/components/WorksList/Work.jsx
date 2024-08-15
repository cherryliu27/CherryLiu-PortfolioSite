import {Link, useLocation} from "react-router-dom"
import "./WorksList.css"

export default function Work({id, path, name}){
    return(
    <Link to={`/project/${id}`} className="work-link">
      <img className="work" src={path} alt={name} />
    </Link>        
    )
}