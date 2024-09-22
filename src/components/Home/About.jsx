import Icon from "../Icon/Icon";
import IMAGES from "../../Images/Images";

const skills = [
    {
      name: 'html',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'css',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      name: 'javascript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'jquery',
      link: 'https://jquery.com/',
    },
    {
      name: 'react',
      link: 'https://reactjs.org/',
    },
    {
      name: 'nodejs',
      link: 'https://nodejs.org/',
    },
    {
      name: 'postman',
      link: 'https://www.postman.com/',
    },
    {
      name: 'csharp',
      link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    },
    {
      name: 'sqlserver',
      link: 'https://www.w3schools.com/sql/',
    },
    {
      name: 'github',
      link: 'https://github.com/',
    },
];

export default function About({Id}) {
    return (
        <div id={Id} className='PageContainer text-white py-16 px-16 ml-auto mr-auto'>
          <div className='block md:flex'>
            <div className='w-full md:w-1/3 flex justify-center items-center'>
              <div className=' w-48 h-48'><img className="items-center h-full rounded-full bg-cover bg-center rounded-full " src={IMAGES.me}></img></div>
            </div>
            <div className='aboutMeInfo w-full md:w-2/3  md:text-left text-center'>
              <div className='title text-7xl mb-7'>
                About <span className='text-[#ff004f]'>Me</span>
              </div>
              <div className='mt-2'>
                <p className='text-gray-500 font-medium text-2xl'><span className='text-[#ff004f]'>My </span>Background, As a dedicated fullstack developer, my expertise lies in <span className='text-[#ff004f]'>HTML</span>, <span className='text-[#ff004f]'>CSS</span>, <span className='text-[#ff004f]'>JavaScript</span> and <span className='text-[#ff004f]'>NodeJS</span>.
Currently, I am deeply engaged with <span className='text-[#ff004f]'>React</span> and <span className='text-[#ff004f]'>Vite</span>, pushing the boundaries of what can be achieved.
I maintain a perpetual commitment to honing my skills and keeping pace with the ever-evolving landscape of industry trends.</p>
              </div>
            </div>
          </div>

          <div className='skillsContainer text-white mt-10'>
            <div className='mb-10 text-6xl text-center'>Skills</div>
            <div className='flex flex-wrap justify-center'>
              {
                skills.map((skill, index)=> { 
                  return (
                  <Icon 
                    key={index}
                    name={skill.name}
                    link={skill.link}
                    size={60}
                    className={"m-4 cursor-pointer hover:translate-y-[-15px] hover:duration-700 hover:ease-out transition ease-out"}
                  />
                )
                })
              }
           </div>
          </div>
        </div>
    )
}