import React from 'react'
import { RatingSystem, Report } from "../components";
const Project = () => {
    return (
        <section className="max-w-7xl mx-auto">
            {/*-----------------------HEADER----------------------- */}
            <div className='justify-center text-left py-20'>
                <h1 className="font-extrabold font-nunito text-darkblue text-[50px]">EVM DAO Integration</h1>

                {/* List of number */}
                <div className='flex flex-row max-w-xl my-5'>
                    <div className='bg-babyblue rounded-lg w-1/6 text-center mr-3'>
                        <p className='py-1 text-sm font-bold text-indigo font-nunito'>Funded</p>
                    </div>
                    <div className='bg-yellow-light rounded-lg w-1/4 text-center'>
                        <p className='py-1 text-sm font-bold text-orange font-nunito'>Completed</p>
                    </div>
                </div>
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

                {/* ----------------------ABOUT SECTION---------------------- */}
                <div className='my-10'>
                    <h1 className='text-[30px] text-tamarin font-bold'>Proposal Details</h1>
                    <div className='flex flex-col md:flex-row justify-center '>
                        <div className=' md:mr-5 lg:mr-10 text-sm xl:text-lg '>
                            <div className='my-3'>
                                <h3 className='py-3 text-md'>Problems</h3>
                                <p>DAOs operating on the dozens of existing Ethereum Virtual Machine based networks, using Ethereum based tools, have no on ramp for their DAO to shift to the Cardano ecosystem.</p>
                            </div>
                            <div className='my-3'>
                                <h3 className='py-3 text-md'>Solution</h3>
                                <p>We are creating a set of governance smart contracts fitting Done Collectively's advanced organizational-manageability framework.</p>
                            </div>
                            <div className='my-3'>
                                <h3 className='py-3 text-md'>Team</h3>
                                <p>Our team at Kodex Data Systems has over 25 years software development experience, original Cardano community members, and Ethereum developers.</p>
                                <div className='flex flex-row py-5 space-x-5'>
                                    <div>
                                        <img className='w-10 h-10' src="https://doodleipsum.com/700/avatar-4?i=65b822b650c168ac568fa198aff3aa63" alt="Avatar by Pablo Stanley" />
                                        <p className='text-xs'>name</p>
                                    </div>

                                    {/* <img className='w-10 h-10' src="https://doodleipsum.com/700/avatar-4?i=58e15545cbaaccdde1e619aa57b6f85f" alt="Avatar by Pablo Stanley" />
                                    <img className='w-10 h-11' src="https://doodleipsum.com/700/avatar-4?i=183a01289d24c1641ee462d00d3f9d47" alt="Avatar by Pablo Stanley" /> */}
                                </div>
                            </div>
                            <button className=' border-gray-dark p-3 text-darkblue font-bold'>View on Ideascale</button>
                        </div>
                        <div className='overflow-scroll p-5 h-[60vh] xl:max-w-[800px] md:max-w-[500px] mt-10 bg-vanilla rounded-md font-poppins'>
                            <article>
                                <p>[IMPACT] Please describe your proposed solution.</p>


                                Market size of Ridesharing/ridehailing like uber

                                Ridesharing/ridehailing companies like Uber offer a significant mobility solution for millions of global users.

                                The market size of ridesharing services is increasing worldwide: in 2021, this was 58 billion USD, to an estimated 185 billion USD in 2026 [1].

                                The demand for cost and time effective mobility solutions justifies the massive number of ridesharing users. These figures are estimated at more than half a billion in 2021; meanwhile, users of such services are spread across 85 countries. [2]

                                Drawbacks of current centralized Solutions

                                1- Privacy issues:

                                Sensitive user data like travel trajectory and personal data could be tracked or abused by the service provider. However, through the use of the Blockchain, all user data will be hashed and remain safe. This means only permitted actors have the right to decode such data using their private keys.

                                2- Security challenges

                                User data is stored in centralized servers, which leaves it open to hacking or manipulation. But a decentralized solution will address this issue. In fact, the Cardano blockchain, as a platform, and by design, will ensure the security of this mobility solution: there is no single point of failure.

                                3- High fees:

                                Users are paying high fees to service providers. Still, the impact of these fees could be lessened through a decentralized solution
                                [IMPACT] Please describe your proposed solution.
                                Market size of Ridesharing/ridehailing like uber

                                Ridesharing/ridehailing companies like Uber offer a significant mobility solution for millions of global users.

                                The market size of ridesharing services is increasing worldwide: in 2021, this was 58 billion USD, to an estimated 185 billion USD in 2026 [1].

                                The demand for cost and time effective mobility solutions justifies the massive number of ridesharing users. These figures are estimated at more than half a billion in 2021; meanwhile, users of such services are spread across 85 countries. [2]

                                Drawbacks of current centralized Solutions

                                1- Privacy issues:

                                Sensitive user data like travel trajectory and personal data could be tracked or abused by the service provider. However, through the use of the Blockchain, all user data will be hashed and remain safe. This means only permitted actors have the right to decode such data using their private keys.

                                2- Security challenges

                                User data is stored in centralized servers, which leaves it open to hacking or manipulation. But a decentralized solution will address this issue. In fact, the Cardano blockchain, as a platform, and by design, will ensure the security of this mobility solution: there is no single point of failure.

                                3- High fees:

                                Users are paying high fees to service providers. Still, the impact of these fees could be lessened through a decentralized solution
                            </article>
                        </div>

                    </div>
                </div>
                <div className='my-10'>
                    <h1 className='text-[30px] text-tamarin font-bold'>Proposal Assessor Reviews</h1>
                    <RatingSystem />
                </div>

                <div className='py-10'>
                    <h1 className='text-[30px] text-tamarin font-bold'>Monthly reports</h1>
                    <div className='mt-5 grid grid-cols-1 gap-3 md:grid-cols-2'>
                        <Report />
                        <Report />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Project