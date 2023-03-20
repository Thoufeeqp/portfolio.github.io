import React from 'react'
import "./Introduction.css"

function Introduction() {
  return (
    <div className='i'>
        <div className="left ">
          <div className="i-left">
            <h2 className='i-intro'>Hello, My name is</h2>
            <h1 className='i-name'>Thoufeeq P</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">
                        Web Developer
                    </div>
                    <div className="i-title-item">
                        UI/UX Designer
                    </div>
                    <div className="i-title-item">
                        React Developer
                    </div>
                    <div className="i-title-item">
                        Photographer
                    </div>
                    <div className="i-title-item">
                        Content Writer
                    </div>
                   
                </div>
                
            </div>
            <div className="i-description">
                    I design and develop services for customers of all sizes,specializing in creating stylish,modern websites,web services and online stores.
                </div>
          </div>
        </div>
        <div className="right">
            <div className="i-bg"></div>
            
          <img className='img' src="" alt="" />
        </div>
      
    </div>
  )
}

export default Introduction
