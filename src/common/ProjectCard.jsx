const ProjectCard = ({src,link,h3,p,link1,h5}) => {
  return (
    <div>
       <a href={link} target='blank'>
        <img className='hover' src={src}  alt={`${h3} logo`}/>
        <h3>{h3}</h3>
        <p>{p}</p>
       <div className="mt-2">
          <a href={link1} target="blank">
          <button type="button" className="btn btn-secondary rounded fs-6">{h5}</button>

          </a>
       </div>
      
      
        </a>




    </div>
  )
}

export default ProjectCard