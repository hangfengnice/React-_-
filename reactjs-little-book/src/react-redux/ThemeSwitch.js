import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "./react-redux";

class ThemeSwitch extends Component {
  static propTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func,
  };
  render() {
    const { themeColor } = this.props;
    return (
      <div>
        <button
          onClick={this.handleSwitchColor.bind(this, "red")}
          style={{ color: themeColor }}
        >
          Red
        </button>
        <button
          onClick={this.handleSwitchColor.bind(this, "blue")}
          style={{ color: themeColor }}
        >
          Blue
        </button>
      </div>
    );
  }

  handleSwitchColor(color) {
    let {onSwitchColor} = this.props;
    if (onSwitchColor) {
      onSwitchColor(color);
    }
  }
}
const mapStateToProps = ({ themeColor }) => ({ themeColor });

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: "CHANGE_COLOR", themeColor: color });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
