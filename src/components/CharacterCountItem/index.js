import {InputValuePara, Li} from './styledComponents'

const CharacterCountItem = props => {
  const {charDetails} = props
  const {value} = charDetails
  const count = value.length
  return (
    <Li>
      <InputValuePara>
        {value}: {count}
      </InputValuePara>
    </Li>
  )
}

export default CharacterCountItem
