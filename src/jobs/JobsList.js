import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {fetchJobs} from '../job/jobAction';
import JobThumbNail from '../jobThumbnail/JobThumbNail';
import classes from './jobsList.scss';

const JobList = () => {
    const jobs = useSelector((state) => state.job.jobs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchJobs());
    }, []);

    return (
        <div className={classes.container}>
            {jobs.map(j => <JobThumbNail key={j._id} job={j}/>)}
        </div>
    )
};

export {JobList};
export default JobList;
