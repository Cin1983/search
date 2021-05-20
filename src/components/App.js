import React from "react";
import unsplash from "../api/Unsplash";
import Searchbar from "./Searchbar";
import ImageList from "../components/ImageList";



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
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
