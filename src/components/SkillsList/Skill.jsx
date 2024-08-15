import "./SkillsList.css"


// Skill component that takes 'path' and 'name' as props
export default function Skill({path, name}){
    return(
        <div className="skill">
        <img className="skill-icon" src={path} alt={name} />
        </div>
    )
}