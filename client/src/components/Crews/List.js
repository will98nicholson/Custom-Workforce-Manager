import { keys } from "@material-ui/core/styles/createBreakpoints";
import React, { useState, useEffect } from "react"
import API from "../../utils/API";
import Jobs from "./Jobs";

function List({ crew }) {
    // if data is returning all jobs
    // then we need to filter them by crewAssignedToo
    // and give an option for "unnassigned"
    // then we need to map the filtered jobs list through the Jobs component
    // TODO :while sorting by position, adding the conditional of comparing lastUpdatedTime
    // TODO :in case jobs have the same position after updating

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        loadJobs()
    }, [])

    // API call to find and sort all jobs
    function loadJobs(){ API.getJob()
        .then(response => {
        setJobs(response.data)   
        }).catch(err => console.log(err));
    }
  
    return(
        <>
            <div className={"list"}>
                <h2>{crew}</h2>
                    {jobs
                    .filter( dataObjs => dataObjs.crewAssignedToo === crew)
                    .sort((a, b) => (a.dailyPosition > b.dailyPosition) ? 1 : -1)
                    .map( (job, key) => (
                        <Jobs job={job} id={key}/>
                    ))}
            </div>
        </>

    )
};

export default List;
