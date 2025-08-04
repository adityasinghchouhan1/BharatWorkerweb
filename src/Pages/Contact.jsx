import React from 'react'
import Wrapper from '../UI/Wrapper'
import wrapperimg from '../../public/misc/1.webp'
import IconGrid from '../UI/Iconsection'

// ✅ Import react-icons
import { FaWhatsapp, FaEnvelope, FaComments, FaPhoneAlt } from 'react-icons/fa'

const featureItems = [
  {
    icon: <FaWhatsapp className="text-white text-3xl" />,
    title: 'WhatsApp Support',
    description: 'Chat with us instantly on WhatsApp for any query.',
  },
  {
    icon: <FaEnvelope className="text-white text-3xl" />,
    title: 'Email Us',
    description: 'Send us your questions or feedback via email.',
  },
  {
    icon: <FaComments className="text-white text-3xl" />,
    title: 'Live Chat',
    description: 'Real-time assistance through live chat support.',
  },
  {
    icon: <FaPhoneAlt className="text-white text-3xl" />,
    title: 'Call Center',
    description: 'Speak to our customer care team directly anytime.',
  },
]

const Contact = () => {
  return (
    <div>
      <Wrapper
        title="Contact Us Today"
        description="Have questions, feedback, or need assistance? Our team is just a call or message away. Whether you’re booking a service or want to join us as a partner, we’re ready to support you."
        image={wrapperimg}
      />

      <IconGrid
        items={featureItems}
        gridClass="grid grid-cols-1 sm:grid-cols-4 gap-8"
        iconBgColor="#012878"
        iconWrapperClass="p-6 rounded-full mb-5"
      />
    </div>
  )
}

export default Contact
