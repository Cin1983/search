import React from "react";
import unsplash from "../api/Unsplash";
import Searchbar from "./Searchbar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("search/photos", {
      params: { query: term },
    
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSearchSubmit} />
        Found:{this.state.images.length} images
      </div>
    );
  }
}

export default App;
