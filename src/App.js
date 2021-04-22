import './App.css';
import Sidebar from "./Components/Sidebar/sidebar";
import ProfileHeader from "./Components/ProfileHeader/profileHeader";
import React from "react";
import {EmployeeData} from "./Components/EmployeeData/employeeData";
import {ProjectData} from "./Components/ProjectData/projectData";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <main>
                <div className="container">
                    <ProfileHeader/>
                    <hr className='line' />
                    <EmployeeData />
                    <ProjectData />
                </div>
            </main>
        </div>
    );
}

export default App;
