import {Component} from 'react'
import {AiOutlineUnderline} from 'react-icons/ai'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {TextArea, IconsButton} from '../StyledComponent'
import './index.css'

// Replace your code here
class TextEditor extends Component {
  state = {isbold: false, isItalic: false, isUnderline: false}

  updateBold = () => {
    this.setState(prev => ({isbold: !prev.isbold}))
  }

  updateItalic = () => {
    this.setState(prev => ({isItalic: !prev.isItalic}))
  }

  updateUnderline = () => {
    this.setState(prev => ({isUnderline: !prev.isUnderline}))
  }

  render() {
    const {isbold, isItalic, isUnderline} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="side-container">
            <h1 className="main-heading">Text Editor</h1>
            <img
              className="text-img"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="text-container">
            <ul className="button-container">
              <li>
                <IconsButton
                  active={isbold}
                  data-testid="underline"
                  onClick={this.updateUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </IconsButton>
              </li>
              <li>
                <IconsButton
                  data-testid="bold"
                  active={isItalic}
                  onClick={this.updateBold}
                >
                  <VscBold size={25} />
                </IconsButton>
              </li>
              <li>
                <IconsButton
                  data-testid="italic"
                  active={isUnderline}
                  onClick={this.updateItalic}
                >
                  <GoItalic size={25} />
                </IconsButton>
              </li>
            </ul>
            <TextArea
              bold={isbold}
              italic={isItalic}
              underline={isUnderline}
              rows={35}
              cols={45}
            ></TextArea>
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
