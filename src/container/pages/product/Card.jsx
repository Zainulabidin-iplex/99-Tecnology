import React from 'react'
import CarDimg from "../../../assest/cardImg.jpg"
import ReactStarRatings from 'react-star-ratings';

const Card = () => {
    const [rating, setRating] = React.useState(4)
  return (
    <div className='w-full items-center justify-center mx-auto'>
      <img src={CarDimg} className='w-full h-[150px] object-cover bg-contain'/>
      <p className='text-[12px] font-normal text-blue-500 mt-2'>The ViewSonic VX2780-2K-SHDJ combines incredible picture quality and an ergonomic design. A 27” pixel dense, QHD display renders sharp images, and videos packed with detail.</p>
      <ReactStarRatings
        rating={rating}
        starRatedColor="yellow"
        changeRating={value => setRating(value)}
        numberOfStars={5}
        name='rating'
        starDimension="20px"
        starSpacing="3px"
    />
    </div>
  )
}

export default Card


