import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import MainActivity from './MainActivity'
import InlineLoaderSpinner from './InlineLoaderSpinner';

const NewProject = lazy(() => import('./NewProject'));
const ProjectsList = lazy(() => import('./ProjectsList'));
const SingleProject = lazy(() => import('./SingleProject'));
const Html = lazy(() => import('./Html'));

class App extends MainActivity {
    componentWillMount() {

    }
    render () {
        return (
            <BrowserRouter basename={this.APP_PATH}>
                <div>
                    <Header />
                    <div className='application-body'>
                        <Suspense fallback={<InlineLoaderSpinner/>}>
                            <Switch>
                                <Route exact path='/' component={ProjectsList} />
                                <Route path='/project/create' component={NewProject} />
                                <Route path='/project/:id' component={SingleProject} />
                                <Route path='/html' component={Html}/>
                                <Route component={ProjectsList}/>
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));