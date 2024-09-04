import React from 'react'

const TechStackCard = ({imageSrc}) => {
  return (
    <div>
        <div className=' rounded-lg bg-white border p-3 col-md-12 '>
        <img
        style={{ width: "180px", height: "150px", objectFit: "cover" }}
        className="item-center ms-4 col-12 col-md-4 object-cover"
        src={imageSrc}
        alt="Avatar"
      />
        </div>
    </div>
  )
}

export default TechStackCard