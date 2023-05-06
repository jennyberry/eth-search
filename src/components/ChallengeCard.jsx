import React from 'react'

const ChallengeCard = () => {
    return (
        <div className='transform transition duration-500 hover:scale-105'>
            <div className="lg:w-[400px] w-lg p-7 bg-white border-[2px] border-blue rounded-[20px] shadow-md ">
                <p className='font-medium'>Fund 9</p>
                <h2 className='text-2xl py-5 text-darkblue'>The Great Migration (from Ethereum)</h2>
                <p>How might we make it easy and fast for dApps and other projects to expand or completely move from Ethereum to Cardano?</p>

                <hr className='max-w-[300px] mx-auto my-7 border border-gray'></hr>

                <div className='flex flex-row justify-between text-center'>
                    <div className='flex flex-col'>
                        <h2 className='text-tamarin sm:text-2xl'>$500K</h2>
                        <p className='text-gray-500 text-left text-xs'>Budget</p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-tamarin'>15</h2>
                        <p className='text-gray-500 text-xs'>Proposals</p>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-tamarin'>9</h2>
                        <p className='text-gray-500 text-xs'>Approved</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ChallengeCard