import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {text: ''}

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault;
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId});
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.text} onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
