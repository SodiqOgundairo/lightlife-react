import { CgMediaPodcast } from "react-icons/cg"
import AboutImg from "./../assets/img/AboutHero.png"
import AccordionSection from "../helpers/AccordionSection"
const About = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* hero */}
      <div className="flex flex-col md:flex-row mt-20 mb-16 md:mt-28 px-2 md:px-32 items-center gap-8 md:gap-3">
        <div className="flex flex-col gap-3">
          <p className="text-3xl md:text-4xl text-purple">About</p>
          <p className="text-4xl md:text-5xl gold-gradient font-bold hover:scale-110 transition-all ease-linear">
            LIGHTLIFE CHURCH
          </p>
          <p className="italic text-darkPurple md:w-4/5">
            LLC is not just a place, it is a people. It is a community where
            sinners, the destitute, the despondent, the rejected, the depressed,
            the confused, the hurting people can find salvation, love, hope joy,
            purpose, peace, acceptance and guidance.{" "}
          </p>

          <a
            href=""
            className="btn-accent flex items-center gap-2 justify-center w-fit"
          >
            Watch Online <CgMediaPodcast />{" "}
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <img
            src={AboutImg}
            alt="ImageOne"
            className="hover:scale-120 hover:rotate-3 "
          />
        </div>
      </div>
      {/* hero end */}

      {/* about LLc */}
      <div className="bg-[#FFC94F33] px-10 py-20 md:p-36 w-full flex flex-col gap-4 md:gap-8">
        <p className="text-darkPurple">
          LLC is a place for growing and grooming believers into maturity
          through intentional teaching of the undiluted revelation of the
          Scripture. We believe that when Christ is unveiled, Saints are
          empowered. It is a place of equipping and empowering believers for the
          end time global harvest and also preparing saints for the age to come.
          We believe that our core responsibility is not to raise members but
          disciples.
        </p>

        <p className="text-darkPurple">
          It is the place your true worth and identity is revealed, valued and
          expressed. We believe that every believer has a purpose to be
          fulfilled here on earth. Therefore, we equip believers to succeed in
          their chosen career, take dominion and leadership in order to be
          earthly relevant. This is our mandate and we a resolved to make it
          happen with you on our team.
        </p>
      </div>
      {/* about LLc end */}

      {/* who we are */}
      <div className="p-4 md:p-36 w-full gap-10 flex flex-col bg-light">
        <p className="text-2xl md:text-4xl font-bold hover:scale-105 transform transition-all duration-300 ease-linear hover:text-purple-mid">
          Who we are!
        </p>
        <AccordionSection />
      </div>
      {/* who we are END */}

      {/* meet PJ */}
      <div className="bg-gradient-to-br from-gold to-darkPurple px-10 py-20 md:p-36 w-full flex justify-center gap-4 md:gap-8">
        

      </div>
      {/* meet PJ end*/}
    </main>
  )
}

export default About
