import React from 'react'

const Hero = () => {
  return (
    <div className="flex items-center justify-center py-8">
      
     <p className='text-white text-2xl text-center py-4'> Data fetching in web development 
        can be categorized into Client-Side Rendering (CSR), Server-Side Rendering (SSR). <br /> 
        In CSR, data is fetched and rendered in the browser after the page loads, <br /> providing dynamic updates but slower initial rendering. <br />
         SSR fetches data on the server for each request,<br /> delivering fully-rendered HTML 
        to the client for faster initial load times but potentially higher server load.</p>


    </div>
    
  )
}

export default Hero
