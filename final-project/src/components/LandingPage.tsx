import LandingImage from '../assets/Photos/LandingImg.jpg';
import Icons1 from '../assets/Photos/instagram.png';
import Icons2 from  '../assets/Photos/facebook-2.png';
import Icons3 from '../assets/Photos/about-us.png';
const LandingPage = () => {
  return (
    <>
   <div>
  <img
    src={LandingImage}
    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
  />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 bg-opacity-50 p-8 rounded-lg shadow-2xl backdrop-blur-sm">
    <h1 className="text-4xl font-bold text-black mb-4">
      Welcome To Bad Guy Barbers
    </h1>
    <div className="flex flex-col items-center gap-6">
      <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-8 rounded-full w-40">
        Login
      </button>
      <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-8 rounded-full w-40">
        Book Now
      </button>
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

<div className="relative flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}>
  {/* Main content */}
  <div className="flex-grow">
    {/* Other content goes here */}
  </div>

  {/* Footer */}
  <footer className="absolute bottom-0 left-0 right-0 bg-black shadow dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center gap-4">
      <div className="flex justify-center gap-12">
        {/* Profile Icon */}
        <a href="/profile" className="group cursor-pointer transition-transform hover:scale-110">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 overflow-hidden">
              <img
                src={Icons1}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <i className="fas fa-user text-gray-500 text-xl group-hover:text-white"></i>
          </div>
        </a>

        {/* Services Icon */}
        <a href="/services" className="group cursor-pointer transition-transform hover:scale-110">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 overflow-hidden">
              <img
                src={Icons2}
                alt="Services"
                className="w-full h-full object-cover"
              />
            </div>
            <i className="fas fa-scissors text-gray-500 text-xl group-hover:text-white"></i>
          </div>
        </a>

        {/* Booking Icon */}
        <a href="/booking" className="group cursor-pointer transition-transform hover:scale-110">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 overflow-hidden">
              <img
                src={Icons3}
                alt="Booking"
                className="w-full h-full object-cover"
              />
            </div>
            <i className="fas fa-calendar text-gray-500 text-xl group-hover:text-white"></i>
          </div>
        </a>
      </div>

      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024, Bad Guy Barbers All Rights Reserved{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
</div>




    </>
  )
}

export default LandingPage

