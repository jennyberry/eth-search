import React from 'react'

const Challenges = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className='justify-center text-left py-20'>
        <h1 className="font-extrabold font-nunito text-blue text-[50px]">The great migration (from Ethereum)</h1>
        <div className='flex flex-row justify-between py-20 text-center'>

          <div className='px-5'><h3 className='text-[30px] text-orange font-bold'>100</h3>
            <p className=' text-[#666e75] py-3'>Total challenges</p>
          </div>
          <div>
            <hr className='w-[55px] mx-auto my-5 transform rotate-90 border border-gray-light' />
          </div>
          <div className='px-5'><h3 className='text-[30px] text-orange font-bold'>100</h3>
            <p className=' text-[#666e75] py-3'>Total challenges</p>
          </div>
          <div>
            <hr className='w-[55px] mx-auto my-5 transform rotate-90 border border-gray-light' />
          </div>
          <div className='px-5'><h3 className='text-[30px] text-orange font-bold'>100</h3>
            <p className=' text-[#666e75] py-3'>Total challenges</p>
          </div>
          <div>
            <hr className='w-[55px] mx-auto my-5 transform rotate-90 border border-gray-light' />
          </div>
          <div className='px-5'><h3 className='text-[30px] text-orange font-bold'>100</h3>
            <p className=' text-[#666e75] py-3'>Total challenges</p>
          </div>
          <div>
            <hr className='w-[55px] mx-auto my-5 transform rotate-90 border border-gray-light' />
          </div>
          <div>
            <h3 className='text-[30px] text-orange font-bold'>1,3M</h3>
            <p className=' text-[#666e75] py-3'>Total votes cast</p>
          </div>

        </div>
        <div>
          <h1 className='text-[30px] text-orange font-bold'>Challenge Brief</h1>
          <div className='py-10'>
            The Cardano ecosystem, despite being written in Haskell, has always had plans to provide a path for projects that either deployed on an EVM-based blockchain (like Ethereum) to migrate to the Cardano ecosystem. Additionally, projects that are better suited for the account-style method (instead of UTXO) also exist, and we want these projects to be usable from the Cardano ecosystem as well.

            To accomplish this part of the roadmap, many efforts are currently underway such as KEVM, IELE, ERC20 Converter and Milkomeda to name a few. These projects are reaching the point where they are mature enough for people to deploy using them or build tooling for them and so it's time to start welcoming projects to Cardano.

            You can hear Charles talk about the importance of this in his video "The Island, The Ocean and the Pond" (https://www.youtube.com/watch?v=k8a6tX53YPs)
          </div>
        </div>
        <div>
          <h1 className='text-[30px] text-orange font-bold'>Proposals</h1>
          Cards
        </div>
      </div>
    </section>
  )
}

export default Challenges