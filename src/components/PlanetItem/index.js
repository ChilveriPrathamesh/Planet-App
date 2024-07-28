import {
  PlanetItemContainer,
  Image,
  PlanetHeading,
  PlanetDescription,
} from './styledComponents'


const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <PlanetItemContainer>
      <Image src={imageUrl} alt={`planet ${name}`} />
      <PlanetHeading className="name">{name}</PlanetHeading>
      <PlanetDescription className="description">
        {description}
      </PlanetDescription>
    </PlanetItemContainer>
  )
}

export default PlanetItem
