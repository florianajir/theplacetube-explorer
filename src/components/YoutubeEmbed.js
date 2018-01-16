import React from 'react';
import './YoutubeEmbed.css';
import PropTypes from 'prop-types';

const YoutubeEmbed = ({id}) => {
  let uri = 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0&autoplay=1&origin=https://www.theplacetube.com';
  return (
      <div className="YoutubeEmbed">
        <iframe
            type="text/html"
            frameBorder="0"
            allowFullScreen
            className="embed-responsive-item"
            src={uri}
        />
      </div>
  );
};

YoutubeEmbed.propTypes = {
  id: PropTypes.string.isRequired
};

export default YoutubeEmbed;
