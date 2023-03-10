import React,{useRef} from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { DonutChart } from '../components';
const Home = () => {
  const StatsRef = useRef(null)
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
      <section className="max-w-7xl mx-auto">
      <div className='justify-center text-center py-20'>
        <h1 className="font-extrabold font-nunito text-blue text-[50px]">CATALYST FUND</h1>

        <p className="mt-2 m-auto text-[#666e75] text-[14px] max-w-[600px] font-poppins">
              Project Catalyst is underway and we’re seeing some incredible participation from a wide spectrum of individuals. This is a collaborative process to create a worldwide community innovation project.
        </p>
        <button onClick={()=> scrollToSection(StatsRef)}
          className='rounded-full border-gray p-4 mt-10'><ArrowDownwardIcon style={{ color: '#8492a6' }} />
        </button>
        <div>
        <div className="tk-blob max-w-md">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
    <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
  </svg>
</div>
        </div>
      </div>
      <div id='stats' className='justify-center text-center pt-10 h-[1000px]' ref={StatsRef
      }>
        <h1 className="font-extrabold font-nunito text-blue text-[32px]">Funding Statistics</h1>

        <p className="mt-2 m-auto text-[#666e75] text-[14px] max-w-[600px] font-poppins">
          Total amount Project Catalyst has allocated to projects to date    </p>
<DonutChart/>
      </div>



      </section>
  )
}

export default Home