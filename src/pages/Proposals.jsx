import React from 'react'

const Proposals = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className='justify-center text-left py-20'>
        {/* TITLE AND SUB TITLE */}
        <h1 className="font-extrabold font-nunito text-blue text-[50px]">Catalyst Projects</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[600px] font-poppins">
          Find proposals from previous funding rounds.
        </p>

        {/* SEARCH INPUT AND FILTER */}
        <div className='flex flex-row justify-evenly'>
          <div><input placeholder='search'></input></div>
          <button>filter</button>
        </div>

        {/* SEARCH RESULT */}
        <div className='flex flex-row justify-between'>
          {/* Filter items */}
          <div>
            <div>relavance</div>
            <div>budget (high to low)</div>
            <div>budget (high to low)</div>
            <div>funds dropdown</div>
            <div>challenges dropdown</div>
            <div>project status dropdown</div>
            <div>funding status dropdown</div>
            <div>tags dropdown</div>
          </div>
          {/* Result as card list */}
          <div>cards lists</div>
        </div>
      </div>
    </section>
  )
}

export default Proposals