import React from 'react';

class MyComponent extends React.Component {
  componentDidMount() {
    const apiUrl = '/api/clients/22';
    fetch(apiUrl,{ method: 'GET', headers: { 'Content-Type': 'application/json'}})
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  };
  render() {
    return (
    <div>
      <h1>Check the browser 'console' </h1>
    </div>
    );
  };
};

export default MyComponent;