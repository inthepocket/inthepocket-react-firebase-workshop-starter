import React from 'react';

const SafeEmoji = ({ emoji, label }) => (
  <span role="img" aria-label={label}>
    {emoji}
  </span>
);

SafeEmoji.defaultProps = {
  label: 'aria-emoji-label',
};

export default SafeEmoji;
