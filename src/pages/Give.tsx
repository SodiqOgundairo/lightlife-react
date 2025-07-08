
import MailingListComponent from "../components/common/MailingList"
import CloudinaryImage from "../utils/ImageItem"
// import { CgSupport } from "react-icons/cg"
const Give = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* hero */}
      <div className="flex flex-col md:flex-row mt-20 mb-16 md:mt-28 px-2 md:px-32 items-center gap-8 md:gap-3">
        <div className="flex flex-col gap-3">
          <p className="text-3xl md:text-4xl text-purple">Give with a</p>
          <p className="text-4xl md:text-5xl gold-purple font-bold hover:scale-110 transition-all ease-linear">
            CHEERFUL HEART
          </p>

          <p className="italic text-darkPurple md:w-4/5">
           Your generosity fuels the mission of spreading God's love and transforming lives. Partner with us in making a lasting impact through your tithes, offerings, and donations. Every gift counts!
          </p>

          {/* 
          
          uncomment when there is a link to give
           
          <a
            href=""
            className="btn-accent flex items-center gap-2 justify-center w-fit"
          >
            Give here <CgSupport />{" "}
          </a> */}
        </div>

        <div className="flex flex-col gap-2">
          <CloudinaryImage
            imageKey="SupportBg"
            className="hover:scale-120 hover:rotate-3"
            alt="Testimony Hero Background"
          />
        </div>
      </div>
      {/* hero end */}

      {/* testimony LLc */}
      <div className="bg-[#FFC94F33] px-10 py-10 md:p-11 lg:p-36 w-full grid md:grid-cols-2 gap-4 md:gap-8">
        <div className="bg-light border border-r-purple justify-center text-purple p-5 flex flex-col gap-3 rounded-md">
         <p className="text-2xl font-bold">
          Give...
         </p>
          <p>
            Give, and you wil receive. Your gift will return to you in full - pressed down, shaken together to make room for more, running over and poured into your lap.
          </p>  
          <p className="italic">
            Luke 6:38
          </p>  
        </div>
        
        <div className="bg-gradient-to-br from-purple-light to-darkPurple text-light p-5 flex flex-col gap-3 rounded-md">
          <div className="flex justify-between items-center border-b border-light py-1">
            <p className="">Offering & Tithes</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-2xl font-bold">2001935913O</p>
                <p className="text-sm">Account Name</p>
              </div>

              <div className="flex flex-col">
                <p className="text-2xl font-bold">FCMB</p>
                <p className="text-sm">Bank Name</p>
              </div>
            </div>

              <div className="flex flex-col">
                <p className="text-2xl font-bold">LightLife Connect Ministry</p>
                <p className="text-sm">Account Name</p>
              </div>

          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gold to-purple text-light p-5 flex flex-col gap-3 rounded-md">
          <div className="flex justify-between items-center border-b border-light py-1">
            <p className="">Project Account</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-2xl font-bold">2002508248</p>
                <p className="text-sm">Account Name</p>
              </div>

              <div className="flex flex-col">
                <p className="text-2xl font-bold">FCMB</p>
                <p className="text-sm">Bank Name</p>
              </div>
            </div>

              <div className="flex flex-col">
                <p className="text-2xl font-bold">LightLife Connect Ministry</p>
                <p className="text-sm">Account Name</p>
              </div>

          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gold-low to-[#976902] text-darkPurple p-5 flex flex-col gap-3 rounded-md">
          <div className="flex justify-between items-center border-b border-darkPurple py-1">
            <p className="">Dollar Account</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-2xl font-bold">2002610242</p>
                <p className="text-sm">Account Name</p>
              </div>

              <div className="flex flex-col">
                <p className="text-2xl font-bold">FCMB</p>
                <p className="text-sm">Bank Name</p>
              </div>
            </div>

              <div className="flex flex-col">
                <p className="text-2xl font-bold">LightLife Connect Ministry</p>
                <p className="text-sm">Account Name</p>
              </div>

          </div>
        </div>
      </div>
      {/* testimony LLc end */}
 

      <div className="px-2 md:px-8 lg:px-36 py-10 md:gap-7 md:py-20 mx-auto bg-light w-full items-center flex justify-center">
        <MailingListComponent />
      </div>
    </main>
  )
}

export default Give
