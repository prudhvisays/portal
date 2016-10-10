import React from "react";


class BlurInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false,
      value: 0
    }
    this.focusField = this.focusField.bind(this)
    this.blurField = this.blurField.bind(this)
  }
  componentDidMount() {}
  focusField() {
    const { focused } = this.state
    if (!focused) {
      this.setState({focused: !focused})
    }
  }
  blurField() {
    const { focused } = this.state
    if (focused) {
      this.setState({focused: !focused})
    }
  }

  render() {
    const { type, label, id, style } = this.props;
    const { focused, value } = this.state;

    let inputClass = 'blur-input';

    if (focused) {
      inputClass += ' blur-input--focus'
    }

    if (!focused && (this.props.namevalue.lenght > 0)) {
      inputClass += ' blur-input--open'
    }

    return (
      <div className={inputClass} style={style}>
        <div className="blur-input__bg">{label}</div>
        <div className="blur-input__holder">

          <input
            className="blur-input__input"
            ref="blurField"
            type={type}
            id={id}
            onFocus={this.focusField.bind(this)}
            onBlur={this.blurField.bind(this)}
            onChange={this.changeField.bind(this)} autocomplete="off"/>

          <label className="blur-input__label" htmlFor={id}>{label}</label>
        </div>
      </div>
    )
  }
}

export default blurInput;
