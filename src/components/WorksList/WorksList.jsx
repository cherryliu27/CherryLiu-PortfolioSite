import './WorksList.css'
import Work from "./Work"
import {useEffect, useState} from "react";

export default function WorksList(){
    const [worksData, setWorksData] = useState([]); // State to store project data
     // useEffect to fetch project data from API (projects collection from portfolio database)
    useEffect(()=>{
        const getProjects = async()=>{
            // Fetch data from the projects API
            let response = await fetch(
                "https://http-5222-portfolio-api.vercel.app/api/projects", {method: "get"}
            );
            let data = await response.json();
            console.log(data);
            setWorksData(data); // Update the worksData state with the fetched data
        }
        getProjects();
    },[])
    return(
        <div className="works-container" id="works">
            <div className="works container-70">
                <h2>Works</h2>
                <p className="work-desc">View the details of my individual works below!</p>
                <div className="works-collection">
                {
                    //loop over each project/work component
                    worksData.map((m) => (
                        <Work
                            // key={m._id}
                            path={m.Img}
                            name={m.Name}
                            id={m._id}
                            />
                    ))
                }
                </div>
            </div>
        </div>
    )
}