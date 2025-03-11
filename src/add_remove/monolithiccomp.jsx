import * as React from "react";

const id = (function* () {
  let i = 1;
  while (true) {
    yield i++;
  }
})();

class MyMonoLithicComp extends React.Component {
  state = {
    articles: [
      {
        id: id.next().value,
        title: "Article 1",
        summary: "This is summary 1",
        show: false,
      },
      {
        id: id.next().value,
        title: "Article 2",
        summary: "This is summary 2",
        show: false,
      },
      {
        id: id.next().value,
        title: "Article 3",
        summary: "This is summary 3",
        show: false,
      },
    ],
    title: "",
    summary: "",
  };

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  onChangeSummary = (e) => {
    this.setState({ summary: e.target.value });
  };

  onClickAdd = () => {
    if (this.state.title.trim() && this.state.summary.trim()) {
      this.setState((state) => ({
        articles: [
          ...state.articles,
          {
            id: id.next().value,
            title: state.title,
            summary: state.summary,
            show: false,
          },
        ],
        title: "",
        summary: "",
      }));
    }
  };

  toggleSummary = (id) => {
    this.setState((state) => ({
      articles: state.articles.map((article) =>
        article.id === id ? { ...article, show: !article.show } : article
      ),
    }));
  };

  removeSummary = (id) => {
    this.setState((state) => ({
      articles: state.articles.filter((article) => article.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h2>Article Manager</h2>

        <div>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
          <input
            type="text"
            placeholder="Summary"
            value={this.state.summary}
            onChange={this.onChangeSummary}
          />
          <button onClick={this.onClickAdd}>Add</button>
        </div>

        <ul>
          {this.state.articles.map((article) => (
            <li key={article.id}>
              <div>
                <span
                  onClick={() => this.toggleSummary(article.id)}
                  style={{ cursor: "pointer" }}
                >
                  {article.title}
                </span>
                <button onClick={() => this.removeSummary(article.id)}>
                  Remove
                </button>
              </div>
              {article.show && <p>{article.summary}</p>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MyMonoLithicComp;
