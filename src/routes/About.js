import React from 'react';
import './About.css'
function About(props)
{
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "안녕하세요 201930126 이태정이라고 합니다"
            </span>
        <span>-이태정, 2000/11/08</span>
        </div>    
    );
}
export default About;