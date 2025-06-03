import { Link } from "react-router-dom"
import logo from "../../assets/img/LLC_Logo.png"
import { LuFacebook, LuInstagram, LuMail, LuPhone, LuX, LuYoutube } from "react-icons/lu"
import { PiTelegramLogo, PiTiktokLogoLight } from "react-icons/pi"

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const copyrightText = `© ${currentYear} Lightlife Church. All rights reserved.`
    const designerName = " Yemi"
  return (
    <footer
      className="flex flex-col px-8 md:px-8 lg:px-36 py-10 gap-7 md:py-20 bg-darkPurple text-light"
    >
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-7 ">
      <div className="flex flex-1 flex-col gap-3">
        <img
          src={logo}
          alt="LLC Logo"
          className="w-28 hover:scale-150 transform transition-all duration-300 ease-linear"
        />

        <p className="text-3xl text-gold font-bold hover:scale-120 transform transition-all duration-300 ease-linear">
          LIGHTLIFE CHURCH
        </p>
        <p className="italic text-sm">
          1-2 Funso Adeogun Street, off Quarry Road, Abeokuta, Ogun State
        </p>
      </div>

      <div className="flex flex-col flex-start gap-5 flex-1">
        <p className="text-lg font-bold">Useful Links</p>
        <ul className="text-xs space-y-5">
          <li className="list-item hover:text-gold hover:scale-105 hover:underline transition-all ease-linear">
            {" "}
            <Link to={"/about-us"}>About LLC </Link>{" "}
          </li>
          <li className="list-item hover:text-gold hover:scale-105 hover:underline transition-all ease-linear">
            {" "}
            <Link to={"/"}>Daily Light Devotional </Link>{" "}
          </li>
          <li className="list-item hover:text-gold hover:scale-105 hover:underline transition-all ease-linear">
            {" "}
            <Link to={"/"}>Upcoming Programmes </Link>{" "}
          </li>
          <li className="list-item hover:text-gold hover:scale-105 hover:underline transition-all ease-linear">
            {" "}
            <Link to={"/"}>Sermons </Link>{" "}
          </li>
          <li className="list-item hover:text-gold hover:scale-105 hover:underline transition-all ease-linear">
            {" "}
            <Link to={"/"}>L.O.V.E Ladies </Link>{" "}
          </li>
          <li className="list-item hover:text-gold hover:scale-105 hover:underline transition-all ease-linear">
            {" "}
            <Link to={"/"}>God’s Guys </Link>{" "}
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-15 flex-1 text-sm">
      <div className="flex flex-col flex-start gap-5 flex-1">
        <p className="text-lg font-bold">Contact Us</p>
        <a href="tel:+234816527103" className="hover:text-gold hover:scale-105 hover:underline transition-all ease-linear flex items-center gap-2"> <LuPhone /> +234(0)-816-527-103</a>
        
        <a href="mailto:info@lightlifechurch.com" className="hover:text-gold hover:scale-105 hover:underline transition-all ease-linear flex items-center gap-2"> <LuMail /> info@lightlifechurch.com</a>
      </div>

      <div className="flex flex-col flex-start gap-5 flex-1">
        <p className="text-lg font-bold">Connect with Us</p>

        <div className="flex gap-7 text-lg items-center">

        <a href="https://web.facebook.com/LightLifeChurchNG/?_rdc=1&_rdr" className="hover:text-gold hover:scale-105 hover:underline transition-all ease-linear flex items-center gap-2"> <LuFacebook /></a>
        
        <a href="https://www.youtube.com/@lightlifechurch" className="hover:text-gold hover:scale-105 hover:underline transition-all ease-linear flex items-center gap-2"> <LuYoutube /></a>
        
        <a href="https://www.instagram.com/lightlifechurch/" className="hover:text-gold hover:scale-105 hover:underline transition-all ease-linear flex items-center gap-2"> <LuInstagram /></a>
        
        <a href="https://t.me/lightlifechurch" className="hover:text-gold hover:scale-105 hover:underline transition-all ease-linear flex items-center gap-2"> <PiTelegramLogo /></a>
        
        <a href="https://x.com/lightlifem" className="hover:text-gold hover:scale-105 hover:underline transition-all ease-linear flex items-center gap-2"> <LuX /></a>
        
        <a href="https://www.tiktok.com/@lightlifechurch" className="hover:text-gold hover:scale-105 hover:underline transition-all ease-linear flex items-center gap-2"> <PiTiktokLogoLight /></a>
        </div>
      </div>

      </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-10">
        <div className="flex flex-col gap-3">
          <small
            >Designed with ❤ by
              <a href="https://twitter.com/yemi_ogundairo" className="italic font-semibold hover:text-gold hover:scale-105 hover:underline transition-all ease-linear" target="_blank" rel="noopener"
                > {designerName}  </a>  
          </small>
      </div>
      <small className="">
        {copyrightText}
      </small>
      </div>
    </footer>
  )
}

export default Footer
