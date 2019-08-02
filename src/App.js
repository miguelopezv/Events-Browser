import React from 'react';
import { Header, Form, EventsList } from './components';
import CategoriesProvider from './context/CategoriesContext';
import EventsProvider from './context/EventsContext';

function App() {
  return (
    <EventsProvider>
      <CategoriesProvider>
        <Header />
        <div className="uk-container">
          <Form />
          <EventsList />
        </div>
      </CategoriesProvider>
    </EventsProvider>
  );
}

export default App;
