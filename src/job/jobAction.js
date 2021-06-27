import {FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS} from '../redux/commonAction';
import {ROOT_URL} from '../utility';

export const fetchJobs = () => {
    const fetchJobsRequest = () => ({
        type: FETCH_JOBS_REQUEST
    });
    
    const fetchJobsSuccess = (jobs) => ({
        type: FETCH_JOBS_SUCCESS,
        payload: {
            jobs
        }
    });
    
    const fetchJobsFailure = () => ({
        type: FETCH_JOBS_REQUEST
    });
    
    return dispatch => {
        dispatch(fetchJobsRequest());
    
        return fetch(`${ROOT_URL}/jobs`)
            .then(
                r => r.json(),
                error => {
                    console.log('An error occurred.', error);
                    dispatch(fetchJobsFailure());
                })
            .then(r => dispatch(fetchJobsSuccess(r)));
    };
};
