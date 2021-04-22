import React from "react";
import '../../App.css';
import { SidebarData } from './sidebarData';
import logo from '../../logo.svg';

export default function Sidebar() {
    return (
        <div className='Sidebar'>
            <img src={logo} className='logo' onClick={() => window.location.pathname = '/homepage'}/>
            <ul className='SidebarList'>
                {SidebarData.map((val, key) => {
                    return (
                        <li
                        key={key}
                        className='row'
                        onClick={() => {
                            window.location.pathname = val.link;
                        }}
                        >
                            <div>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}