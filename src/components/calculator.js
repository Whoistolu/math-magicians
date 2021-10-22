import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  whenClicked = (e) => {
    const buttonName = e.target.textContent;
    const newObj = calculate(this.state, buttonName);
    this.setState(newObj);
  };

  render() {
    const { next, total, operation } = this.state;
    let result = '';
    if (total) {
      result = `${total} ${operation || ''} ${next || ''}`;
    } else if (next) {
      result = next;
    }
    return (
      <div className="container">
        <div className="cScreen">
          {result}
        </div>
        <div className="buttons">
          <button onClick={this.whenClicked} type="button">AC</button>
          <button onClick={this.whenClicked} type="button">+/-</button>
          <button onClick={this.whenClicked} type="button">%</button>
          <button onClick={this.whenClicked} className="orange-button" type="button">&divide;</button>
          <button onClick={this.whenClicked} type="button">7</button>
          <button onClick={this.whenClicked} type="button">8</button>
          <button onClick={this.whenClicked} type="button">9</button>
          <button onClick={this.whenClicked} className="orange-button" type="button">&times;</button>
          <button onClick={this.whenClicked} type="button">4</button>
          <button onClick={this.whenClicked} type="button">5</button>
          <button onClick={this.whenClicked} type="button">6</button>
          <button onClick={this.whenClicked} className="orange-button" type="button">-</button>
          <button onClick={this.whenClicked} type="button">1</button>
          <button onClick={this.whenClicked} type="button">2</button>
          <button onClick={this.whenClicked} type="button">3</button>
          <button onClick={this.whenClicked} className="orange-button" type="button">+</button>
          <button onClick={this.whenClicked} className="double-space" type="button">0</button>
          <button onClick={this.whenClicked} type="button">.</button>
          <button onClick={this.whenClicked} className="orange-button" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
