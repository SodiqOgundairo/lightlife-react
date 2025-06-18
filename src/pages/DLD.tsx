import dldImg from "./../assets/img/dldImg.png"
import dld from "./../assets/img/dldFlyer.png"
import MailingListComponent from "../components/common/MailingList"

const DLD = () => {
  return (
    <main className=" flex flex-col">
      {/* hero */}
      <div className="flex flex-col md:flex-row mt-20 mb-16 md:mt-28 items-center gap-8 md:gap-3">
        <div className="flex flex-col gap-3 px-2 md:px-38 ">
          <p className="text-3xl md:text-4xl text-purple">
            Start your day with
          </p>
          <p className="text-4xl md:text-5xl gold-purple font-bold hover:scale-110 transition-all ease-linear">
            DAILY LIGHT DEVOTIONAL
          </p>
          <p className="italic text-darkPurple">
            How you start your day determines the outcome. Start your day with
            the right words as inspired by the Holy Spirit. You will definitely
            be blessed by this powerful devotionals.
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
      <div className="px-4 py-20 md:p-36 w-full gap-10 flex flex-col bg-gold-low/20">
        <div className="flex flex-col md:flex-row">
          <img
            src={dld}
            alt="ImageOne"
            className="hover:scale-120 hover:rotate-3 md:px-0 md:rounded-s-lg "
          />

          <div className="flex flex-col bg-gradient-to-br from-gold to-purple text-light w-full md:rounded-e-lg rounded-b-lg md:rounded-b-none gap-5 p-5 md:p-10">
            <div className="flex flex-row items-center justify-between">
              <p className="text-3xl font-bold">Heaven is real</p>
              <p className="italics">Thu April, 03 2025</p>
            </div>

            <div className="flex flex-col md:flex-row gap-5 justify-between">
              <div className="flex flex-col gap-3">
                <p className="text-xl font-medium">Memory verse</p>
                <p className="italic">
                  But our citizenship is in heaven. And we eagerly await a
                  Savior from there, the Lord Jesus Christ.
                </p>
                <p className="text-xl font-bold italic">PHILIPPIANS 3:20</p>
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-medium">STUDY BIBLE</p>
                <p className="italic">JOHN 14:1-3l</p>
              </div>
            </div>
          </div>

        </div>

        
          <div className="flex flex-col gap-3">
            <p className="text-dark">
              For many, the idea of heaven can seem abstract, and at times, even
              too distant to truly comprehend. Yet, Scripture paints a vivid
              picture of what awaits us—an eternal, glorious, and peaceful home
              where we will dwell in the presence of God. The promise of heaven
              is not only something we look forward to in the afterlife; it is
              meant to shape our lives here and now, giving us hope, purpose,
              and perspective in our daily struggles. However, I must say that
              the promise of heaven is not the ultimate goal of a believer. The
              believer’s ultimate goal is God Himself.
            </p>

            <p className="text-dark">
              The Apostle Paul tells us in 1 Corinthians 2:9 that heaven is
              beyond anything we can imagine. Even the most beautiful,
              breathtaking things on earth cannot compare to the glory that
              awaits us. Our finite minds cannot fully comprehend the splendor
              of heaven. Its beauty, peace, and majesty are beyond words. Also,
              In Revelation 21, John attempts to describe heaven using symbols
              and images, golden streets, gates of pearl, and foundations
              adorned with precious stones. But these descriptions only scratch
              the surface. Heaven is not merely a beautiful place; it is the
              very presence of God, where we will experience His love, glory,
              and holiness in perfect fullness.
            </p>

            <p className="text-dark">
              The most important aspect of heaven is not its streets of gold or
              the absence of pain, it is the presence of Jesus. Heaven is where
              we will be in perfect communion with God, and the only way to
              enter this eternal home is through Jesus Christ. Heaven is real,
              and it is the promise for every believer. It is a place where we
              will be in the presence of God, experiencing the fullness of joy,
              peace, and love. As we live our lives on earth, let the reality of
              heaven shape our hearts, strengthen our faith, and inspire our
              actions. Heaven is not a distant dream, it is a certain reality
              that gives us hope in the midst of life’s trials.
            </p>

            <p className="text-dark">
              Let the hope of heaven encourage you today. Whatever you are
              facing, whether it's pain, loss, disappointment, or frustration,
              remember that your true home is in heaven. You are a citizen of
              the kingdom of God, and the best is yet to come.
            </p>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-light to-darkPurple text-light flex flex-col gap-2 p-5 md:p-10">
            <p className="font-bold text-xl">
              PRAYER
            </p>
            <p className="italic">
              Heavenly Father, thank You for the promise of heaven. Thank You for preparing a place for us where we will experience Your presence in fullness. Help us to live with an eternal perspective, remembering that this world is not our home. Strengthen our faith and help us to share the hope of heaven with others. Thank You for the gift of eternal life through Jesus. In His name, Amen.
            </p>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-gold-low to-[#976902] text-darkPurple flex flex-col gap-2 p-5 md:p-10">
            <p className="font-bold text-xl">
              PRAYER
            </p>
            <p className="italic">
              Heavenly Father, thank You for the promise of heaven. Thank You for preparing a place for us where we will experience Your presence in fullness. Help us to live with an eternal perspective, remembering that this world is not our home. Strengthen our faith and help us to share the hope of heaven with others. Thank You for the gift of eternal life through Jesus. In His name, Amen.
            </p>
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
