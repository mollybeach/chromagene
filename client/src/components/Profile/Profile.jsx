import React, { Component } from 'react';
import './Profile.scss';
import HoneyDna from '../Honeydna/Shader'


class Profile extends Component {
    render() {
        return (
            <div className = 'profile'>
                 <HoneyDna/>
            </div>
        );
    }
}

export default Profile;
//                 <iframe id="frame" title='playbox2'src="https://shaderpark.netlify.com/embed/-MWzRcsR3dfQV5mH_N8j"frameBorder="0"  style={{position: 'fixed'}}></iframe>