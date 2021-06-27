import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {push} from 'connected-react-router';
import {useParams} from 'react-router-dom';

const Job = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.job.jobs) ?? [];
    const [job, setJob] = useState({});
    let { jobId } = useParams();
    console.info(jobId);
    useEffect(() => {
        if(!jobs?.length) {
            dispatch(push('/'));
        }
    }, [dispatch, jobs, push]);
    
    useEffect(() => {
        setJob(jobs.find((j) => j._id === jobId));
    }, [jobId, setJob, jobs]);
    
    return <div>{JSON.stringify(job, null, 4)}</div>
};

export {Job};
export default Job;
