import React, { Component } from 'react';

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
