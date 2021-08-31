import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editingBookmarkIndex: null,
      bookmarks: []
    };

    this.getBookmarks();
  }

  getBookmarks = () => {
    const userId = 1;
    const endPoint = `https://rotimi-best-cargo-transportation-api.glitch.me/bookmark/${userId}`;
    const getRequestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(endPoint, getRequestOptions)
        .then(async response => {
            const data = await response.json();
            // console.log('# data > ', data);
            // console.log('# data.bookmarks > ', data.bookmarks);

            this.setState({ bookmarks: data.bookmarks })
            console.log('# this.state.bookmarks : ', this.state.bookmarks);
        });
  };

  postNewBookmarks = (newBookmark) => {
    const userId = 1;
    const endPoint = `https://rotimi-best-cargo-transportation-api.glitch.me/bookmark/${userId}`;
    const postRequestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBookmark)
    };

    console.log('# endPoint > ', endPoint);
    console.log('# postRequestOptions > ', postRequestOptions);
    fetch(endPoint, postRequestOptions)
        .then(async response => {
            const data = await response.json();
            console.log('# data : ', data);
            this.getBookmarks();
        });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const siteTitle = document.getElementById("siteTitle").value;
    const siteUrl = document.getElementById("siteUrl").value;
    console.log('# siteTitle : ', siteTitle);
    console.log('# siteUrl : ', siteUrl);
    let newBookmark = {
      title: siteTitle,
      url: siteUrl
    };

    console.log('# newBookmarks : ' + newBookmark);
    console.log('# JSON.stringify(newBookmark) : ' + JSON.stringify(newBookmark));

    this.postNewBookmarks(newBookmark);

    e.target.reset();
  };

  handleDelete = (index) => {
  };

  handleEdit = (index) => {
  };

  render() {
    console.log(this.state);
    return (
      <div class="container">
        <div class="header clearfix">
          <h3 class="text-muted">My Bookmarker</h3>
        </div>

        <div class="jumbotron">
          <h2>Bookmark your favorite Sites</h2>

          <form id="myForm" onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="">Site Title</label>
              <input
                type="text"
                class="form-control"
                id="siteTitle"
                placeholder="Website Name"
                required
              />
            </div>

            <div class="form-group">
              <label for="">Site URL</label>
              <input
                type="text"
                class="form-control"
                id="siteUrl"
                placeholder="Website URL"
                required
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <div class="row marketing">
          <div class="col-lg-12">
            <div id="bookmarksResult">
              {this.state.bookmarks.map((bookmark, index) => (
                <div class="well">
                  <h3>
                    {bookmark.title}
                    <a
                      class="btn btn-default"
                      target="_blank"
                      href={bookmark.url}
                    >
                      Visit
                    </a>
                    <button
                      onClick={() => this.handleEdit(index)}
                      class="btn btn-primary m-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => this.handleDelete(index)}
                      class="btn btn-danger"
                    >
                      Delete
                    </button>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
