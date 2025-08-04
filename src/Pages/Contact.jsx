import React from 'react'
import Wrapper from '../UI/Wrapper'
import wrapperimg from '../../public/misc/1.webp'
import IconGrid from '../UI/Iconsection'
import icon from '../../public/icons/white/labor.webp'
import icon2 from '../../public/icons/white/calendar.webp'
import icon3 from '../../public/icons/white/best-price.webp'
import icon4 from '../../public/icons/white/eco-friendly.webp'

const featureItems = [
  {
    icon: icon,
    title: 'Verified Workers',
    description: 'Every worker is background-verified for your safety.',
  },
  {
    icon: icon2,
    title: 'Job Matching System',
    description: 'Smart job matching ensures the right fit, every time.',
  },
  {
    icon: icon3,
    title: 'Transparent Payments',
    description: '100% transparent and secure payment process.',
  },
  {
    icon: icon4,
    title: 'Quick Support',
    description: 'Get quick and friendly support whenever you need it.',
  },
]

const Contact = () => {
  return (
    <div>
      <Wrapper
        title="Contact Us Today"
        description="Have questions, feedback, or need assistance? Our team is just a call or message away. Whether you’re booking a service or want to join us as a partner, we’re ready to support you.."
        image={wrapperimg}
      />

      <IconGrid
        items={featureItems}
        iconBgColor="#012878"
        iconWrapperClass="p-6 rounded-full mb-5"
      />
    </div>
  )
}

export default Contact
