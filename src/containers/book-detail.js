import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    return this.props.book && (
      <div>
        <h3>Details for: </h3>
        <p>{ this.props.book.title }</p>
        <p>Pages: { this.props.book.pages}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
