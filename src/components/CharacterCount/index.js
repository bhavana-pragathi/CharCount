import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharacterCountItem from '../CharacterCountItem'
import {
  MainDiv,
  FirstDiv,
  FirstDivHead,
  SecondDiv,
  SecondDivHead,
  InputDiv,
  Input,
  AddButton,
  HeadDiv1,
  BottomDiv,
  Ul,
  NoInputsImage,
} from './styledComponents'

class CharacterCount extends Component {
  state = {inputValue: '', countData: []}

  onChangeText = event => {
    this.setState({inputValue: event.target.value})
  }

  onSubmitForm = event => {
    const {inputValue} = this.state
    event.preventDefault()
    const addedItems = {
      id: uuidv4(),
      value: inputValue,
    }
    this.setState(prevState => ({
      countData: [...prevState.countData, addedItems],
      inputValue: '',
    }))
  }

  renderNoInputs = () => (
    <BottomDiv>
      <NoInputsImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </BottomDiv>
  )

  render() {
    const {inputValue, countData} = this.state
    return (
      <MainDiv>
        <FirstDiv>
          <HeadDiv1>
            <FirstDivHead>Count the characters like a Boss...</FirstDivHead>
          </HeadDiv1>
          <BottomDiv>
            {countData.length === 0 ? (
              this.renderNoInputs()
            ) : (
              <Ul>
                {countData.map(eachItem => (
                  <CharacterCountItem
                    key={eachItem.id}
                    charDetails={eachItem}
                  />
                ))}
              </Ul>
            )}
          </BottomDiv>
        </FirstDiv>
        <SecondDiv>
          <SecondDivHead>Character Counter</SecondDivHead>
          <InputDiv onSubmit={this.onSubmitForm}>
            <Input
              type="text"
              value={inputValue}
              onChange={this.onChangeText}
              placeholder="Enter the Characters here"
            />
            <AddButton type="submit">Add</AddButton>
          </InputDiv>
        </SecondDiv>
      </MainDiv>
    )
  }
}

export default CharacterCount
