import React from 'react'

function About() {
    return (
        <div className='flex flex-col'>
            <div className='p-20'>

                <h1 className='font-bold text-center text-3xl p-8 text-amber-500'>ABOUT</h1>
                <p >With a dream and a grand vision to bring sumptuous, authentic South Indian and Chinese fare to your doorstep, we founded the exclusive kitchen ‘Food On Way’ in 2015, in chennai.</p>
            </div>

            <div className='p-20'>
                <h1 className='font-bold text-center text-3xl pb-8 text-amber-500'>EFFICIENT DELIVERY</h1>
                <p>Quick delivery is yet another promise we give our patrons. Our staffs strive to prepare each meal with fresh ingredients in the shortest possible duration of time. We also provide contactless delivery wherein the delivery person will drop the parcel at the door or mentioned drop point, ring the bell and leave.</p>
            </div>
        </div>
    )
}

export default About