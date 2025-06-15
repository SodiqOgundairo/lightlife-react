import dldImg from "./../assets/img/dldImg.png"
import dld from "./../assets/img/dldFlyer.png"
import MailingListComponent from "../components/common/MailingList"

const DLD = () => {
  return (
    <main className=" flex flex-col">
      {/* hero */}
      <div className="flex flex-col md:flex-row mt-20 mb-16 md:mt-28 items-center gap-8 md:gap-3">
        <div className="flex flex-col gap-3 px-2 md:px-38 ">
          <p className="text-3xl md:text-4xl text-purple">Start your day with</p>
          <p className="text-4xl md:text-5xl gold-purple font-bold hover:scale-110 transition-all ease-linear">
            DAILY LIGHT DEVOTIONAL
          </p>
          <p className="italic text-darkPurple">
            How you start your day determines the outcome. Start your day with the right words as inspired by the Holy Spirit. You will definitely be blessed by this powerful devotionals.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <img
            src={dldImg}
            alt="ImageOne"
            className="hover:scale-120 w-full md:w-7xl hover:rotate-3 px-2 md:px-0 "
            />
        </div>
      </div>
     {/* hero ends*/}

     
      {/* DLD content */}
      <div className="p-4 md:p-36 w-full gap-10 flex flex-col bg-gold-low/20">
      <div className="flex flex-col md:flex-row">
        <img
            src={dld}
            alt="ImageOne"
            className="hover:scale-120 hover:rotate-3 md:px-0 md:rounded-s-lg "
            />

      <div className="flex flex-col bg-gradient-to-br from-gold to-purple text-light w-full md:rounded-e-lg rounded-b-lg md:rounded-b-none p-2 md:p-10">
        <div className="flex flex-row items-center justify-between">
        <p className="text-3xl font-bold">Heaven is real</p>
        <p className="italics">Thu April, 03 2025</p>
        </div>
        
        <div className="flex flex-row items-center justify-between">
        <p className="text-3xl font-bold">Heaven is real</p>
        <p className="italics">Thu April, 03 2025</p>
        </div>


      </div>
      </div>

      </div>
      {/* DLD content END */}
     
      <div className="px-2 md:px-8 lg:px-36 py-10 md:gap-7 md:py-20 mx-auto bg-light w-full items-center flex justify-center">
        <MailingListComponent />
      </div>
    </main>
  )
}

export default DLD
