import React from 'react';
import bubbles from'../../assets/images/bubbles.png';

export const Person = ({people}) => {

    function formatDate(date) {

        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        return dd + '.' + mm;
    }

    return (
        <>
            {people.map((person) => {
                const {id, name, department, image, date} = person;
                const currentDate = new Date();
                if (date === formatDate(currentDate)) {
                    return (
                        <article key={id} className='person'>
                            <img src={image} alt={name} className='avatar'/>
                            <div>
                                <h4>{name}</h4>
                                <p style={{fontSize: 14}}>{department}</p>
                            </div>
                        </article>
                    );
                }
            })}
        </>
    );
};
