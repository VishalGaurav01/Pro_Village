import React from 'react'
const val="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg"
const val1="https://st2.depositphotos.com/1718692/7425/i/450/depositphotos_74257459-stock-photo-lake-near-the-mountain-in.jpg"
export default function Upcoming() {
  return (
    // <div >
    // <img class="h-auto max-w-md" src={val} alt="image description"/>
    // <img class="h-auto max-w-md" src={val1} alt="image description"/>
    // </div>
    <div className="relative">
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: '10' }}>
        <img className="h-auto max-w-md" src={val} alt="image description"/>
      </div>
      <div style={{ position: 'absolute', top: '40px', left: '40px', zIndex: '5' }}>
        <img className="h-auto max-w-md" src={val1} alt="image description"/>
      </div>
    </div>
  )
}
