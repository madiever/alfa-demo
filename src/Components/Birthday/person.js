import React, {Component, useState} from 'react';
import bubbles from '../../assets/images/bubbles.png';
import notBirthday from '../../assets/images/notBirthday.png';
import defaultAvatar from '../../assets/images/defaultAvatar.svg';
import {formatDate} from "../utils/utils";
import {EmployeeData} from "../dataList";
import {Carousel, CarouselItem} from "react-bootstrap";

export default class Person extends Component {
    render() {
        const people = EmployeeData;
        const currentDate = new Date();
        const birthdays = people.filter(currentPeople => currentPeople.date === formatDate(currentDate));
        let chunk = require('lodash.chunk');
        if (birthdays.length > 0) {
            let chunkedArray = chunk(birthdays, 6);
            console.log(chunkedArray, birthdays);
            return (
                <Carousel>
                    {chunkedArray.map(arr => {
                        return (
                            <CarouselItem>
                                <div>
                                    {arr.map(person => {
                                        const {id, name, department, image} = person;
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
                                    })}
                                </div>
                            </CarouselItem>
                        )
                    })}
                </Carousel>
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
};