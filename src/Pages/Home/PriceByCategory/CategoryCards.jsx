import React from 'react'

const CategoryCards = ({ data }) => {
    return (
        <div className="card w-60 h-56 bg-thirdColor text-primary-content" data-aos="fade-down">
            <div className="card-body relative">
                
                <h2 className="text-2xl font-bold">{data?.name}</h2>
                <p className='text-xl font-semibold'>$Price</p>
                <p className="text-4xl font-semibold flex justify-center items-center" >{data?.price}/<span className='text-lg'>yearly</span></p>
                <div className="card-actions justify-center">
                <button
                className="block select-none rounded-lg bg-blue-500 hover:bg-fourthColor border-b-2 p-2 text-center align-middle font-sans text-sm font-semibold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                Show Details
              </button>
                </div>

            </div>
        </div>

        // <p className='absolute top-[-15px] bg-green-500 w-fit p-1 rounded-lg'>{data?.discount * 100}% off</p>
    )
}

export default CategoryCards