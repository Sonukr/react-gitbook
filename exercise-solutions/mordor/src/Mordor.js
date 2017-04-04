import React, { Component } from 'react';
// import Sauron from './eye.png';
// import './Mordor.css';

class Mordor extends Component {
  render() {
    return (
      <section id="mordor">
        <article id="mt-doom">
          Ring destroyed: {this.props.doesFrodoHaveTheOneRing}!
        </article>
      </section>
    );
  }
}

export default Mordor;