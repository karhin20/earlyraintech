import React, { useState } from "react"
import { slider } from "../../../../Data"
import "./slider.css"
import SliderCard from "./sliderCard"

import "./slider.css"

const SliderItems = () => {
  const [items, setIems] = useState(slider)

  return (
    <>
      <section className='slider'>
        <div>
          {items.map((item) => {
            return (
              <>
                <SliderCard key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default SliderItems