const Banner = ({ title }) => {
  return (
    <div className=" bg-banner-bg bg-contain bg-no-repeat bg-fixed text-white  py-4 mt-20 h-72 flex justify-start items-center">
      <h1 className="fixed text-6xl font-bold font-sentient uppercase ml-32">
        {title}
      </h1>
    </div>
  )
}

export default Banner
