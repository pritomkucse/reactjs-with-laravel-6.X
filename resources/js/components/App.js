import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import NewProject from './NewProject'
import ProjectsList from './ProjectsList'
import SingleProject from './SingleProject'
import MainActivity from './MainActivity'
import Html from './Html'

class App extends MainActivity {
    componentWillMount() {

    }
    render () {
        return (
            <BrowserRouter basename={this.APP_PATH}>
                <div>
                    <Header />
                    <div className='application-body'>
                        <Switch>
                            <Route exact path='/' component={ProjectsList} />
                            <Route path='/project/create' component={NewProject} />
                            <Route path='/project/:id' component={SingleProject} />
                            <Route path='/html' component={Html}/>
                            <Route component={ProjectsList}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));