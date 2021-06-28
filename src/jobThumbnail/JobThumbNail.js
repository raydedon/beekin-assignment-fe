import React, {useCallback} from 'react'
import classes from './jobthumbnail.scss';
import {push} from 'connected-react-router';
import {useDispatch} from 'react-redux';

const JobThumbNail = (props) => {
    const dispatch = useDispatch();
    const {job: {designation, company, location, _id}} = props;
    const onClickHandler = useCallback(() => dispatch(push(`/job/${_id}`)), [dispatch, _id]);
    
    return (
        <div className={classes.container} onClick={onClickHandler}>
            <h5>{designation}</h5>
            <h6 className={classes.muted}>{company?.map(c => c.name).join(',')}</h6>
            <h6 className={classes.muted}>{location.join(',')}</h6>
        </div>
    );
};

export {JobThumbNail};
export default JobThumbNail;
