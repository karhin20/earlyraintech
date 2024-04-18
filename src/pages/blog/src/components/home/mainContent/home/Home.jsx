import React from "react"
import SponsorsLogo from "../../SponsorsSlider/SponsorsLogo"
import Side from "../../sideContent/side/Side"
import Othernews from "../OtherNews/othernews"
import SponsorAndfInfra from "../SponsorsAndInfras/sponsorandInfra"
import Popular from "../Popular/Popular"

import "./style.css"

const Homes = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
            <Popular />
            < SponsorAndfInfra/>
            <Othernews />
            <SponsorsLogo />
          </section>

          <section className='sideContent'>
            <Side />
          </section>
        </div>
      </main>
    </>
  )
}

export default Homes