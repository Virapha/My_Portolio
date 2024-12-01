import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me </h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A officia magni voluptatem quae provident quam. Perferendis saepe tenetur hic magnam repellendus fuga vel iure sequi voluptates debitis. Hic, laboriosam minus!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias maxime adipisci blanditiis porro cupiditate, esse reiciendis veritatis neque, vel non exercitationem. Hic obcaecati enim nam cupiditate error autem magni cumque?</p>

                </div>  
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>REACT JS</p>
                        <hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JAVASCRIPT</p>
                        <hr style={{width:"70%"}} />
                    </div>
                    <div className="about-skill">
                        <p>NODE JS</p>
                        <hr style={{width:"50%"}} />
                    </div>

                </div>  
            </div>
        </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
