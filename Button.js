const React = require('react');

function Button() {
  return React.createElement('button', {
    onClick: () => {
      console.log('Button clicked');
    }
  }, 'Click me');
}

module.exports = Button;