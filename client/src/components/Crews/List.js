import React, { useState, useEffect, useRef } from "react"
import Sortable from 'sortablejs';
import API from "../../utils/API";
import Jobs from "./Jobs";


function List({ crew }) {
    // TODO :while sorting by position, adding the conditional of comparing lastUpdatedTime
    // TODO :in case jobs have the same position after updating

    const [jobs, setJobs] = useState([])

    const listEl = useRef(null)
    if (listEl.current !== null) {
        const sortable = new Sortable(listEl.current, {
            group: 'shared',
            animation: 150,
            onEnd: function (/**Event*/evt) {
                var itemEl = evt.item;  // dragged HTMLElement
                // evt.to;    // target list
                // evt.from;  // previous list
                // evt.oldIndex;  // element's old index within old parent
                // evt.newIndex;  // element's new index within new parent
                // evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
                // evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
                // evt.clone // the clone element
                // const cardId = evt.to.id

                const handleCrewChange = () => {
                    const newCrew = {
                        _id: itemEl.id,
                        dailyPosition: evt.newIndex + 1,
                        crewAssignedToo: evt.to.id
                    }
                    handleJobUpdate(newCrew)
                }

                const handleJobUpdate = (crew) => {
                    console.log(crew)
                    fetch(`/api/jobs/${itemEl.id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(crew)
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))
                        .catch(err => console.log(err))
                }

                handleCrewChange();

            }
        })
    }

    useEffect(() => {
        loadJobs()
    }, [])

    // API call to find and sort all jobs
    function loadJobs() {
        API.getJobs()
        .then(response => {
            setJobs(response.data)
        }).catch(err => console.log(err));
    }

    return (
        <>
            <div className="list">
                <h2 className="crew-header">{crew}</h2>
                <div ref={listEl} className="job-list" id={crew}>
                    {jobs
                        .filter(dataObjs => dataObjs.crewAssignedToo === crew)
                        .sort(function (a, b) {
                            return (+(a.dailyPosition > b.dailyPosition) || +(a.dailyPosition === b.dailyPosition) - 1) ||
                                (+(a.updatedAt < b.updatedAt) || +(a.updatedAt === b.updatedAt) - 1);
                            })
                        .map((job) => (
                            <Jobs job={job} key={job._id} />
                        ))}
                </div>
            </div>
        </>
    )
};

export default List;
