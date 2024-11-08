import LandingImage from '../assets/Photos/LandingImg.jpg';

const LandingPage = () => {
  return (
    <>
    <div>
        <img 
        src={LandingImage}
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"/> 
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 bg-opacity-50 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-black mb-4">Welcome To Bad Guy Barbers</h1>
          {/* <p className="text-lg text-black">This is a semi-transparent box in the middle of the screen.</p> */}
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">Login</button>
          <div className='row'>
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">Book Now</button>
          </div>
        </div>      
      </div>


     
      {/* <footer className="absolute bottom-0 left-0 right-0 bg-white rounded-lg shadow m-4 dark:bg-gray-800">
  <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center gap-4">
   
    <div className="flex justify-center gap-12">
      <i className="fa-solid fa-scissors text-gray-500 text-xl"></i>
      <i className="fa-solid fa-user text-gray-500 text-xl"></i>
      <i className="fa-solid fa-calendar text-gray-500 text-xl"></i>
    </div>
    
  
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2024, Bad Guy Barbers All Rights Reserved
      <a href="https://flowbite.com/" className="hover:underline">
        Flowbite™
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer> */}

<footer className="absolute bottom-0 left-0 right-0 bg-black  shadow m-4 dark:bg-gray-800">
  <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center gap-4">
    {/* Icons with Images */}
    <div className="flex justify-center gap-12">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img 
            src="/path-to-your-image.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <i className="fas fa-user text-gray-500 text-xl"></i>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img 
            src="/path-to-your-image.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <i className="fas fa-scissors text-gray-500 text-xl"></i>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img 
            src="/path-to-your-image.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <i className="fas fa-calendar text-gray-500 text-xl"></i>
      </div>
    </div>
    
    {/* Copyright text */}
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2024, Bad Guy Barbers All Rights Reserved{" "}
      <a href="https://flowbite.com/" className="hover:underline">
        Flowbite™
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>
      
    </>
  )
}

export default LandingPage

