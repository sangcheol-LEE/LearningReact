import React,{useState} from 'react'
import Star from './Star'


const createArray = length => [...Array(length)]

const StarRating = ({totalStar = 5 , selectedStar=0}) => {
   return (
      <>
         {
            createArray(totalStar).map((item,i) => (
               <Star
                  key={i}
                  selected={selectedStar > i}
               />
            ))
         }
         <p>{selectedStar} / {totalStar}</p>
      </>
)}

export default StarRating
