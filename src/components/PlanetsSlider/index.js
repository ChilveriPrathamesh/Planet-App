// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import {AppContainer, Heading} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <AppContainer data-testid="planets">
      <Heading className="heading">PLANETS</Heading>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </AppContainer>
  )
}

export default PlanetsSlider
