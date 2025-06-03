import { useState } from "react"
import Accordion from "./Accordion"

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // 0: open first

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="w-full border border-gray-1 rounded-lg overflow-hidden">
      <Accordion
        title="Our Vision"
        isOpen={openIndex === 0}
        onClick={() => toggle(0)}
        isFirst={true}
      >
        <ul className="space-y-2 list-disc px-4">
          <li className="text-gray-2">
            To Raise Kingdom Leaders in All Sphere of Human Influence.
          </li>
          <li className="text-gray-2">
            To Help Saints Mature and Fulfil God’s Purpose.
          </li>
          <li className="text-gray-2">
            To make disciple for Christ in Nations.
          </li>
        </ul>
      </Accordion>

      <Accordion
        title="Our Purpose Statement"
        isOpen={openIndex === 1}
        onClick={() => toggle(1)}
      >
        <ul className="space-y-2 list-disc px-4">
          <li className="text-gray-2">
            To assimilate Citizens into God's Kingdom through Evangelism
          </li>
          <li className="text-gray-2">
            Empower/Known into Maturity through Discipleship and Worship
          </li>
          <li className="text-gray-2">
            Release them into Ministry through Service
          </li>
        </ul>
      </Accordion>

      <Accordion
        title="Our Philosophy"
        isOpen={openIndex === 2}
        onClick={() => toggle(2)}
      >
        <p className="text-gray-2">
          Lightlife church is a New Testament church. We believe in the
          five-fold ministry; Apostles, Prophets, Evangelists, Pastors and
          Teachers. We believe that for a church to be equipped, matured and
          come to the fullness of Christ, it must embrace and manifest all the
          five-fold ministry gifts. Ephesians 4:7-16 <br /> <br />
          We also believe that every believer is called to ministry to serve
          through their ministerial gifts. Also, we believe that every believer
          is born to be a leader. However, we lead by serving others. We take
          pleasure in serving and not being served. Matthew 20:24-28.
        </p>
      </Accordion>

      <Accordion
        title="Our Commitment"
        isOpen={openIndex === 3}
        onClick={() => toggle(3)}
      >
        <div className="flex gap-8 justify-between items-center flex-wrap">
          <p className="hover:font-bold hover:scale-110 text-gray-2">Love</p>
          <p className="hover:font-bold hover:scale-110 text-gray-2">
            Excellence
          </p>
          <p className="hover:font-bold hover:scale-110 text-gray-2">Worship</p>
          <p className="hover:font-bold hover:scale-110 text-gray-2">Prayer</p>
          <p className="hover:font-bold hover:scale-110 text-gray-2">
            Building Relationships
          </p>
          <p className="hover:font-bold hover:scale-110 text-gray-2">
            Soul Winning
          </p>
          <p className="hover:font-bold hover:scale-110 text-gray-2">
            Humility
          </p>
          <p className="hover:font-bold hover:scale-110 text-gray-2">
            Hospitality
          </p>
          <p className="hover:font-bold hover:scale-110 text-gray-2">
            Training
          </p>
          <p className="hover:font-bold hover:scale-110 text-gray-2">
            Character Building
          </p>
        </div>
      </Accordion>

      <Accordion
        title="Our Aims"
        isOpen={openIndex === 4}
        onClick={() => toggle(4)}
      >
        <ul className="space-y-2 list-disc px-4">
          <li className="text-gray-2">
            To be conformed to the image of Christ. To know Him and be like Him
            in all things.
          </li>
          <li className="text-gray-2">
            To equip every believers in LLC to fulfil their ministry and vision.
          </li>
          <li className="text-gray-2">
            To ensure every believer function in their ministerial calling
            whether as apostles, prophets, evangelists, pastors or teachers for
            the equipping of other saints.
          </li>
          <li className="text-gray-2">
            To reach the lost souls through evangelism and church planting the
            gospel of Christ.
          </li>
          <li className="text-gray-2">
            To help saints live as a worthy ambassadors of Christ, living a life
            of love and worthy of emulation.
          </li>
          <li className="text-gray-2">
            To build churches in villages, towns and cities to reach the
            nations.
          </li>
          <li className="text-gray-2">
            To cater for the poor and less privileges through our Lightlight
            Social Responsibility (LLCR) arm.
          </li>
        </ul>
      </Accordion>

      <Accordion
        title="Citizens Commitment"
        isOpen={openIndex === 5}
        onClick={() => toggle(5)}
      >
        <p className="italic">
          In LLC, the Citizens are regarded as our official members. A citizen
          then is committed to the following.
        </p>
        <ul className="space-y-2 list-disc px-4">
          <li className="text-gray-2">
            <span className="text-darkPurple font-bold">Fellowship:</span>{" "}
            Attends LLC programmes and events regularly
          </li>
          <li className="text-gray-2">
            <span className="text-darkPurple font-bold">Worship:</span> Must be
            committed to both personal and corporate worship of LLC
          </li>
          <li className="text-gray-2">
            <span className="text-darkPurple font-bold">Evangelism:</span> This
            is core. A citizen must be committed to soul winning
          </li>
          <li className="text-gray-2">
            <span className="text-darkPurple font-bold">Prayer:</span> Praying
            for the church and her leadership always
          </li>
          <li className="text-gray-2">
            <span className="text-darkPurple font-bold">Service:</span> We
            believe there are no spectator in the church. As priest we must be
            committed to serving God and other saint in love and humility
          </li>
          <li className="text-gray-2">
            <span className="text-darkPurple font-bold">
              Financial Partnership:
            </span>{" "}
            LLC citizens are financial partners with God in LLC. They are
            committed to giving money and material things for the furtherance of
            the gospel of the Gospel.
          </li>
          <li className="text-gray-2">
            <span className="text-darkPurple font-bold">Training:</span>{" "}
            Citizens must have gone through Citizens School (CS)
          </li>
        </ul>
      </Accordion>

      <Accordion
        title="LightLife Community Responsibility (LLCR)"
        isOpen={openIndex === 6}
        onClick={() => toggle(6)}
      >
        <p className="italic">
          As part of our mandate, we are called to shine as light in the
          “world”. This connotes impact beyond the four walls of the church into
          the community. Therefore, in accordance with the words of Jesus in
          Matthew 25:31-40 we have the responsibility to take care of the needy
          in society. In the light of this, we have various arms to cater for
          this vision.
        </p>
        <ul className="space-y-2 list-disc px-4">
          <li className="text-gray-2">
            <span className="text-darkPurple font-bold">
              LightLife Kitchen:
            </span>{" "}
            the vision is to feed the hungry one or two times a day in places
            where hunger is most severe. Giving of foodstuff during major
            festive seasons to widows, poor and physically challenged.
          </li>
          <li className="text-gray-2">
            <span className="text-darkPurple font-bold">LightLife Edu:</span>{" "}
            the vision is to provide scholarship to brilliant but unprivileged
            students, ranging from primary to university education. Also
            stationary will be provided to students through this platform. This
            will also include schools, such as vocational schools for people to
            learn handiwork.
          </li>
          <li className="text-gray-2">
            <span className="text-darkPurple font-bold">LightLife Store:</span>{" "}
            this vison is to provide clothing and other similar materials to
            those in need.
          </li>
          <li className="text-gray-2">
            <span className="text-darkPurple font-bold">LightLife Homes:</span>{" "}
            the vision of this arm is to provide home for the homeless. This
            will include motherless homes and so on.
          </li>
          <li className="text-gray-2">
            <span className="text-darkPurple font-bold">Lightlife Care:</span>{" "}
            This arm of our ministry deals more with visiting and catering for
            the prisoners and hospitals.
          </li>
        </ul>
      </Accordion>

      <Accordion
        title="Growth Plan"
        isOpen={openIndex === 7}
        onClick={() => toggle(7)}
      >
        <div className="flex flex-col gap-4">
          <p className="italic">
            Our core focus is not just have members but to raise disciples who
            are also leaders (Matthew 28:19). Therefore, we focus on empowering
            you to become kingdom leaders who will in-turn raise other leaders
            across the nations of the earth. Our teaching are scripture-based
            following the Jesus method of raising leaders. Our curriculum is
            embellished with secular principles (also scripturally based) to
            help our leaders relate with the secular world for the purpose of
            taking the world for Christ. There various level you can relate with
            no matter where you are now. We make it easy for our citizens to
            grow spiritually from being a novice to becoming a mature person in
            Christ through our training classes.
          </p>

          <div className="my-2">
            <p className="font-bold">Level 1: Community</p>
            <p>
              These are people living in our community/city but never worship
              with us physically. In fact, many of them never had any church or
              religious affiliation. These may have only come across our church
              through media platforms. Our mandate is to the world, communities
              are units of nation. We can reach these people through our
              teachings through media platforms, outreaches and evangelism .
            </p>
          </div>

          <div className="my-2">
            <p className="font-bold">Level 2: The Multitude</p>
            <p>
              Just as the multitude comes to listen to Jesus once in a while.
              This category of people worship with us once in a while or
              regularly but they are not committed citizens of our church.
            </p>
          </div>

          <div className="my-2">
            <p className="font-bold">Level 3: The Citizens</p>
            <p>
              We call our official members citizens. These are our regular and
              committed members. They have experienced new birth and have pass
              through the Citizens School (CS). They have signed the citizen’s
              forms, therefore, they have some rights and privileges. At this
              stage you can serve effectively in the ministry.
            </p>

            <p className="font-bold">Citizen School Aims</p>
            <ul className="space-y-2 list-disc px-8">
              <li className="text-gray-2">
                To teach believers the foundational basic doctrines of the
                Kingdom.
              </li>
              <li className="text-gray-2">To establish them in the Kingdom.</li>
              <li className="text-gray-2">
                To introduce and intimate believers about our vision, mission
                and modus operandi.
              </li>
              <li className="text-gray-2">
                To induct them into the culture of LIGHTLIFE MINISTRIES.
              </li>
              <li className="text-gray-2">
                To intimate them on their commitments and service to the church.
              </li>
              <li className="text-gray-2">
                To intimate them to their rights and privileges in the church.
              </li>
            </ul>
          </div>
        </div>
      </Accordion>
    </div>
  )
}

export default AccordionSection
