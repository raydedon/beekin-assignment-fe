import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {fetchJobs} from '../job/jobAction';
import JobThumbNail from '../jobThumbnail/JobThumbNail';
import classes from './jobsList.scss';
import clsx from 'clsx';
const JobList = () => {
    const jobs = useSelector((state) => state.job.jobs);
    const loading = useSelector((state) => state.job.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);
    
    if (!jobs?.length && !loading) return <div className={clsx(classes.container, classes.emptyContainer)}>No Data found</div>;

    return (
        <div className={classes.container}>
            {jobs?.map(j => <JobThumbNail key={j._id} job={j}/>)}
        </div>
    )
};

export {JobList};
export default JobList;
