import React, { Component } from 'react';
import axios from 'axios';

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {
  state = { events: [] };
  apiKey = 'WSBID26I2BP5EGB7SZSS';
  order = 'date';

  getEvents = async params => {
    const url = `https://www.eventbriteapi.com/v3/events/search/?q=${
      params.name
    }
    &categories=${params.category}&sort_by=${this.order}&token=${this.apiKey}`;

    const response = await axios.get(url);
    const { events } = response.data;

    this.setState({ events });
  };

  render() {
    return (
      <EventsContext.Provider
        value={{ events: this.state.events, getEvents: this.getEvents }}
      >
        {this.props.children}
      </EventsContext.Provider>
    );
  }
}

export default EventsProvider;
