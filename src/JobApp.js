import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import configureStore, {history} from './store/configureStore.dev';
import classes from './jobApp.scss';
import {Route, Switch} from 'react-router-dom';
import JobList from './jobs/JobsList';
import Job from './job/Job';
import NoMatch from './job/NoMatch';

const store = configureStore();

const JobApp = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className={classes.container}>
                    <Switch>
                        <Route path="/">
                            <JobList/>
                        </Route>
                        <Route path="/job/:jobId">
                            <Job/>
                        </Route>
                        <Route>
                            <NoMatch />
                        </Route>
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
    )
};

export {JobApp};
export default JobApp;
