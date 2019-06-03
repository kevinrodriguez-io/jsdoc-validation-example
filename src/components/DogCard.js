import React, { Component } from 'react'

/**
 * A dog card with it's data
 * @typedef DogCardProps
 * @property {string} name - Dog's name
 * @property {number} [age] - Dog's age
 * @extends {Component<DogCardProps>}
 */
export default class DogCard extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <div>
          <b>Name: </b><span>{name}</span>
        </div>
      </div>
    );
  }
}
