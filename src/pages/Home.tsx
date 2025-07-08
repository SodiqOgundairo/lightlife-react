import montage from "./../assets/video/llcMontage.gif"
import heartLine from "./../assets/img/heart-line.png"
import MailingListComponent from "../components/common/MailingList"
import { Link } from "react-router-dom"
import CloudinaryImage from "../utils/ImageItem"
const Home = () => {
  return (
    <main className=" flex flex-col">
      {/* hero */}
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

        <img
          src={montage}
          alt="LLCMontage"
          className="w-full rounded-lg hover:scale-110 transform transition-all duration-300 ease-linear "
        />
      </div>

      {/* vision, misision, purpose */}
      <div className="px-2 md:px-8 lg:px-36 py-10 gap-4 md:gap-7 md:py-20 justify-end flex flex-col md:flex-row">
        <div className="absolute right-0  hover:right-50 transition-all duration-900 animate-bounce ease-linear z-0">
          <img src={heartLine} alt="decor" />
        </div>

        <div className="rounded-lg w-full md:w-1/3 lg:1/5 overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300 ease-linear hover:shadow-xl">
          <CloudinaryImage
            imageKey="VisionMision"
            className="object-cover h-full w-full"
            alt="visionImage"
          />
        </div>

        <div className="flex flex-col flex-1 lg:flex-row gap-4 md:gap-7 w-full md:w-2/3 md:mt-20 z-10">
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
            <p className="">
              {" "}
              To assimilate citizens (believers) into the God’s Kingdom
              (church), Empower them and Release them for Service (ministry)
            </p>
          </div>
        </div>
      </div>

      <div className=" md:gap-15  mx-auto  w-full items-center flex flex-col-reverse md:flex-row justify-between bg-purple-mid/20">
        <div className="flex flex-col w-full md:w-1/2 justify-center gap-3 md:gap-2 text-darkPurple px-8 md:px-9 lg:px-36 py-10 md:py-20 my-8 md:my-0 mr-5 md:mr-0 bg-light rounded-e-xl shadow-md">
          <p className="text-2xl md:text-4xl font-bold hover:scale-105 transform transition-all duration-300 ease-linear hover:text-purple-mid">
            Daily Light Devotional
          </p>
          <p className="italic text-sm md:text-base">
            How you start your day determines the outcome. Start your day with
            the right words as inspired by the Holy Spirit. You will definitely
            be blessed by this powerful devotionals.
          </p>
          <div className="flex flex-col lg:flex-row justify-start gap-2 md:gap-5">
            <Link to="/daily-light-devotional" className="btn-pry w-fit">
              Read Today's Devotional
            </Link>
            <Link to="/daily-light-devotional" className="btn-outline w-fit">
              Get DLD of the month
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 hover:scale-105 transform transition-all duration-300 ease-linear hover:shadow-xl">
          <CloudinaryImage
            imageKey="DLDWide"
            className="object-cover h-full w-full"
            alt="DAILY LIGHT DEVOTIONAL"
          />
        </div>
      </div>

      <div className="px-2 md:px-8 lg:px-36 py-10 gap-5 md:gap-7 md:py-20 mx-auto w-full items-center flex flex-col justify-center">
        <p className="text-2xl md:text-4xl font-bold hover:scale-105 transform transition-all duration-300 ease-linear hover:text-purple-mid">
          What's happening in LLC?
        </p>

        <div className="flex flex-row flex-wrap gap-5 md:gap-10 justify-center w-full">
          <CloudinaryImage
            imageKey="lbi"
            className="rounded-md hover:scale-110 transition-all duration-300 hover:shadow-xl ease-linear flex-1 w-full"
            alt="lbi"
          />

          <CloudinaryImage
            imageKey="relationshipClinic"
            className="rounded-md hover:scale-110 transition-all duration-300 hover:shadow-xl ease-linear flex-1 w-full"
            alt="relationship clinic"
          />

          <CloudinaryImage
            imageKey="wordFeast"
            className="rounded-md hover:scale-110 transition-all duration-300 hover:shadow-xl ease-linear flex-1 w-full"
            alt="word feast"
          />

          <CloudinaryImage
            imageKey="prayerParty"
            className="rounded-md hover:scale-110 transition-all duration-300 hover:shadow-xl ease-linear flex-1 w-full"
            alt="prayer party"
          />

          <CloudinaryImage
            imageKey="prayerParty"
            className="rounded-md hover:scale-110 transition-all duration-300 hover:shadow-xl ease-linear flex-1 w-full"
            alt="prayer party"
          />

          <CloudinaryImage
            imageKey="luyd"
            className="rounded-md hover:scale-110 transition-all duration-300 hover:shadow-xl ease-linear flex-1 w-full"
            alt="Light Up Your Day"
          />

          <CloudinaryImage
            imageKey="wordOfTheYear"
            className="rounded-md hover:scale-110 transition-all duration-300 hover:shadow-xl ease-linear flex-1 w-full"
            alt="Word of the Year"
          />
        </div>

        <p className="italic text-sm md:text-base text-center">
          How you start your day determines the outcome. Start your day with LLC
          is a known house of bread. Do join any of our services and be sure you
          will be blessed, In case you do not have a spiritual family, we are
          very glad to have you join us
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 md:gap-5">
          <a
            href="#"
            rel="noopener noreferrer"
            className="btn-pry w-fit"
          >
            Join our Community
          </a>
          <a
            href="https://t.me/lightlifechurch"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-fit"
          >
            Get our Sermons
          </a>
        </div>
      </div>

      <div className="px-2 md:px-8 lg:px-36 py-10 md:gap-7 md:py-20 mx-auto bg-gold-low/20 w-full items-center flex justify-center">
        <MailingListComponent />
      </div>
    </main>
  )
}

export default Home
