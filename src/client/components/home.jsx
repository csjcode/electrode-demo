import React, {PropTypes} from "react";
import {connect} from "react-redux";
/**/
import {toggleCheck, incNumber, decNumber, incNumberFive, decNumberFive, clearCheck} from "../actions";

class Home extends React.Component {
  render() {
    const props = this.props;
    const {checked, value, checkedClear} = props;
    return (
      <div>
        {/**/}
        <h1>Hello <a href={"https://github.com/electrode-io"}>{"Electrode"}</a> - This is test. Another test.</h1>
        <div>
          <h2>Managing States with Redux</h2>
          <label>
            <input onChange={props.onChangeCheck} type={"checkbox"} checked={checked}/>
            Checkbox
          </label>
          <div>
            <button type={"button"} onClick={props.onDecrease}>-</button>
            &nbsp;{value}&nbsp;
            <button type={"button"} onClick={props.onIncrease}>+</button>
          </div>
          <div>
            <button type={"button"} onClick={props.onDecreaseFive}>-5</button>
            &nbsp;{value}&nbsp;
            <button type={"button"} onClick={props.onIncreaseFive}>+5</button>
          </div>
          <div style={{padding:10}}>
            <input onChange={props.onClearCheck} type={"checkbox"} checked={checkedClear}/>
            Clear
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    checked: state.checkBox.checked, value: state.number.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCheck: () => {
      dispatch(toggleCheck());
    },
    onClearCheck: () => {
      dispatch(clearCheck());
    },
    onIncrease: () => {
      dispatch(incNumber());
    },
    onDecrease: () => {
      dispatch(decNumber());
    },
    onIncreaseFive: () => {
      dispatch(incNumberFive());
    },
    onDecreaseFive: () => {
      dispatch(decNumberFive());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
