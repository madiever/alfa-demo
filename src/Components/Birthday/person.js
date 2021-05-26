import React from 'react';
import bubbles from '../../assets/images/bubbles.png';
import defaultAvatar from '../../assets/images/defaultAvatar.svg';

export const Person = ({people}) => {
    return (
        <>
            {people.map((person) => {
                const {id, name, department, image, date} = person;
                const currentDate = new Date();
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
        </>
    );
}
;
