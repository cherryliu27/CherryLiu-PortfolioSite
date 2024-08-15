import './SkillsList.css'
import Skill from "./Skill"
import {useEffect, useState} from "react";


export default function SkillsList(){
    const [skillsData, setSkillsData] = useState([]);
    useEffect(()=>{
        const getSkill = async()=>{
            let response = await fetch(
                "https://http-5222-portfolio-api.vercel.app/api/skills", {method: "get"}
            );
            let data = await response.json();
            console.log(data);
            setSkillsData(data);
        }
        getSkill();
    },[])
    return(
        <div className="skills-container">
            <div className="skills container-70">
                <h2>Skills</h2>
                <p className="skills-desc">I have experience with below stacks...</p>
                <div className="skills-collection">
                {
                    skillsData.map((m) => (
                        <Skill
                            path={m.icon}
                            name={m.skill}
                            />
                    ))
                }
                </div>
            </div>
        </div>
    )
}