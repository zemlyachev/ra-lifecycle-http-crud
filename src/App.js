import React, { Component } from "react";
import "./App.css";
import Notes from "./components/Notes";
import NewNote from "./components/NewNote";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      isLoading: false,
      isError: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    this.setState({
      isLoading: true,
    });
    fetch(process.env.REACT_APP_NOTES_URL)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          notes: result,
          isLoading: false,
          isError: false,
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  postData = (note) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: note.id, content: note.content }),
    };
    fetch(process.env.REACT_APP_NOTES_URL, requestOptions).then(() =>
      this.loadData()
    );
  };

  deleteData = (id) => {
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`${process.env.REACT_APP_NOTES_URL}/${id}`, requestOptions).then(() =>
      this.loadData()
    );
  };

  render() {
    return (
      <div className="container">
        <header>
          <nav className="navbar navbar-light justify-content-start bg-light">
            <span className="navbar-brand mb-0 h1">Notes</span>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={this.loadData}
            >
              <span class="material-icons">sync</span>
            </button>
            <div className="mx-3">{this.state.isLoading && <progress />}</div>
            <div className="mx-3 text-danger">
              {this.state.isError && "Loading error"}
            </div>
          </nav>
        </header>

        <Notes notes={this.state.notes} remove={this.deleteData} />
        <NewNote createNote={this.postData} />
      </div>
    );
  }
}
