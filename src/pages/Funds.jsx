import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { FundChart, ProposalChart, ChallengeCard, Spinner, MultiChart } from '../components';
import { db } from '../api/firebase-config'
import { getDoc, doc, query, where, collectionGroup, getDocs } from 'firebase/firestore'

const Funds = () => {
  const { fundId } = useParams()
  const [funds, setFunds] = useState({})
  const [loading, setLoading] = useState(false)

  const docRef = doc(db, "funds", fundId)

  const museums = query(collectionGroup(db, 'challenges'), where('fundId', '==', 'fundId'));


  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const querySnapshot = await getDocs(museums);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
      });
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFunds(funds => ({
          ...funds, ...docSnap.data()
        }))

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

    }

    getData()

  }, [])


  // console.log(detail)
  // console.log(loading)
  return (

    funds && Object.keys(funds).length === 0 ? <Spinner /> :
      <section className="max-w-7xl mx-auto">
        <div className='justify-center text-left py-20'>
          <h1 className="font-extrabold font-nunito text-darkblue text-[50px] uppercase">{funds.title}</h1>

          <p className="mt-2 text-[#666e75] text-[14px] max-w-[600px] font-poppins">
            Fund Details
          </p>
          <div className='flex flex-row justify-evenly max-w-lg m-auto py-10 text-center text-tamarin'>

            <div className='px-5'><h3 className='text-[30px] text-orange font-bold'>{funds.numChallenges}</h3>
              <p className=' text-[#666e75] py-3'>Total challenges</p>
            </div>
            <div>
              <hr className='w-[55px] mx-auto my-5 transform rotate-90 border border-gray-light' />
            </div>
            <div>
              <h3 className='text-[30px] text-orange font-bold'>
                ₳{numberWithCommas(funds.voting.totalVote)}
              </h3>
              <p className=' text-[#666e75] py-3'>Total votes cast</p>
            </div>
          </div>
          <div>
            <div className='flex flex-col m-auto justify-evenly md:flex-row'>
              <FundChart
                distributed={funds.budget.distributed}
                remaining={funds.budget.remaining}
              />
              {/* <MultiChart /> */}

            </div>
          </div>
          <div className='mt-10'>
            <h1 className='text-[40px] text-orange font-bold text-tamarin'>Challenges</h1>

            <div className='mt-5'>
              <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                <ChallengeCard />
                <ChallengeCard />
                <ChallengeCard />
                <ChallengeCard />
              </div>
            </div>
          </div>
        </div>
      </section >
  )
}

export default Funds