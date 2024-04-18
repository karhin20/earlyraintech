import React from "react"
import SponsorSlider from "../../pages/blog/src/components/home/SponsorsSlider/SponsorsLogo"
import Hero from "../../pages/blog/src/components/home/hero/Hero"
import Homes from "../../pages/blog/src/components/home/mainContent/home/Home"
import HeroSlider from  "../../pages/blog/src/components/home/hero/slider/Slider"

const Homepages = () => {
  return (
    <>
      <HeroSlider/>
      <Hero />
      <Homes />
      <SponsorSlider />
      


    </>
  )
}

export default Homepages