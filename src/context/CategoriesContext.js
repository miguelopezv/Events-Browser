import React, { Component } from 'react';
import axios from 'axios';

const CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component {
  state = {
    categories: []
  };
  apiKey = API_KEY;

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${
      this.apiKey
    }`;

    let response = await axios.get(url);
    const { categories } = response.data;

    this.setState({
      categories
    });
  };
  render() {
    return (
      <CategoriesContext.Provider value={{ categories: this.state.categories }}>
        {this.props.children}
      </CategoriesContext.Provider>
    );
  }
}

export default CategoriesProvider;
