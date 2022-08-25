import AboutDescription from '@/components/about/AboutDescription'
import Programmes from '@/components/about/Programmes'
import PageHero from '@/components/PageHero'
import React from 'react'

const about = () => {
  return (
    <section>
        <PageHero/>
        <AboutDescription/>
        <Programmes/>
    </section>
  )
}

export default about