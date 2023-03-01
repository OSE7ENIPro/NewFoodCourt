import './App.css';
import List from './Component/Hero/List';
import Navbar from './Component/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from './Component/Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <List/>
    </Provider>
  );
}

export default App;
