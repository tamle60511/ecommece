import React from 'react'

const PlusIconBold: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`plus_icon-bold ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      stroke='currentColor'
      viewBox='0 0 256 256'
    >
      <path d='M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z'></path>
    </svg>
  )
}

export default PlusIconBold
