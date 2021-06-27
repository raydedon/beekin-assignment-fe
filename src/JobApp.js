import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import configureStore, {history} from './store/configureStore.dev';
import classes from './jobApp.scss';
import {Route, Switch} from 'react-router-dom';
import JobList from './jobs/JobsList';
import Job from './job/Job';

const store = configureStore();

const JobApp = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className={classes.container}>
                    <Switch>
                        <Route path="/job/:jobId">
                            <Job/>
                        </Route>
                        <Route path="/">
                            <JobList/>
                        </Route>
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
    )
};

export {JobApp};
export default JobApp;
