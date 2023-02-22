import { React, useState, useEffect } from 'react'
import { FundChart, ProposalChart, CardItem } from '../components';
// import axios from 'axios';
const Funds = () => {
  // const [fund, setFund] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [searchTitle, setSearchTitle] = useState("")
  // const [project, setProject] = useState([]);
  // useEffect(() => {
  //   const loadPost = async () => {
  //     setLoading(true)
  //     axios
  //       .get('https://www.lidonation.com/api/catalyst-explorer/funds')
  //       .then(res => setFund(res.data.data))

  //       .catch(err => setError(err));
  //     setLoading(false)
  //   }
  //   loadPost();
  // }, []);
  return (
    <section className="max-w-7xl mx-auto">
      <div className='justify-center text-left py-20'>
        <h1 className="font-extrabold font-nunito text-blue text-[50px]">FUND No.</h1>

        <p className="mt-2 text-[#666e75] text-[14px] max-w-[600px] font-poppins">
          Fund No. Details
        </p>
        <div className='flex flex-row justify-evenly max-w-lg m-auto py-10 text-center'>

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
          <div className='flex flex-row m-auto justify-evenly text-center'>
            <FundChart />
            <ProposalChart />

          </div>
        </div>
        <div className='mt-10'>
          <h1 className='text-[40px] text-orange font-bold'>Challenges</h1>
          {/* <div class="grid grid-cols-3 gap-4 pt-5">
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {fund.map((item) => (
                //
                <CardItem
                  id={item.id}
                  title={item.title}
                  thumbnail={item.thumbnail_url}
                  amount={item.amount}
                  proposalsCount={item.proposals_count}
                  launchDate={item.launch_date}
                />
              ))}
            </div>
          </div> */}
          Cards
        </div>
      </div>
    </section >
  )
}

export default Funds