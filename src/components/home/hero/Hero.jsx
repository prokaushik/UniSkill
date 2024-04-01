import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Required Resource ' subtitle='Welcome to UniSkill, the ultimate platform to Optimize Resources( i.e. bench Staff) of Company A by joining it to Company B who have resourses requirement.' />

          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Required Skills</span>
              <input type='text' placeholder='Requirement Type' />
            </div>
            <div className='box'>
              <span>Recruiter/ Seeker</span>
              <input type='text' placeholder='Recruiter/ Seeker' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
