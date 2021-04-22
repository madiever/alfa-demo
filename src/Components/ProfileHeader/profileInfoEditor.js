import React, {Component, useState} from "react";
import Input from 'arui-feather/input';
import Button from 'arui-feather/button';

export const ProfileInfoEditor = () => {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        return (
            <div>
                <Input className='input' value='Имя'/>
                <Input className='input' value='Фамиля' />
                <Input className='input' value='Отчество' />
                <Button>Применить</Button>
            </div>
        )
}