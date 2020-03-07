import axios from 'axios'
import React, { Component } from 'react'
import MainActivity from "./MainActivity";
import ReactHtmlParser from 'react-html-parser';

class Html extends MainActivity {
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            html: ""
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount () {
        axios.get(`${this.APP_URL}/api/html`).then( response => {
            console.log(response);
            this.setState({
                loading: false,
                html: response.data
            })
        })
    }

    clickHandler(e) {
        console.log("HERE");
        console.log($(e.target));
    }

    render () {
        if (this.state.loading) {
            return this.loader()
        }
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div onClick={this.clickHandler}>{ ReactHtmlParser(this.state.html) }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Html