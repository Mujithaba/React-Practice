import { Component } from "react";

export default class ClassBasedComponent extends Component {
  //state
  state = {
    showText: false,
    changeColor: false,
  };

  handleClick = () => {
    const { showText , changeColor} = this.state;

    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };


  componentDidMount(){
    this.setState({

        showText:!this.state.showText,
        changeColor:!this.state.changeColor
    })
  }

  render() {
    const { showText, changeColor } = this.state;

    return (
      <div>
        {showText ? (
          <h1 style={{ color: changeColor ? "red" : "black" }}>
            Class Based Components
          </h1>
        ) : null}

        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
