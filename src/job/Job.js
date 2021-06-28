import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {push} from 'connected-react-router';
import {Link, useParams} from 'react-router-dom';
import classes from './job.scss';
import clsx from 'clsx';

const Job = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.job.jobs);
    const [job, setJob] = useState({});
    let { jobId } = useParams();
    useEffect(() => {
        if(!jobs?.length) {
            dispatch(push('/'));
        }
    }, [dispatch, jobs]);
    
    useEffect(() => {
        setJob(jobs.find((j) => j._id === jobId));
    }, [jobId, setJob, jobs]);
    
    if (!job?._id) return <div>loading</div>;
    
    return (
        
        <div className={clsx(classes.container, classes.descWrapper)}>
            <Link to={'/'} className={classes.backLink}>&lt;&lt;&nbsp;Back</Link>
            <h5>{job?.designation}</h5>
            <h6 className={classes.muted}>{job?.company?.map(c => c.name)?.join(',')}</h6>
            <h6 className={classes.muted}>{job?.location?.join(',')}</h6>
            <h6 className={classes.muted}>{job?.job_types?.map(c => c.name)?.join(',')}</h6>
            <div>
                <button className={clsx(classes.btnPrimary, classes.btn)}>Save</button>
                <button className={clsx(classes.btnLight, classes.btn)}>Apply</button>
            </div>
            <div className={classes.desc}>{job.desc}</div>
        </div>
    )
};

export {Job};
export default Job;
