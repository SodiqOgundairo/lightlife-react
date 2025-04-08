import logo from "../../assets/img/LLC_Logo.png"

const Footer = () => {
    return (
        <footer className="flex flex-col
         md:flex-row justify-between md:items-center px-2 md:px-8 lg:px-36 py-10 gap-4 md:gap-7 md:py-20 bg-darkPurple text-light">
           <div className="flex flex-col gap-3">
            <img src={logo} alt="LLC Logo" className="w-28 hover:scale-150 transform transition-all duration-300 ease-linear" />

            <p className="text-3xl text-gold font-bold hover:scale-120 transform transition-all duration-300 ease-linear">LIGHTLIFE CHURCH</p>
            <p className="italic text-sm">1-2 Funso Adeogun Street, off Quarry Road, Abeokuta, Ogun State</p>
           </div>
        </footer>
    )
}

export default Footer