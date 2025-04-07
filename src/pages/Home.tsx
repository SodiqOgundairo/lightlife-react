import montage from "./../assets/video/llcMontage.gif"
const Home = () => {
  return (
    <main className=" flex flex-col">
      <div className="md:px-36 px-2 flex flex-col gap-7 bg-no-repeat pt-40 pb-20 items-center heroBg justify-center min-h-screen text-center">
        <div className="flex flex-col gap-3">
          <p className=" text-darkPurple text-2xl md:text-3xl font-semibold">
            {" "}
            Welcome to
          </p>
          <p className="text-3xl md:text-5xl purple-gradient font-bold">
            LIGHTLIFE CHURCH
          </p>
          <p className=" text-darkPurple italic font-semibold text-nomal">
            {" "}
            We make love common...
          </p>
        </div>
        <p className=" text-darkPurple italic font-medium md:text-lg">
          {" "}
          LLC is not just a place, it is a people. It is a community where
          sinners, the destitute, the despondent, the rejected, the depressed,
          the confused, the hurting people can find salvation, love, hope joy,
          purpose, peace, acceptance and guidance.
        </p>

        <img src={montage} alt="LLCMontage" className="w-full rounded-lg" />
      </div>
    </main>
  )
}

export default Home
