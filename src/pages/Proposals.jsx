import React from 'react'
import { ProposalCard } from '../components';
const Proposals = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className='justify-center text-left py-20'>
        {/* TITLE AND SUB TITLE */}
        <h1 className="font-extrabold font-nunito text-darkblue text-[50px]">CATALYST PROPOSALS</h1>
        <p className="mt-2 text-[#666e75] text-[18px] max-w-[600px] font-poppins py-10">
          Find ideas by title from all challenges in previous funding rounds
        </p>

        {/* SEARCH INPUT AND FILTER */}
        <form className="flex items-center py-5 my-10 max-w-3xl mx-auto">
          <label className="sr-only">Search</label>
          <div className="relative w-full">
            <input type="text"
              id="voice-search"
              className="bg-white border border-gray-light text-gray text-md rounded-2xl focus:ring-blue focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-orange dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
            <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <button
            type="button"
            className="inline-flex items-center py-2.5 px-3 ml-2 text-md font-medium text-white bg-darkblue rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />

            </svg>
            Filters
          </button>
        </form>



        {/* SEARCH RESULT */}
        <div className='flex flex-row'>
          {/* -----------Filter items----------- */}
          {/* checkboxes type */}
          <div className='max-w-[350px] hidden'>
            <h2>Filters</h2>
            <div className='pt-5 pb-2'>
              <div class="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-checkbox" class="ml-2 text-md font-medium text-gray dark:text-gray-300">
                  Relevance
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input id="checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="checkbox" class="ml-2 text-md font-medium text-gray dark:text-gray-300">
                  Budget (High to Low)
                </label>
              </div>
              <div class="flex items-center">
                <input id="checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="checkbox" class="ml-2 text-md font-medium text-gray dark:text-gray-300">
                  Budget (Low to High)
                </label>
              </div>
            </div>


            {/* dropdown type */}
            <div>
              <button id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="justify-between w-full text-gray bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                Funds
                <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div id="dropdown" className="z-10 hidden bg-blue divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
              </div>
            </div>

            <div> <button id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="justify-between w-full text-gray text-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button">
              Challenges
              <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button></div>
            <div> <button id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-gray bg-blue-700 hover:bg-blue-800
            focus:ring-4 focus:outline-none
            focus:ring-blue-300 font-medium rounded-lg
            text-md px-4 py-2.5 text-center
            inline-flex items-center
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-between w-full"
              type="button">
              Project status
              <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button></div>
            <div> <button id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="justify-between w-full text-gray bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button">
              Funding status
              <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button></div>
            <div> <button id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="justify-between w-full text-gray bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button">
              Tags
              <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button></div>
          </div>
          {/* Result as card list */}
          <div className='ml-5'>

            <div className='grid grid-cols-1
           md:grid-cols-2 lg:grid-cols-3 lg:gap-5 gap-4'>
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

export default Proposals