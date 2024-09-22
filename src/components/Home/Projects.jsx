import ProjectHolderCard from "../ProjectHolderCard/ProjectHolderCard";
import IMAGES from "../../Images/Images";

const projects = [{
    title: 'FitnessWeb',
    description: 'A dynamic fitness dashboard built with React.js, allowing users to track their fitness progress, log weight, monitor calorie intake, and visualize their data with an easy-to-use interface.',
    imagesource: IMAGES.fitweb,
    gitlink: 'https://github.com/synchoz/FitWebApp',
    technologies: ['javascript','react','nodejs','tailwind','mysql']
  },
  {
    title: 'TicTacToe',
    description: 'A real-time, two-player TicTacToe game built with Socket.io for seamless connectivity.',
    imagesource: IMAGES.tictactoe,
    gitlink: 'https://github.com/synchoz/TicTacToe',
    technologies: ['javascript','nodejs','socketio']
  },
  {
    title: 'StarbucksLocator',
    description: 'Web app that helps users find nearby Starbucks stores easily on an interactive map, providing a convenient way to locate stores at any time.',
    imagesource: IMAGES.starbuckslocator,
    gitlink: 'https://github.com/synchoz/StarbucksLocator',
    technologies: ['react','vite','nodejs','docker']
  },
]

export default function Projects({Id}) {
    return (
        <div id={Id} className='PageContainer text-white py-16 min-h-screen px-16 ml-auto mr-auto'>
          <div className='projectsContainer'>
            <div className='title text-7xl text-center mb-20'>
              <span className='text-[#ff004f]'>My</span> Projects
            </div>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
              {projects.map((project, index) => {
                return (
                  <ProjectHolderCard 
                    key={index}
                    title={project.title}
                    description={project.description}
                    usedTechnologies={project.technologies}
                    gitLink={project.gitlink}
                    cardImage={project.imagesource}
                  />
                )
              })}
            </div>
            {/* If Time Permits make a carousel if not just a show/hide Button for more projects..*/}
            {/* Components */}
            {/* Carousel + Map of Component Projects*/}
          </div>
        </div>
    )
}