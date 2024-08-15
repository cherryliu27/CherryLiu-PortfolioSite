import "./SkillsList.css"

export default function Skill({path, name}){
    return(
        <div className="skill">
        <img className="skill-icon" src={path} alt="{name}" />
        </div>
    )
}