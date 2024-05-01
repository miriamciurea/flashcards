// Import any CSS or SCSS files

// import '../stylesheets/application.scss';

// Import any JavaScript modules or libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import your React components
import HelloWorld from '../components/HelloWorld';

// Mount your React components to DOM elements
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HelloWorld />,
    document.getElementById('react-root')
  );
});
