import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col max-w-7xl mx-auto text-center mt-5'>
            <div className='flex flex-row justify-between  '>
                <div>
                    <h3>About</h3>
                    <ul>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                </div>
                <div>
                    <h3>Resource</h3>
                    <ul>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                </div>
            </div>
            <p>copyright</p>
        </div>
    )
}

export default Footer