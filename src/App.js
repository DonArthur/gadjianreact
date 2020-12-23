import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import PersonnelList from './views/PersonnelList';

function App() {
  const apiUrl = "https://randomuser.me/api/?results=28";

  const loadData = () => {
    axios.get(apiUrl).then(res => {
      console.log(res.data.results);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <PersonnelList />
        </div>
      </div>
    </div>
  );
}

export default App;
