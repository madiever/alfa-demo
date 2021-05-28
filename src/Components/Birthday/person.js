import React, {useState} from 'react';
import bubbles from '../../assets/images/bubbles.png';
import notBirthday from '../../assets/images/notBirthday.png';
import defaultAvatar from '../../assets/images/defaultAvatar.svg';
import {formatDate} from "../utils/utils";
import {EmployeeData} from "../dataList";

export const Person = () => {
        const [people] = useState(EmployeeData);
        const currentDate = new Date();
        let date = people.map((arr) => arr.date);
        if (date.map(arr => arr === formatDate(currentDate))) {
            return (
                <>
                    {people.map((person) => {
                        const {id, name, department, image, date} = person;
                        if (date === formatDate(currentDate)) {
                            return (
                                <article key={id} className='person'>
                                    <img src={image ? image : defaultAvatar} alt={name} className='avatar'/>
                                    <div>
                                        <h4>{name}</h4>
                                        <p style={{fontSize: 14}}>{department}</p>
                                    </div>
                                    <img src={bubbles} className='bubbles'/>
                                </article>
                            );
                        }
                    })}
                </>
            );
        } else {
            return (
                <>
                    <article className='notBirthday'>
                        <img src={notBirthday}/>
                        <h2 className='text'>Сегодня день рождения никто не празднует!</h2>
                    </article>
                </>
            );
        }
    }
;