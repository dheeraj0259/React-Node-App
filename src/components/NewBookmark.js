import React from 'react';

class NewBookmark extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      url: ''
    }
  }

  handleInputChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.title.trim() && this.state.url.trim()) {
      this.props.onAddBookmark(this.state);
      this.handleReset();
    }
  };

  handleReset () {
    this.setState({
      title: '',
      url: ''
    });
  };

  render() {
    return (
      <form onSubmit={(e) => {
        this.handleSubmit(e)
      }}>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={(e) => {this.handleInputChange(e)}}
          value={this.state.title}
        />
        <input
          type="text"
          placeholder="URL"
          name="url"
          onChange={(e) => {this.handleInputChange(e)}}
          value={this.state.url}
        />
        <hr />
        <button type="submit">Add bookmark</button>
        <button type="button" onClick={(e) => {this.handleReset(e)}}>
          Reset
        </button>
      </form>
    );
  }
}

export default NewBookmark;