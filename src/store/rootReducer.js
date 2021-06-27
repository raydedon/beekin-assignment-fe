import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import job from '../job/jobReducer'

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    job
});

export default rootReducer;
