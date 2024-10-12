const React = require('react');
const ReactDOM = require('react-dom/client');
const Button = require('./Button');

const root = document.getElementById('root');

if (root) {
  ReactDOM.hydrateRoot(root, React.createElement(Button));
}