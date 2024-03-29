import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { domainDetails } from '../../../features/domain/domainSlice'
import { useTranslation } from 'react-i18next'

const CategoryCards = ({ data }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {t}=useTranslation()
  const handleDetails = () => {
    dispatch(domainDetails(data))
    navigate("/domainDetails")
  }
  return (
    <div className="card w-60 h-56 bg-fourthColor text-primary-content" data-aos="fade-down">
      <div className="card-body relative">
        <h2 className="text-2xl font-bold">{data?.name}</h2>
        <p className='text-xl font-semibold'>$Price</p>
        <p className="text-4xl font-semibold flex  items-center" >{data?.price}/<span className='text-lg'>yearly</span></p>
        <div className="card-actions ">
          <button
            className="block select-none rounded-lg bg-secondColor hover:bg-thirdColor border-b-2 p-2 text-center align-middle font-sans text-sm font-semibold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
            onClick={handleDetails}
          >
            {t("showDetails")}
          </button>
        </div>

      </div>
    </div>

    // <p className='absolute top-[-15px] bg-green-500 w-fit p-1 rounded-lg'>{data?.discount * 100}% off</p>
  )
}

export default CategoryCards