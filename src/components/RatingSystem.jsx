import React from 'react'

const RatingSystem = () => {
    return (
        <div className='w-full py-5'>
            <div className="flex flex-row justify-between items-center mb-5 ">
                <p className="bg-blue-100 text-blue text-lg font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">4.5 / 5</p>
                <p className="text-md font-medium text-gray dark:text-gray-400">376 reviews</p>
            </div>

            <div>
                <div>
                    <dl>
                        <dt className="text-lg font-medium text-gray-500 dark:text-gray-400">Impact</dt>
                        <dd className="flex items-center mb-3">
                            <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                <div className="bg-blue h-2.5 rounded dark:bg-blue-500" style={{ width: '88%' }} ></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt className="text-lg font-medium text-gray-500 dark:text-gray-400">Feasibility</dt>
                        <dd className="flex items-center mb-3">
                            <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                <div className="bg-blue h-2.5 rounded dark:bg-blue-500" style={{ width: '98%' }}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt className="text-lg font-medium text-gray-500 dark:text-gray-400">Auditability</dt>
                        <dd className="flex items-center mb-3">
                            <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                <div className="bg-blue h-2.5 rounded dark:bg-blue-500" style={{ width: '88%' }}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default RatingSystem