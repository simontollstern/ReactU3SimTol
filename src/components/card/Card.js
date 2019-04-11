import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Card.module.css';

// Wrapper for other components with (optional) info that can be toggled to be shown or hidden
class Card extends Component{
  constructor(props){
    super(props);
    this.state = { toggled: false }
  }

  // Toggles the info if present
  toggle = () => {
    this.setState({ toggled: !this.state.toggled });
  }

  render(){
    return(
      <div className={style.card}>
        <div>
        <div>
          {this.props.children}
        </div>
        </div>
        {this.props.info &&
          <div className={style.infoWrapper}>
            {this.state.toggled &&
              <p>{this.props.info}</p>
            }
            <div className={style.buttonWrapper}>
              <button onClick={this.toggle}>{this.state.toggled ? 'Hide info' : 'Show info'}</button>
            </div>
          </div>
        }
      </div>
    );
  }
}

Card.propTypes = {
  children: PropTypes.node,
  info: PropTypes.string
}

export default Card;
