import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { useCarList } from '../useCarList/useCarList'

export function useSlider() {
  const { cars } = useCarList()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 1,
    slides: {
      number: 12,
      perView: 1
    },
    range: {
      align: true,
      min: 0,
      max: cars.length - 1
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  return {
    currentSlide,
    loaded,
    sliderRef,
    instanceRef
  }
}
