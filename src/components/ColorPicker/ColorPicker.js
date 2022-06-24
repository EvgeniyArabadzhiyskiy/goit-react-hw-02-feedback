import { Component } from 'react';
// import './ColorPicker.css';
import classNames from 'classnames';
import { Button } from './ColorPicker.styled';

class ColorPicker extends Component {

    state = {
        activOptionsInx: 0,
    }

    changeActivInx = (index) => {
        this.setState({activOptionsInx: index})
    };

    makeClassNeme = (index) => {
        return classNames("ColorPicker",
         {"ColorPicker__activ": (index === this.state.activOptionsInx)})

        // const colorClassName = ["ColorPicker"]

        // if (index === this.state.activOptionsInx) {
        //     colorClassName.push("ColorPicker__activ")
        // }

         
        // return colorClassName.join(' ')
    }

  render() {
    return (
      <ul>
        {this.props.options.map(({ label, color },index) => {
          return (
            <Button
              // className="ColorPicker"
              type="button"
              key={label}
              style={{backgroundColor: color,}}
              onClick={() => {
                this.changeActivInx(index)
              }}
            ></Button>
          );
        })}
      </ul>
    );
  }
}

export default ColorPicker;
