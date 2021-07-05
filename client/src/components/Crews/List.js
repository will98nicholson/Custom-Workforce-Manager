import React from "react"
import API from "../../utils/API";
import Jobs from "./Jobs";

function List({ crew }) {
    // if data is returning all jobs
    // then we need to filter them by crewAssignedToo
    // and give an option for "unnassigned"
    // then we need to map the filtered jobs list through the Jobs component
    // while sorting by position, adding the conditional of comparing lastUpdatedTime
    // in case jobs have the same position after updating

    // API call to find all jobs
    const data = API.getJob().then(response => {
        console.log(response.data)
    })

    // // filtering API results by crew
    // const filteredJobs = data.filter( dataObjs => dataObjs.crewAssignedToo === crew);

    // // sorting filtered jobs in order assigned to render
    // const sortedJobs = filteredJobs.sort()


    // const jobs = data.map( job =>
    //     <Jobs job={job}/>
    // );


    return(
        <>
            <div className={data.crewName}>
                <h2>{crew}</h2>
                {/* {jobs} */}
            </div>
        </>

    )
};

export default List;
