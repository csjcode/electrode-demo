import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {toggleCheck, incNumber, decNumber, incNumberFive, decNumberFive, clearCheck} from "../actions";


export const imageUrls = [
  'http://daynin.github.io/clojurescript-presentation/img/react-logo.png',
  'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png',
  'http://freevector.co/wp-content/uploads/2014/04/webpack.png',
  'https://raw.github.com/hapijs/hapi/master/images/hapi.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emoji_u26a1.svg/2000px-Emoji_u26a1.svg.png'
];

export const dataList = [
  'http://daynin.github.io/clojurescript-presentation/img/react-logo.png',
  'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png',
  'http://freevector.co/wp-content/uploads/2014/04/webpack.png',
  'https://raw.github.com/hapijs/hapi/master/images/hapi.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emoji_u26a1.svg/2000px-Emoji_u26a1.svg.png'
];


class Home extends React.Component {
  renderImage(imageUrl, key) {
    return (
        <img key={key} src={imageUrl} width="10%" height="10%"/>
    );
  }
  renderDataList(dataItem, key) {
    return (
        <li key={key}>{dataItem}</li>
    );
  }

  render() {
    const props = this.props;
    const {checked, value, checkedClear} = props;
    return (
      <div style={{width:600}}>
        {/**/}

        {/*
        <h1>Hello <a href={"https://github.com/electrode-io"}>{"Electrode"}</a> - This is test. Another test.</h1>
        <h2>Managing States with Redux</h2>
        <label>
          <input onChange={props.onChangeCheck} type={"checkbox"} checked={checked}/>
          Checkbox
        </label>
        */}
          <div>
            <h1>&nbsp;{value}&nbsp;</h1>
          </div>
        <div>
          <div style={{float:'left'}}>
            <button type={"button"} onClick={props.onDecrease}>-</button>
            <button type={"button"} onClick={props.onIncrease}>+</button>
            <button type={"button"} onClick={props.onDecreaseFive}>-5</button>
            <button type={"button"} onClick={props.onIncreaseFive}>+5</button>
            <button type={"button"} onClick={props.onClearCheck}>CLEAR</button>
          </div>

        </div>

        <div className="images">
          {imageUrls.map((imageUrl, index) => this.renderImage(imageUrl, index))}
        </div>
        <div className="data">
          <ul>
            {dataList.map((dataList, index) => this.renderDataList(dataList, index))}
          </ul>
        </div>
        <div>
          <input type="{text}" size={50}/>
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
