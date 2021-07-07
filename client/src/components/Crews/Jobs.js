import React from 'react';

function Jobs({job}) {

    return(
        <>
            <div className="job" id={job._id}>
                <div className="job-header">
                    <h2 className="job-client-name">{job.client.name}</h2>
                    <h3 className="job-client-type">{job.client.type}</h3>
                </div>
                <div className="location-wrapper">
                    <h4 className="client-location">{job.client.location.city}</h4>
                </div>
                <div className="description-wrapper">
                    <h4>{job.description}</h4>
                </div>
            </div>
        </>
    )
}

export default Jobs;