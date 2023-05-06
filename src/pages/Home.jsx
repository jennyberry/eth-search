import React, { useRef, useState, useEffect } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FundChart, ProposalChart, MultiChart, Table, FundDetails } from '../components';
import { db } from '../api/firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const StatsRef = useRef(null)
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }
  const [numbers, setNumber] = useState([])
  const dataCollectionRef = collection(db, "overview")

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(dataCollectionRef)
      setNumber(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getData()
  }, [])

  //func to animate increase number
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 100,
      config: { mass: 1, tension: 20, friction: 10 }
    })
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
  }

  return (

    <section className="max-w-7xl mx-auto">
      {/* -----------------------HERO SECTION----------------------- */}
      <div className='justify-center text-center py-20 '>
        {/* HEADER AND SUBHEADER */}

        <div className=" w-full flex items-center justify-center">
          <div className="relative ">
            <div
              className="absolute top-0 -right-4 w-72 h-72 bg-brightyellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000">
            </div>
            <div
              className="absolute -bottom-8 left-20 w-72 h-72 bg-tamarin rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000">
            </div>
            <div className="m-8 relative space-y-5 text-left sm:text-center">
              <h1 className="font-extrabold font-nunito text-darkblue text-[50px]">CATALYST FUNDING OVERVIEW</h1>
              <p className="mt-2 m-auto font-medium max-w-[600px] font-poppins text-sm sm:text-md">
                Project Catalyst is underway and we are seeing some incredible participation from a wide spectrum of individuals. This is a collaborative process to create a worldwide community innovation project.
              </p>
              <div className='mt-20 text-center'>
                <button onClick={() => scrollToSection(StatsRef)}
                  className='rounded-full border-orange-400 p-4 mt-20'>
                  <ArrowDownwardIcon style={{ color: '#FFC403' }} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* -----------------------STATS SECTION----------------------- */}

      <div id='stats' className='justify-center text-center py-10 space-y-5' ref={StatsRef} >
        <h1 className="font-extrabold font-nunito text-darkblue text-[32px] mt-20">Funding Statistics</h1>
        <p className="mt-2 m-auto text-[#666e75] text-[14px] max-w-[600px] font-poppins">
          Total amount Project Catalyst has allocated to projects to date    </p>

        {numbers.map((num) => (
          <div className='grid grid-cols-1 gap-3 mx-auto py-10 md:flex justify-evenly'>
            <FundChart
              distributed={num.totalBudget.totalDistributed}
              remaining={num.totalBudget.totalRemaining}
            />
            <div className='rounded-lg text-gray-600 p-6 bg-white border-gray-200 border-[2px] text-left space-y-2 lg:w-1/3'>
              <h1 className='text-tamarin py-3'>Total number of</h1>
              <hr />
              <div className='flex flex-row justify-between space-x-20 p-2 '>
                <p className='text-md md:text-lg'> Funds</p>
                <p className='text-2xl font-semibold text-darkblue'><Number n={(num.totalFunds)} /></p>
              </div>
              <div className='flex flex-row justify-between space-x-20  p-2 '>
                <p className='text-md md:text-lg' >Challenges</p>
                <p className='text-2xl font-semibold text-darkblue'><Number n={(num.totalChallenges)} /></p>
              </div>

              <div className='flex flex-row justify-between space-x-20  p-2 '>
                <p className='text-md md:text-lg'>Ideas completed</p>
                <p className='text-2xl font-semibold text-darkblue'><Number n={(num.totalProposals.totalCompleted)} /></p>
              </div>
              <div className='flex flex-row justify-between space-x-20  p-2 '>
                <p className='text-md md:text-lg'> Ideas funded</p>
                <p className='text-2xl font-semibold text-darkblue'><Number n={(num.totalProposals.totalFunded)} /></p>
              </div>

              <div className='flex flex-row justify-between space-x-20  p-2 '>
                <p className='text-md md:text-lg'>Ideas submitted</p>
                <p className='text-2xl font-semibold text-darkblue'><Number n={(num.totalProposals.totalSubmit)} /></p>
              </div>
              <div className='flex flex-row justify-between space-x-20  p-2 '>
                <p className='text-md md:text-lg'>Voted cast</p>
                <p className='text-2xl font-semibold text-darkblue'><Number n={(num.totalVotecast.totalVote)} /></p>
              </div>
            </div>
          </div>

        ))}

        <div> <MultiChart /></div>

      </div >

      {/* -----------------------FUND DETAILS SECTION------------------------------ */}
      <div id='table' className='justify-center text-center md:pt-10 space-y-5' >
        <h1 className="font-extrabold font-nunito text-darkblue text-[32px]">Funding details</h1>
        <p className="mt-2 m-auto text-[#666e75] text-[14px] max-w-[600px] font-poppins">
          Detail numbers of each funding round    </p>
        <FundDetails />
      </div >

    </section >

  )
}

export default Home