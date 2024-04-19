import React from 'react'
import {OptionImage, OptionListItem, GameOptionButton} from './styledComponents'


const GameOptions = props => {
  const {optionDetails, onClickSetUserChoice} = props
  const {image, id} = optionDetails
  const userChoice = () => {
    onClickSetUserChoice(id)
  }
  return (
    <OptionListItem>
      <GameOptionButton
        type="button"
        onClick={userChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <OptionImage src={image} alt={id} />
      </GameOptionButton>
    </OptionListItem>
  )
}

export default GameOptions
