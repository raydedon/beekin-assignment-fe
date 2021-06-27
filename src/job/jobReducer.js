import {FETCH_JOBS_FAILURE, FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS} from '../redux/commonAction';

const initialState = {
    jobs: [],
    loading: false,
    activeJobId: 0
};

const job = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case FETCH_JOBS_REQUEST: {
            return {...state, loading: true};
        }
        case FETCH_JOBS_FAILURE: {
            return {...state, loading: false};
        }
        case FETCH_JOBS_SUCCESS: {
            const {jobs} = payload;
            return {...state, loading: false, jobs};
        }
        default:
            return state;
    }
};

export default job;
