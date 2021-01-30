import React from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class ColorPicker extends React.Component {
  constructor() {
    super();

    this.state = {
      dropDownValue: "Select a color",
    };
  }

  changeValue(text) {
    this.setState({ dropDownValue: text });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div>
          <DropdownButton
            id="dropdown-item-button"
            title={this.state.dropDownValue}
            className="format"
          >
            <Dropdown.Item as="button">
              <div onClick={(e) => this.changeValue(e.target.textContent)}>
                <span className="mint-green dot"></span> Mint Green
              </div>
            </Dropdown.Item>
            <Dropdown.Item as="button">
              <div onClick={(e) => this.changeValue(e.target.textContent)}>
                <span className="dark-gray dot"></span>Dark Gray
              </div>
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
