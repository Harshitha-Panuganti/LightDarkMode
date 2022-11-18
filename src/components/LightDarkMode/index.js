import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {dark: true}

  onDark = () => {
    this.setState(prevSate => ({dark: !prevSate.dark}))
  }

  render() {
    const {dark} = this.state
    const modelClassName = dark ? 'dark-mode' : 'light-mode'
    const buttonText = dark ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="lightdark-container">
        <div className={`light-container ${modelClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onDark} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
