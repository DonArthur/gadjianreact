import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import PersonnelList from './views/PersonnelList';

function App() {
  const apiUrl = "https://randomuser.me/api/?results=28";
  const [personnel, setPersonnel] = useState([])
  const [isSidebarToggled, setIsSidebarToggled] = useState(false)

  useEffect(() => {
      const loadData = () => {
        axios.get(apiUrl).then(res => {
          console.log(JSON.stringify(res.data.results));
          setPersonnel(res.data.results)
        });
      };
      loadData();
    }, []);

  const toggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled)
  }

  return (
    <div className="App">
      <NavBar toggleSidebar={toggleSidebar} />
      <div className="container-fluid">
        <div className="row">
          <SideBar sidebarToggled={isSidebarToggled} toggleSidebar={toggleSidebar} />
          <PersonnelList personnels={personnel} />
        </div>
      </div>
    </div>
  );
}

export default App;
