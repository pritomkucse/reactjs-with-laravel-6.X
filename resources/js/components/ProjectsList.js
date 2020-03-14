import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainActivity from "./MainActivity";
import ReactHtmlParser from 'react-html-parser';

class ProjectsList extends MainActivity {
    constructor () {
        super();
        this.state = {
            projects: [],
            loading: true,
            html: ""
        };
    }

    componentDidMount () {
        axios.get(`${this.APP_URL}/api/projects`).then( response => {
            console.log(response);
            this.setState({
                projects: response.data,
                loading: false
            })
        })
    }

    render () {
        if (this.state.loading) {
            return this.loader()
        }
        const { projects } = this.state;
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>All Projects</div>
                            <div className='card-body'>
                                <Link className='btn btn-primary btn-sm mb-3' to='/project/create'>
                                    + Create New Project
                                </Link>
                                <Link className='btn btn-primary btn-sm mb-3' to='/html' style={{marginLeft: '7px'}}>
                                    Load Direct HTML
                                </Link>
                                <ul className='list-group list-group-flush'>
                                    {projects.map(project => (
                                        <Link
                                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                            to={`/project/${project.id}`}
                                            key={project.id}>
                                            {project.name}
                                            <span className='badge badge-primary badge-pill'>{project.tasks_count}</span>
                                        </Link>
                                    ))}
                                </ul>
                                <img src={this.APP_URL + '/image/Pic1.jpeg'} style={{width: '100%'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsList