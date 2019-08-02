import React from 'react';

const Event = ({ event }) => {
  let { text } = event.description;
  if (text && text.length > 250) {
    text = `${text.substr(0, 250)}...`;
  }
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          {event.logo ? <img src={event.logo.url} alt={event.name} /> : null}
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{event.name.text}</h3>
          {text}
        </div>
        <div className="uk-card-footer">
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="uk-button uk-button-secondary"
          >
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Event;
