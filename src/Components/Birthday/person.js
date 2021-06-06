import React, {Component, useEffect, useState} from 'react';
import bubbles from '../../assets/images/bubbles.png';
import notBirthday from '../../assets/images/notBirthday.png';
import defaultAvatar from '../../assets/images/defaultAvatar.svg';
import {formatDate, dateOfBirth, yesterday, tomorrow} from "../utils/utils";
import {EmployeeData, solidGray, alfaBlue} from "../dataList";
import leftArrow from '../../assets/images/leftArrow.png';
import rightArrow from '../../assets/images/rightArrow.png';

export default function Person() {
    const people = EmployeeData;
    const today = new Date();
    const birthdays = people.filter(person => person.date === formatDate(today));
    const yBirthdays = people.filter(person => person.date === yesterday());
    const tBirthdays = people.filter(person => person.date === tomorrow());
    const arrOfBirthday = birthdays.concat(yBirthdays, tBirthdays);
    let chunk = require('lodash.chunk');
    const [page, setPage] = useState(0);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(arrOfBirthday.slice(page * 6, page * 6 + 6));
    }, [page]);

    const back = () => setPage((p) => p - 1);
    const next = () => setPage((p) => p + 1);
    const lastPage = arrOfBirthday.length / 6 - 1;
    if (arrOfBirthday.length > 0) {
        let chunkedArray = chunk(arrOfBirthday, 6);
        return (
            <div className='carousel'>
                <img onClick={back} disabled={page === 0} src={leftArrow} className='button'/>
                <div className='arrayOfPerson'>
                    {list.map(arr => {
                            const {id, name, department, image, phoneNumber, date} = arr;
                            return (
                                <div key={id} className='person'>
                                    <img src={image ? image : defaultAvatar} alt={name}
                                         className='avatar'/>
                                    <div>
                                        <h4>{name}</h4>
                                        <p style={{fontSize: 14, color: solidGray}} className='department'
                                           title={department}>{department}</p>
                                        <p style={{fontSize: 14, color: solidGray}}>{dateOfBirth(date)}</p>
                                        <p style={{fontSize: 14, color: alfaBlue}}>{phoneNumber}</p>
                                    </div>
                                    <img src={bubbles} className='bubbles' alt='шарики'/>
                                </div>
                            )
                        }
                    )}
                </div>
                <img onClick={next} disabled={page === lastPage} className='button' src={rightArrow}/>
            </div>
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
;