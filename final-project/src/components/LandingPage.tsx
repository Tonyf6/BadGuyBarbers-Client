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
    <h1 className="font-jacques text-4xl font-bold text-black mb-4">
      Welcome To Bad Guy Barbers
    </h1>
    <div className="flex flex-col items-center gap-6">
      <button className="font-jacques bg-black hover:bg-gray-800 text-white font-bold py-2 px-8 rounded-full w-40">
        Login
      </button>
      <button className="font-jacques bg-black hover:bg-gray-800 text-white font-bold py-2 px-8 rounded-full w-40">
        Book Now
      </button>
    </div>
  </div>
</div>



<footer className="w-full absolute bottom-0 left-0 bg-gray-900 text-white p-6">
          <div className="flex justify-center gap-12 mb-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group">
              <img src={Icons1} alt="Instagram" className="h-8 w-8" />
            </a>

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group">
              <img src={Icons2} alt="Facebook" className="h-8 w-8" />
            </a>

         
            <a href="/about" className="group">
              <img src={Icons3} alt="About Us" className="h-8 w-8" />
            </a>
          </div>

          <div className="text-center text-sm">
            <span className="block">
              © 2024, Bad Guy Barbers. All Rights Reserved
            </span>
            <span className="block mt-2">
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

