import React from 'react';
import styles from './App.module.css';
import profilePic from '../images/fmcProfile.jpeg'

export const AboutMe = () => {
    return (
        <div className={styles.component}>
            <div style={{width: "100%", margin: "0 auto"}}>
                <div style={{width: "50%", float: "left"}}>
                    <img src={profilePic} alt="profile pic" width="300px"/>
                </div>
                <div style={{width: "50%", float: "left", paddingTop: "5%"}}>
                    <p>Hi, my name is Davidson Poole. I am a software engineer currently living in Philadelphia.</p>
                </div>
            </div>
        </div>
    )
}
