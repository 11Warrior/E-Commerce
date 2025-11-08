import React from 'react'

const Contacts = () => {
  return (
    <div className='w-full h-[90vh] flex items-center justify-between'>
      <div className='left h-full w-[50%] relative'>
        <img className='w-full h-full brightness-47 rounded-lg'  src="https://images.unsplash.com/photo-1761892464046-dd9ee385ae90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764" alt="" />
        <div  className='flex justify-between items-center p-5 absolute top-[30%] left-0'  >
          <h1 className='text-[2vw]'>Lets Connect !</h1>

          <div className='w-[40%] mt-[10vw]'>
            <p className='text-justify text-2xl'>Thanks for stopping by!
              I’d love to connect and hear what you’re working on.
              Drop me a message I’ll get back to you soon!</p>
          </div>
        </div>
      </div>

      <div className=' bg-zinc-800 rounded-lg h-full w-[50%]'>
        <div className='h-full p-3 space-y-3'>
          <h1 className='border-b-1 border-gray-500'>Enter your details</h1>
          <div>
            <label htmlFor="name">Name: </label>
            <input name='name' type="text" placeholder='Enter your name...' className='bg-amber-50 outline-none p-2 rounded-lg' />

          </div>

          <div>
            <label htmlFor="name">Email: </label>
            <input name='email' type="email" placeholder='Enter your email...' className='bg-amber-50 outline-none p-2 rounded-lg' />

          </div>

          <label htmlFor="msg">Enter your message: </label>

          <textarea className='w-full h-[60vh] bg-gray-700 outline-1 resize-none p-2 rounded-lg' name="msg" id=""></textarea>

          <button className='p-3 rounded-lg cursor-pointer bg-green-400 w-20 h-10 flex items-center justify-center'>Send</button>
        </div>

      </div>
    </div>
  )
}

export default Contacts