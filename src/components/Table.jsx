import React from 'react'

const Table = () => {
    return (
        <div className="flex flex-col max-w-5xl mx-auto py-3 ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 bg-vanilla">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium text-orange-dark">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Fund No</th>
                                    <th scope="col" className="px-6 py-4">Budget</th>
                                    <th scope="col" className="px-6 py-4">Votes cast</th>
                                    <th scope="col" className="px-6 py-4">Funded ideas</th>
                                    <th scope="col" className="px-6 py-4">Completed ideas</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">Fund 9</td>
                                    <td className="whitespace-nowrap px-6 py-4">206K</td>
                                    <td className="whitespace-nowrap px-6 py-4">12K</td>
                                    <td className="whitespace-nowrap px-6 py-4">12</td>
                                    <td className="whitespace-nowrap px-6 py-4">12</td>

                                </tr>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">8</td>
                                    <td className="whitespace-nowrap px-6 py-4">504K</td>
                                    <td className="whitespace-nowrap px-6 py-4">20K</td>
                                    <td className="whitespace-nowrap px-6 py-4">23</td>
                                    <td className="whitespace-nowrap px-6 py-4">12</td>

                                </tr>
                                <tr
                                    className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">7</td>
                                    <td className="whitespace-nowrap px-6 py-4">700K</td>
                                    <td className="whitespace-nowrap px-6 py-4">40K</td>
                                    <td className="whitespace-nowrap px-6 py-4">33</td>
                                    <td className="whitespace-nowrap px-6 py-4">12</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table