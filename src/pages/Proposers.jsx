import React from 'react'
import { FundChart, RatingSystem, ProposalCard, Report } from '../components'

const Proposers = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className='justify-center text-left py-20'>
        {/* TITLE AND SUB TITLE */}
        <h1 className="font-extrabold font-nunito text-darkblue text-[50px]">PROPOSER PROFILE</h1>

        {/* BIO AND STATS */}
        {/* BIO */}

        <div className='flex flex-row py-5'>
          <img src="https://doodleipsum.com/1000x1000/avatar-4?i=3d67dbabc3b7d7f0b1e3eba936b5c6ce"
            className='object-full m-5 w-20 h-20' />
          <div className='flex flex-col m-5 py-5'>
            <h2 className='text-tamarin'>Bio</h2>
            <p>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..</p>
          </div>
        </div>
        {/* STATS */}

        <div className='flex md:flex-row justify-evenly flex-col'>
          <FundChart />
          {/* Stats list */}
          <div className='md:w-1/2'>
            <RatingSystem />
          </div>

        </div>
        <div className='py-5'>
          <h1 className='text-[30px] text-tamarin font-bold py-5'>Projects</h1>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-3 xl:grid-cols-3'>
            <ProposalCard />
            <ProposalCard />
            <ProposalCard />
          </div>

        </div>
        <div className='py-10'>
          <h1 className='text-[30px] text-tamarin font-bold'>Monthly reports</h1>
          <div className='mt-5 grid grid-cols-1 gap-3 md:grid-cols-2'>
            <Report />
            <Report />
          </div>

        </div>

      </div>
    </section >
  )
}

export default Proposers