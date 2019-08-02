import React, { Component } from 'react';
import { CategoriesConsumer } from '../context/CategoriesContext';
import { EventsConsumer } from '../context/EventsContext';

class Form extends Component {
  state = { name: '', category: '' };

  onChangeHandler = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <EventsConsumer>
        {value => {
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                value.getEvents(this.state);
              }}
            >
              <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                  Browse by name or category
                </legend>
              </fieldset>
              <div className="uk-column-1-3@m uk-margin">
                <div className="uk-margin" uk-margin="true">
                  <input
                    name="name"
                    className="uk-input"
                    placeholder="Event name or city"
                    type="text"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="uk-margin" uk-margin="true">
                  <select
                    className="uk-select"
                    name="category"
                    onChange={this.onChangeHandler}
                  >
                    <option value="">Select Category</option>
                    <CategoriesConsumer>
                      {value => {
                        return value.categories.map(category => (
                          <option
                            key={category.id}
                            value={category.id}
                            data-uk-form-select
                          >
                            {category.name_localized}
                          </option>
                        ));
                      }}
                    </CategoriesConsumer>
                  </select>
                </div>
                <div className="uk-margin" uk-margin="true">
                  <input
                    type="submit"
                    className="uk-button uk-button-danger"
                    value="Search"
                  />
                </div>
              </div>
            </form>
          );
        }}
      </EventsConsumer>
    );
  }
}

export default Form;
