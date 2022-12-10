import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './styles.scss';

// class App extends React.Component {
//   render() {
//     return <div>My Christmas Wishlist</div>;
//   }
// }
// const rootElement = document.getElementById('app');
// const root = ReactDOM.createRoot(rootElement);
// root.render(<App />);

const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
