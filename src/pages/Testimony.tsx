
import MailingListComponent from "../components/common/MailingList"
import { BsSoundwave } from "react-icons/bs"
import CloudinaryImage from "../utils/ImageItem"
import { Link } from "react-router-dom"
const Testimony = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* hero */}
      <div className="flex flex-col md:flex-row mt-20 mb-16 md:mt-28 px-2 md:px-32 items-center gap-8 md:gap-3">
        <div className="flex flex-col gap-3">
          <p className="text-3xl md:text-4xl text-purple">Share your</p>
          <p className="text-4xl md:text-5xl gold-purple font-bold hover:scale-110 transition-all ease-linear">
            TESTIMONY
          </p>

          <p className="italic text-darkPurple md:w-4/5">
            Be inspired by real-life stories of faith, miracles, and
            breakthroughs. Witness how God is changing lives in our
            community—one testimony at a time. Your story could be next!
          </p>

          <Link
            to="/share-testimony"
            className="btn-accent flex items-center gap-2 justify-center w-fit"
          >
            Share your testimony <BsSoundwave />{" "}
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <CloudinaryImage
            imageKey="TestimonyBg"
            className="hover:scale-120 hover:rotate-3"
            alt="Testimony Hero Background"
          />
        </div>
      </div>
      {/* hero end */}

      {/* testimony LLc */}
      <div className="bg-[#FFC94F33] px-10 py-10 md:p-11 lg:p-36 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="bg-gradient-to-br from-gold to-purple text-light p-5 flex flex-col gap-3 rounded-md">
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold">Ibukunoluwa Iyiola</p>
            <p className="text-dark bg-light px-4 py-1 font-bold  rounded-full">1</p>
          </div>
          <p>
            LLC is a place for growing and grooming believers into maturity
            through intentional teaching of the undiluted revelation of the
            Scripture. We believe that when Christ is unveiled, Saints are
            empowered. It is a place of equipping and empowering believers for
            the end time global harvest and also preparing saints for the age to
            come. We believe that our core responsibility is not to raise
            members but disciples.
          </p>  
        </div>
        
        <div className="bg-gradient-to-br from-gold to-purple text-light p-5 flex flex-col gap-3 rounded-md">
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold">OLUWAKEMI BABATUNDE</p>
            <p className="text-dark bg-light px-4 py-1 font-bold  rounded-full">1</p>
          </div>
          <p>
           OLUWAKEMI BABATUNDE (Testimony of life Transformation) I'm this person that doesn't believe in the word of God because I don't see it come to reality in my life. Sometimes, I read the word of God that says 'for God knows the plans He has towards me' and I don't see any of His plans come to pass in my life but now I have come to the realisation that truly the word works. I used to believe that all marriages are the same, while growing up I decided I wasn't going to get married because I never saw a happy home and I didn't want that for myself. But my perspective about marriage changed when I met Pastor Juwon and Pastor Lade Owolabi. Spiritually I was not growing, I go to church but I wasn't burning for God. I couldn't pray for 1 hour but now I'm an Intercessor. Have grown in all areas of my life through the help of my Pastors.
          </p>  
        </div>



      </div>
      {/* testimony LLc end */}
 

      <div className="px-2 md:px-8 lg:px-36 py-10 md:gap-7 md:py-20 mx-auto bg-light w-full items-center flex justify-center">
        <MailingListComponent />
      </div>
    </main>
  )
}

export default Testimony
