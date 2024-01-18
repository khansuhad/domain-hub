import React from 'react'

const CategoryCards = ({data}) => {
    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{data?.name}</h2>
                <p>{data?.category}</p>
                <p>{data?.price}</p>
                <div className="card-actions justify-end">
                    <button className="btn">buy</button>
                </div>
            </div>
        </div>
    )
}

export default CategoryCards