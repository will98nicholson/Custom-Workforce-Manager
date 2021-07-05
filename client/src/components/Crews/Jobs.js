import React from 'react';

function Jobs({job}) {

    return(
        <>
            <div className={"job"} id={job._id}>
                <h2>{job.client.name}</h2>
                <h3>{job.client.type}</h3>
                <h4>{job.client.location.city}</h4>
                <h4>{job.description}</h4>
                {/* {jobs} */}
            </div>
        </>
    )
}

export default Jobs;