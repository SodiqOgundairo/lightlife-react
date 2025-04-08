import montage from "./../assets/video/llcMontage.gif"
import visionImage from "./../assets/img/visionImage.png"
const Home = () => {
  return (
    <main className=" flex flex-col">
      <div className="md:px-8 lg:px-36 px-2 flex flex-col gap-7 pt-4 md:pt-40 pb-4 md:pb-20 items-center heroBg justify-center min-h-screen text-center">
        <div className="flex flex-col gap-3">
          <p className=" text-darkPurple text-2xl md:text-3xl font-semibold">
            {" "}
            Welcome to
          </p>
          <p className="text-3xl md:text-5xl purple-gradient font-bold hover:scale-120 transform transition-all duration-300 ease-linear ">
            LIGHTLIFE CHURCH
          </p>
          <p className=" text-darkPurple italic font-semibold text-nomal">
            {" "}
            We make love common...
          </p>
        </div>
        <p className=" text-darkPurple italic font-medium md:text-lg hover:scale-105 transform transition-all duration-300 ease-linear ">
          {" "}
          LLC is not just a place, it is a people. It is a community where
          sinners, the destitute, the despondent, the rejected, the depressed,
          the confused, the hurting people can find salvation, love, hope joy,
          purpose, peace, acceptance and guidance.
        </p>

        <img src={montage} alt="LLCMontage" className="w-full rounded-lg hover:scale-110 transform transition-all duration-300 ease-linear " />
      </div>

      <div className="px-2 md:px-8 lg:px-36 py-10 gap-4 md:gap-7 md:py-20 justify-end flex flex-col md:flex-row">
        <div className="rounded-lg w-full md:w-1/3 lg:1/5 overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300 ease-linear hover:shadow-xl">
          <img src={visionImage} alt="visionImage" className="object-cover h-full w-full " />
        </div>

        <div className="flex flex-col flex-1 lg:flex-row gap-4 md:gap-7 w-full md:w-2/3 md:mt-20">

          <div className="rounded-lg shadow-lg shadow-darkPurple/20 bg-darkPurple p-5 text-light flex flex-col md:flex-1 gap-3 justify-end h-68 md:h-full hover:scale-105 hover:bg-transparent hover:border-2 border-darkPurple hover:text-darkPurple hover:shadow-xl transition-all duration-300 ease-linear">
            <p className="text-2xl md:text-4xl font-bold"> Our Purpose</p>
            <p className=""> To Raise an Army of Disciples and Leaders</p>
          </div>

          <div className="rounded-lg shadow-lg bg-light p-5 text-darkPurple flex flex-col md:flex-1 gap-3 justify-end h-68 md:h-full hover:scale-105 hover:bg-purple hover:border-2 border-darkPurple hover:text-light hover:shadow-xl transition-all duration-300 ease-linear">
            <p className="text-2xl md:text-4xl font-bold"> Our Vision</p>
            <ul className="space-y-5">
              <li className="list-item">
                To Raise Kingdom Leaders in All Sphere of Human Influence
              </li>
              <li className="list-item">
                To Help Saints Mature and Fulfil God’s Purpose
              </li>
              <li className="list-item">
                To make disciple for Christ in Nations
              </li>
            </ul>
          </div>

          <div className="rounded-lg shadow-lg shadow-gold/20 bg-gold p-5 text-darkPurple flex flex-col md:flex-1 gap-3 justify-end h-68 md:h-full hover:scale-105 hover:bg-transparent hover:border-2 border-gold hover:text-gold hover:shadow-xl transition-all duration-300 ease-linear">
            <p className="text-2xl md:text-4xl font-bold"> Our Mission</p>
            <p className=""> To assimilate citizens (believers) into the God’s Kingdom (church), Empower them and Release them for Service (ministry)</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
