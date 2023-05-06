import React from 'react'
import { ProposalCard } from '../components'
const AChallenge = () => {
    return (
        <section className="max-w-7xl mx-auto">
            {/*-----------------------HEADER----------------------- */}
            <div className='justify-center text-left py-20'>
                {/* title  */}
                <h1 className="font-extrabold font-nunito text-darkblue text-[50px]">The great migration (from Ethereum)</h1>
                <div className='grid grid-cols-2 gap-3 mx-auto py-10 md:flex md:max-w-4xl text-center text-sm'>
                    <div><h3 className='text-2xl text-tamarin font-bold'>9</h3>
                        <p className=' text-[#666e75] py-3'>Total funds requested</p>
                    </div>
                    <hr className='w-[55px] mx-auto my-5 transform rotate-90 border border-gray-light hidden md:flex' />
                    <div><h3 className='text-2xl text-tamarin font-bold'>100</h3>
                        <p className=' text-[#666e75] py-3'>Total distributed</p>
                    </div>
                    <hr className='w-[55px] mx-auto my-5 transform rotate-90 border border-gray-light hidden md:flex' />

                    <div>
                        <h3 className='text-2xl text-tamarin font-bold'>1,3M</h3>
                        <p className=' text-[#666e75] py-3'>Total votes cast</p>
                    </div>
                    <hr className='w-[55px] mx-auto my-5 transform rotate-90 border border-gray-light hidden md:flex' />

                    <div>
                        <h3 className='text-2xl text-tamarin font-bold'>2,58K</h3>
                        <p className=' text-[#666e75] py-3'> Ideas submitted</p>
                    </div>
                    <hr className='w-[55px] mx-auto my-5 transform rotate-90 border border-gray-light hidden md:flex' />

                    <div>
                        <h3 className='text-2xl text-tamarin font-bold'>2,58K</h3>
                        <p className=' text-[#666e75] py-3'> Ideas funded</p>
                    </div>
                    <hr className='w-[55px] mx-auto my-5 transform rotate-90 border border-gray-light hidden md:flex' />

                    <div>
                        <h3 className='text-2xl text-tamarin font-bold'>2,58K</h3>
                        <p className=' text-[#666e75] py-3'> Ideas completed</p>
                    </div>
                </div>

                {/* -----------------------CHALLENGE BRIEF SECTION----------------------- */}
                <div>
                    <h1 className='text-[30px] text-tamarin font-bold'>Challenge Brief</h1>
                    <div className='my-10 p-5 h-[50vh] overflow-scroll bg-vanilla'>
                        The Cardano ecosystem, despite being written in Haskell, has always had plans to provide a path for projects that either deployed on an EVM-based blockchain (like Ethereum) to migrate to the Cardano ecosystem. Additionally, projects that are better suited for the account-style method (instead of UTXO) also exist, and we want these projects to be usable from the Cardano ecosystem as well.

                        To accomplish this part of the roadmap, many efforts are currently underway such as KEVM, IELE, ERC20 Converter and Milkomeda to name a few. These projects are reaching the point where they are mature enough for people to deploy using them or build tooling for them and so it's time to start welcoming projects to Cardano.

                        You can hear Charles talk about the importance of this in his video "The Island, The Ocean and the Pond" (https://www.youtube.com/watch?v=k8a6tX53YPs)
                    </div>
                </div>

                {/* -----------------------PROPOSALS LIST OF CHALLENGE----------------------- */}
                <div>
                    <h1 className='text-[30px] text-tamarin font-bold'>Proposals</h1>
                    <div className='py-5'>
                        <div className='grid grid-cols-1
           md:grid-cols-2 lg:grid-cols-3 lg:gap-5 gap-4'>
                            <ProposalCard />
                            <ProposalCard />
                            <ProposalCard />
                            <ProposalCard />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AChallenge