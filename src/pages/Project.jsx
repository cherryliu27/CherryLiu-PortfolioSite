// import skillsIcon from '../../assets/img/nodejs.png';
// import Skill from "./Skill"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "../index.css"


export default function Project(){
    const {id} = useParams(); // Extract the project ID from URL using useParams
    const [projectData, setProjectData]= useState({}); // State to store the fetched project data

    // useEffect to fetch project data from the API by project ID (projects collection from portfolio database) 
    useEffect(() => {
        const getProjectData = async ()=>{
            // Fetch project data from the API using the project ID
            let response = await fetch(`https://http-5222-portfolio-api.vercel.app/api/projects/${id}`);
            let data = await response.json();
            setProjectData(data); // Update the state with the fetched data
            window.scrollTo(0, 0); // Immediately scroll to the top
            console.log(data);
        
    };
    
    getProjectData();

},[id]);
    return(
        <div class="project-container">
            <div className="project container-70">
                <h1 className="projectName">{projectData.Name}</h1>
                <div className="project-img-container">
                    <img className="" src={projectData.Img} alt={projectData.Name} />
                </div>
                <div className="project-text">
                    <div className="project-desc project-subhead">
                        <h2>Description:</h2>
                        <p>{projectData.Desc}</p>
                    </div>
                    <div className="project-dates project-subhead">
                        <h2>Duration:</h2>
                        <p><strong>Start Date:</strong> {projectData.StartDate}</p>
                        <p><strong>End Date:</strong> {projectData.EndDate}</p>
                    </div>
                    <div className="project-stacks project-subhead">
                        <h2>Stacks</h2>
                        <p>{projectData.Stacks}</p>
                    </div>
                    <div className="github-link project-subhead">
                        <a href={projectData.Github}>GitHub Link</a>
                    </div>

                </div>
            </div>
        </div>

    )
}