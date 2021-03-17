import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainActivity from './MainActivity'
import InlineLoaderSpinner from './InlineLoaderSpinner';
import CommonLayoutRoute from './layouts/CommonLayout'

const Html = lazy(() => import('./Html'));
const NewProject = lazy(() => import('./NewProject'));
const ProjectsList = lazy(() => import('./ProjectsList'));
const SingleProject = lazy(() => import('./SingleProject'));

class App extends MainActivity {
    componentWillMount() {

    }
    render () {
        return (
            <BrowserRouter basename={this.APP_PATH}>
                <div className='application-body'>
                    <Suspense fallback={<InlineLoaderSpinner/>}>
                        <Switch>
                            <CommonLayoutRoute exact path='/' component={ProjectsList} />
                            <CommonLayoutRoute path='/project/create' component={NewProject} />
                            <CommonLayoutRoute path='/project/:id' component={SingleProject} />
                            <CommonLayoutRoute path='/html' component={Html}/>
                            <CommonLayoutRoute component={ProjectsList}/>
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));