import './index.css'
import { navLinks } from './utils/imports'

function App() {
  return (
      <div className={`bg-[#eef2fb] w-full h-full m-0`}>
        <div className="flex items-center mt-5 justify-center">
          <header className="relative w-4/5">
            <div className="bg-white z-20 absolute font-[Poppins] p-5 content-center items-center rounded-2xl justify-between flex flex-row w-full h-20 ">
              <div>
                <img src={``} alt="Company Logo"/>
              </div>

              <div className="flex flex-row gap-7">
                {
                  navLinks.map((navLink, index) => {
                    return ( <ul key={`${index}`}> <li>{navLink.name}</li> </ul> )
                  })
                }
              </div>

              <div>
                <button className={`bg-[#ffc250] text-white p-3 rounded-tr-2xl rounded-bl-2xl`}>Contact Us</button>
              </div>
            </div>
            <div className="bg-[#293c62] p-5 z-0 top-0 left-0 w-full h-20 "></div>
          </header>
        </div>

      </div>

  )
}

export default App;
