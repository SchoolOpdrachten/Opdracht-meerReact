import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <a id='naarBoeken' href='/boek'>klik hier om te boeken</a>
    );
  }
}
