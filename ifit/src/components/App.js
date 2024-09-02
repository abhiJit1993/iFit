import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MainBody from './MainBody';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <MainBody />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
