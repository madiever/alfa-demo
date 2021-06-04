import React, {Component} from 'react';
import bubbles from '../../assets/images/bubbles.png';
import notBirthday from '../../assets/images/notBirthday.png';
import defaultAvatar from '../../assets/images/defaultAvatar.svg';
import {formatDate, dateOfBirth, yesterday, tomorrow} from "../utils/utils";
import {EmployeeData, solidGray, alfaBlue} from "../dataList";

export default class Person extends Component {
    render() {
        const people = EmployeeData;
        const today = new Date();
        const birthdays = people.filter(person => person.date === formatDate(today));
        const yBirthdays = people.filter(person => person.date === yesterday());
        const tBirthdays = people.filter(person => person.date === tomorrow());
        const arrOfBirthday = birthdays.concat(yBirthdays, tBirthdays);
        let chunk = require('lodash.chunk');
        if (arrOfBirthday.length > 0) {
            let chunkedArray = chunk(arrOfBirthday, 6);
            return (
                chunkedArray.map(arr => {
                    return (
                        arr.map(person => {
                            const {id, name, department, image, phoneNumber, date} = person;
                            return (
                                <div key={id} className='person'>
                                    <img src={image ? image : defaultAvatar} alt={name}
                                         className='avatar'/>
                                    <div className='aboutPerson'>
                                        <h4>{name}</h4>
                                        <p style={{fontSize: 14, color: solidGray}} className='department'
                                           title={department}>{department}</p>
                                        <p style={{fontSize: 14, color: solidGray}}>{dateOfBirth(date)}</p>
                                        <p style={{fontSize: 14, color: alfaBlue}}>{phoneNumber}</p>
                                    </div>
                                    <img src={bubbles} className='bubbles' alt='шарики'/>
                                </div>
                            );
                        })
                    )
                })
            );
        } else {
            return (
                <>
                    <article className='notBirthday'>
                        <img src={notBirthday} alt='нет др'/>
                        <h2 className='text'>Сегодня день рождения никто не празднует!</h2>
                    </article>
                </>
            );
        }
    }
};