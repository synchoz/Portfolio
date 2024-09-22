import Icon from "../Icon/Icon";

export default function ProjectHolderCard({title = "Title", description = "random text...", usedTechnologies = [], cardImage, gitLink}) {
    return(
        <div className="p-4 font-rubik bg-[#262626] rounded-2xl card flex flex-col">
            <div className="REMOVE when insertingIMG flex justify-center card-content">
                <img src={cardImage} className="rounded-xl aspect-[1.5/1] object-[top_center] object-cover"></img>
            </div>
            <div className="descriptionContainer pt-5 card-content">
                <div className="flex justify-between">
                    <div className="text-white"><a href={gitLink} className='link title pb-1 cursor-pointer transition-[width 0.2s]'>{title}</a></div>
                    <div><a href={gitLink}><Icon name={'github'} className={'socialLink'} size={28}/></a></div>
                </div>
                <div className="text-gray-500 mb-2"><p>{description}</p></div>
            </div>
            <div className="iconsContainer grid grid-flow-col auto-cols-max gap-4 mt-auto">
                {usedTechnologies.map((technology, index) => {
                    return(
                        <Icon 
                            key={index}
                            name={technology} 
                            size={28} />
                    )
                })}
            </div>
            <div className="cardShine"></div>
        </div>
    )
}