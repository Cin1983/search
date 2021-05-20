import React from "react";
import './Searchbar.css';

class Searchbar extends React.Component {
    state = { term: "" };
    
    onFormSubmit=  (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.term)
    }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="ui category search" style={{ marginTop: '15px '}} >
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Search..."
            />

            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
      </form>
    );
  }
}

export default Searchbar;
