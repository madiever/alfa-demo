import React from "react";
import Icon from 'arui-feather/icon/entity/person';
import bpm from '../../assets/images/tag-button.png';


export const FULL_NAME = 'Фамилия Имя Отчетство тестируемого';
export const POSITION = 'Управление разработки фронт-офисных систем / Главный программист';
export const PHONE_NUMBER = 'Тел: +7 (777) 777-77-77. Вн.: 1337';
export const STATUS = 'Статус';
export const BIRTHDATE = 'Дата рождения';
export const ADMISSION_DATE = 'Дата приема';
export const VACATION = 'Остаток дней отпуска';
export const SUPERVISOR = 'Непосредственный руководитель';
export const FUNC_SUPERVISOR = 'Функциональный руководитель';
export const AFFILATION = 'Принадлежность к команде agile/wf';

export const ProfileData = [
    {
        label: "Работает",
    },
    {
        label: "24.10.1997 г.",
    },
    {
        label: "23.10.2020 г.",
    },
    {
        label: "14 дней",
    },
    {
        label: "Фамилия Имя Отчество тестируемого",
        icon: <Icon name='person' size='s'/>
    },
    {
        label: "Фамилия Имя Отчество тестируемого",
        icon: <Icon name='person' size='s'/>
    },
    {
        label: "",
        icon: <div>
            <img src={bpm} height='20px' />
            {'      '}
            <img src={bpm} height='20px' />
        </div>
    },
];