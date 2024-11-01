const Banner = ({ title, backgroundImage }) => {
  return (
    <div
      className="bg-contain bg-no-repeat bg-fixed text-white py-4 mt-16 h-72 flex justify-start items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className=" text-6xl font-bold font-sentient uppercase ml-32">
        {title}
      </h1>
    </div>
  )
}

export default Banner
