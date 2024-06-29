import image from '../assets/react.svg'

const Circle = () => {
  return (
    <div className="absolute bottom-[-5rem] left-0 w-full flex justify-center items-center">
      <div className="relative w-40 h-40 rounded-full gradient-border flex justify-center items-center">
        <div className="absolute inset-0 flex justify-center items-center">
          <img src={image} alt="Middle" className="w-14 h-14 rounded-full" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
              />
            </defs>
            <text fontSize="6">
              <textPath href="#circlePath">
                LET'S EXPLORE NOW · OUR EXCLUSIVE PERFUME ·
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Circle
