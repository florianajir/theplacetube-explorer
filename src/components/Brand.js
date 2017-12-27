import React, {Component} from 'react';
import './Brand.css';

const STATUS = {
  HOVERED: 'font-effect-neon',
  NORMAL: 'font-effect-outline'
};

class Brand extends Component {
  constructor(props) {
    super(props);
    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this.state = {
      class: STATUS.NORMAL
    };
  }

  _onMouseEnter() {
    this.setState({class: STATUS.HOVERED});
  }

  _onMouseLeave() {
    this.setState({class: STATUS.NORMAL});
  }

  render() {
    const brandClass = 'Brand ' + this.state.class;
    return (
        <a href="/" className={brandClass} onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}>
          ThePlaceTube
        </a>
    );
  }
}

export default Brand;
