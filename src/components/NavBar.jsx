import { React, useState, useEffect } from 'react'
import { logo1 } from '../assets';
import axios from 'axios';
import { db } from '../api/firebase-config'
import { collection, getDocs } from 'firebase/firestore'
const NavBar = () => {

    const [funds, setFunds] = useState([])
    const fundsCollectionRef = collection(db, "funds")
    //   useEffect(() => {
    //     const getFund = async () => {

    //         axios
    //             .get('https://c3eth-api-default-rtdb.firebaseio.com/funds.json')
    //             .then(res => setFunds(res.data))
    //             .catch(err => console.log(err));

    //     }
    //     getFund();
    // }, []);

    const getFund = useEffect(() => {
        const getData = async () => {
            const data = await getDocs(fundsCollectionRef)
            setFunds(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getData()
    }, [])

    return (
        <nav className="px-4 py-3 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <img src={logo1} className="h-6 mr-3 sm:h-10" alt="C3ETH Logo" />
                </a>
                <div>
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        {/* <span className="sr-only">Open main menu</span> */}
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>

                <div className="hidden w-full z-30 md:flex md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className="
                            block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                        </li>
                        <li>
                            <div >
                                <button
                                    onClick={getFund}
                                    id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Funds <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>

                            </div>

                            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white rounded-lg shadow w-full dark:bg-gray-700 dark:divide-gray-600">

                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400 md:flex-row md:flex" aria-labelledby="dropdownLargeButton">
                                    {funds.map((fund) => (
                                        <li
                                            key={fund.id}
                                            className="flex md:mx-2 lg:mx-4 text-[16px]"
                                        >
                                            <a href={`/funds/${fund.id}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                {fund.title}
                                            </a>
                                        </li>

                                    ))}
                                </ul>

                            </div>
                        </li>
                        <li>
                            <a href="/challenges" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Challenges</a>
                        </li>
                        <li>
                            <a href="/proposals" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Projects</a>
                        </li>
                        <li>
                            <a href="/proposers" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Proposers</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    )
}

export default NavBar