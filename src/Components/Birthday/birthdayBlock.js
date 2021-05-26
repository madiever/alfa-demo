import React, {useState} from 'react';
import {EmployeeData} from '../dataList';
import {Person} from "./person";
import './index.css';
import Heading from "arui-feather/heading";

export const BirthdayBlock = () => {
    const [people] = useState(EmployeeData);
    return (
        <div className='birthdayBlock'>
            <Heading size='m'>Дни рождения сотрудников</Heading>
                <Person people={people}/>
        </div>
    );
}
