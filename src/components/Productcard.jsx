import React from 'react'

const Productcard = ({title,image,price}) => {
  return (
    <div>
      {title}
      <img src={image} alt={title} />
    </div>
  )
}

export default Productcard