import React, {Component} from 'react';
import AddBookmark from './AddBookmark';
import BookmarksList from './BookmarksList';

export class HelloWorld extends Component {
  render() {
    return (
      <div className="hello-world">
        <h1>Hey! This is the first step in the trail</h1>
        <AddBookmark />
        <BookmarksList />
      </div>
    )
  }
}

export default HelloWorld
