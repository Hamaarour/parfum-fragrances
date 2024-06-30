import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { brands } from '../utils/constant'

const PerfumeBrandsSlider = () => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="w-full overflow-hidden">
      <Slider {...sliderSettings}>
        {brands.map((brand, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              className="h-32 w-auto object-contain mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PerfumeBrandsSlider
