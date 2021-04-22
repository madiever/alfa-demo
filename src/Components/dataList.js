import React from "react";
import Icon from 'arui-feather/icon/entity/person';
import AccountDefault from 'arui-feather/icon/banking/account-default';
import bpm from '../assets/images/tag-button.png';

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
export const PROJECT = 'Проект';
export const ROLE = 'Роль';
export const PERCENTAGE = 'Процент участия';
export const OWNER = 'PO/PM';

export const EmployeeDataList = [
    {
        label: STATUS,
        value: "Работает",
    },
    {
        label: BIRTHDATE,
        value: "24.10.1997 г.",
    },
    {
        label: ADMISSION_DATE,
        value: "23.10.2020 г.",
    },
    {
        label: VACATION,
        value: "14 дней",
    },
    {
        label: SUPERVISOR,
        value: "Фамилия Имя Отчество тестируемого",
        icon: <Icon name='person' size='s'/>
    },
    {
        label: FUNC_SUPERVISOR,
        value: "Фамилия Имя Отчество тестируемого",
        icon: <Icon name='person' size='s'/>
    },
    {
        label: AFFILATION,
        value: "",
        icon: <div>
            <img src={bpm} height='20px' />
            {'      '}
            <img src={bpm} height='20px' />
        </div>
    },
];

export const ProjectDataList = [
    {
        label: PROJECT,
        value: "СЭД BPM",
    },
    {
        label: ROLE,
        value: "Frontend",
    },
    {
        label: PERCENTAGE,
        value: "50%",
    },
    {
        label: OWNER,
        value: "Фамилия Имя Отчество тестируемого",
        icon: <Icon name='person' size='s'/>
    },
];

export const TabComponentData = [
    {
        label: "Получить справку о чем-то",
        icon: <Icon name='account-default' size='s'/>
    },
    {
        label: "Запросить помощь службы поддержки",
        icon: <Icon name='account-default' size='s'/>
    },
];