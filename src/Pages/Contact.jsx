import React from 'react'
import Wrapper from '../UI/Wrapper'
import wrapperimg from '../../public/misc/1.webp'
const Contact = () => {
  return (
    <div>
      <Wrapper
        title="Contact Us Today"
        description="Have questions, feedback, or need assistance? Our team is just a call or message away. Whether you’re booking a service or want to join us as a partner, we’re ready to support you.."
        image={wrapperimg}
      />
    </div>
  )
}

export default Contact
