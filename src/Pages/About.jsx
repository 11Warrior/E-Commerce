import React from 'react'

const About = () => {
  return (
    <div className='w-full h-[100vh]'>
      <h1 className='text-4xl font-bold text-center mt-10'>About Us</h1>
      <div className='flex justify-between'>
        <div className="imageWrapper rounded-lg overflow-hidden w-[30%]">
          <img src="https://images.unsplash.com/photo-1596112051121-1e49bfb66666?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735" alt="" />
        </div>
        <div className="text bg-amber-100 w-[40%] flex flex-col items-center p-3 relative">
          
          <p className='text-2xl text-justify '>
            We at Zaptro, believe joy isn’t just found in big moments  it’s in the everyday things that make life brighter.  Whether it’s a cozy mug for your morning coffee, a gadget that makes your day smoother, or a stylish touch that reflects your vibe, every product here is chosen to bring a smile. Explore, discover, and find joy in everything you love  right here.
          </p>
          <svg
            viewBox="0 0 500 100"
            preserveAspectRatio="none"
            style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}>
            {/* 
            <!-- Wave line --> */}
            <path
              d="M0,60 
                C150,10 350,110 500,60"
              fill="transparent"
              stroke="black"
              strokeWidth=".5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

    </div>
  )
}

export default About