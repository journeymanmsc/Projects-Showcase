import {
  ProjectCardListItem,
  ProjectCardImage,
  ProjectCardName,
} from './styledComponent'

const ProjectLists = props => {
  const {projectCardDetails} = props
  const {name, imageUrl} = projectCardDetails

  return (
    <ProjectCardListItem>
      <ProjectCardImage src={imageUrl} alt={name} />
      <ProjectCardName>{name}</ProjectCardName>
    </ProjectCardListItem>
  )
}

export default ProjectLists
