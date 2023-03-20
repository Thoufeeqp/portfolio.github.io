import React from 'react'
import "./About.css"

function About() {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-cardbg"></div>
            <div className="a-card">
                <img  className='a-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4AHp_QBR5nprZcAzjhuKJmIvLRtQ7jxX86A&usqp=CAU" alt="" />
            </div>
        </div>
        <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
            As a MERN stack developer fresher, I am a highly motivated and enthusiastic individual with a passion for learning and creating exceptional web applications. My proficiency in MongoDB, ExpressJS, ReactJS, and NodeJS has enabled me to develop dynamic and user-friendly web solutions that meet client requirements. I am committed to using my skills and knowledge to create innovative, scalable, and high-performance web applications. With a strong focus on teamwork and collaboration, I am eager to contribute to a dynamic and growth-oriented organization that values creativity, innovation, and continuous learning.
            </p>
            <div className="a-award">
                <img src="" alt="" className="a-award-image" />
            </div>
        </div>

      
    </div>
  )
}

export default About
