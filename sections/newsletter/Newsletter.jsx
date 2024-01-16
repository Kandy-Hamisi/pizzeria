import React from 'react'

const Newsletter = () => {
  return (
    <section className='padding-x flex items-center'>
        <div className='w-full'>
            <h1 className='font-palanquin text-4xl font-bold mb-8'>Subscribe To Our Newsletter</h1>
            <p className='font-montserrat text-slate-gray max-w-[45rem] leading-[40px]'>Give us your email and we will give you amazing offers and meals at the beginning and end of every week. Quid Pro Quo</p>
        </div>

        <div className='flex justify-end w-full'>
            <div className='w-[70%] relative bg-pale-blue py-4 px-6 rounded-full flex items-center justify-between'>
                <input
                    type="text"
                    placeholder='Enter your email'
                    name=""
                    id=""
                    className='p-2 bg-transparent outline-none mr-2'
                />
                <button className='p-2 md:p-3 bg-coral-red text-white border border-coral-red hover:bg-white hover:border-coral-red rounded-full duration-300 ease-in-out transition-all hover:text-black'>Send</button>
            </div>
        </div>
    </section>
  )
}

export default Newsletter