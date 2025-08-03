import React from 'react'
import Wrapper from '../UI/Wrapper'
import wrapperimg from '../../public/misc/5.webp'
const About = () => {
  return (
    <div>
      <Wrapper
        title="About Us"
        description="Bharat Workers connects you with verified professionals, offering reliable, affordable, and timely workforce solutions for homes and businesses."
        image={wrapperimg}
      />
    </div>
  )
}

export default About
