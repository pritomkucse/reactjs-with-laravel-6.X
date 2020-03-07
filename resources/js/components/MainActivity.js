import React, { Component } from 'react'
import { ScaleLoader } from 'react-spinners'

class MainActivity extends Component {
    constructor(){
        super();
        // Creating Global Variable.
        this.APP_URL = window.APP_URL;
        this.APP_PATH = window.APP_PATH;
    }

    loader() {
        return(
            <div className='sweet-loading'>
                <ScaleLoader
                    color={'#123abc'}
                    loading={true}
                />
            </div>
        );
    }
}
export default MainActivity