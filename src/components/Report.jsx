import React from 'react'

const Report = () => {
    return (
        <div>
            <div className='border-gray-200 border w-xl p-5 rounded-lg space-y-3'>
                <h3 className='text-darkblue'>February 20, 2023 Progress report</h3>
                <p>Status: <span className='font-bold'>In progress</span>
                </p>
                <p>On track: <span className='font-bold'>Yes</span>
                </p>
                <p>Completion target: -</p>
                <p>Attachment</p>
                <div>
                    <p>Summary</p>
                    <p className=''>
                        Last month we delivered Milestone 1 Evidence. Currently our tech team focus on additional features for Flint. We are working towards to Milestone 2 - Educational Section for Flint! Our work is in progress, currently finalizing designs for both mobile & desktop versions of Flint.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Report