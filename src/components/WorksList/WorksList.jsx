import './WorksList.css'
import Work from "./Work"
import {useEffect, useState} from "react";

export default function WorksList(){
    const [worksData, setWorksData] = useState([]);
    useEffect(()=>{
        const getProjects = async()=>{
            let response = await fetch(
                "https://http-5222-portfolio-api.vercel.app/api/projects", {method: "get"}
            );
            let data = await response.json();
            console.log(data);
            setWorksData(data);
        }
        getProjects();
    },[])
    return(
        <div className="works-container" id="works">
            <div className="works container-70">
                <h2>Works</h2>
                <p>View the details of my individual works below!</p>
                <div className="works-collection">
                {
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