import {Link, useLocation} from "react-router-dom"
import "./WorksList.css"

// Work component that takes 'id', 'path', and 'name' as props
export default function Work({id, path, name}){
    return(
    <Link to={`/project/${id}`} className="work-link">
      <img className="work" src={path} alt={name} />
    </Link>        
    )
}