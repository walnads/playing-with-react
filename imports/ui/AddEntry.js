import React, { Component } from 'react';
import { Entries } from "../api/entries"

class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      date: "",
      author: ""
    }
  }

  handleChange = (event) => {
    const field = event.target.name;

    // we use square braces around the key `field` coz its a variable (we are setting state with a dynamic key name)
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, content, date, author } = this.state;

    // add method `insert` to db
    Entries.insert({
      title,
      content,
      date,
      author
    });

    // clears input fields onSubmit
    this.setState({
      title: "",
      content: "",
      date: "",
      author: ""
    })
  }

  render() {
    return (
      <div>
        <div className="text-center">
          <h4>Add journal entry</h4>
        </div>

        <div className="jumbotron" style={{ margin: "0 500px" }}>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Content:</label>
              <textarea
                type="text"
                className="form-control"
                name="content"
                rows="3"
                value={this.state.content}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Date:</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Author:</label>
              <input
                type="text"
                className="form-control"
                name="author"
                value={this.state.author}
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddEntry;