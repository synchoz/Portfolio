import IMAGES from "../../Images/Images";

export default function Intro({Id}) {
    return (
        <div id={"home"} className='PageContainer introStyle min-h-screen pt-16 text-white font-rubik mt-16 md:mt-0 px-16 ml-auto mr-auto'>
          <div className='block md:flex justify-around items-center h-screen'>  
            {/* container info */}
            <div className='w-full md:w-1/2'>
              <div className='openingText text-5xl'>
                <div className=''>Hello there!</div>
                <span>I am </span><span className='text-[#ff004f]'>Dima Varo,</span>
              </div>
              <div className='mt-2'>
                <p className='text-gray-500 font-medium text-2xl'>I am a fullstack developer and this is my portfolio.
                                                                  Feel free to explore my projects and contact me for more information and details.
                                                                  Thank you for visiting!</p>
              </div>
            </div>
            <div className='imgContainer w-full md:w-1/2'>
              <div className='w-100 h-auto'><img src={IMAGES.coder}></img></div>
            </div>
          </div>
        </div>
    )
}