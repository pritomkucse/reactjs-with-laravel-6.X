import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import MainActivity from "../MainActivity";
import Header from './../Header'

class CommonLayoutComponent extends MainActivity {
    constructor(props){
        super(props);
    }

    componentDidMount () {
        
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className={'common-layout-panel'}>
                    <div className={'middle-content-area'}>
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const CommonLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <CommonLayoutComponent {...matchProps}>
                <Component {...matchProps} />
            </CommonLayoutComponent>
        )} />
    )
};

export default CommonLayoutRoute;