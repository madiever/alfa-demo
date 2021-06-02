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
            <img src={bpm} height='20px'/>
            {'      '}
            <img src={bpm} height='20px'/>
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

export const EmployeeData = [
    {
        id: 1,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '24.05',
        image: '',
    },
    {
        id: 2,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '24.05',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/f/f7/Anne-Marie_Rose_Nicholson%2C_2017_%28cropped%29.jpg',
    },
    {
        id: 3,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '24.05',
        image:
            'https://globalnews.ca/wp-content/uploads/2020/02/22618186.jpg?quality=85&strip=all',
    },
    {
        id: 4,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '25.05',
        image: '',
    },
    {
        id: 5,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '25.05',
        image:
            'https://prdaficalmjediwestussa.blob.core.windows.net/images/2019/06/0047_2019_LAA_DenzelWashington.jpg',
    },
    {
        id: 6,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '28.05',
        image:
            'https://prdaficalmjediwestussa.blob.core.windows.net/images/2019/06/0047_2019_LAA_DenzelWashington.jpg',
    },
    {
        id: 7,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '01.06',
        image: '',
    },
    {
        id: 8,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '24.05',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/f/f7/Anne-Marie_Rose_Nicholson%2C_2017_%28cropped%29.jpg',
    },
    {
        id: 9,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '02.06',
        image:
            'https://globalnews.ca/wp-content/uploads/2020/02/22618186.jpg?quality=85&strip=all',
    },
    {
        id: 10,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '02.06',
        image: '',
    },
    {
        id: 11,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '02.06',
        image:
            'https://prdaficalmjediwestussa.blob.core.windows.net/images/2019/06/0047_2019_LAA_DenzelWashington.jpg',
    },
    {
        id: 12,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '02.06',
        image:
            'https://prdaficalmjediwestussa.blob.core.windows.net/images/2019/06/0047_2019_LAA_DenzelWashington.jpg',
    },
    {
        id: 13,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '02.06',
        image:
            'https://prdaficalmjediwestussa.blob.core.windows.net/images/2019/06/0047_2019_LAA_DenzelWashington.jpg',
    },
    {
        id: 14,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '02.06',
        image:
            'https://prdaficalmjediwestussa.blob.core.windows.net/images/2019/06/0047_2019_LAA_DenzelWashington.jpg',
    },
    {
        id: 15,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '02.06',
        image:
            'https://prdaficalmjediwestussa.blob.core.windows.net/images/2019/06/0047_2019_LAA_DenzelWashington.jpg',
    },
    {
        id: 16,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '02.06',
        image:
            'https://prdaficalmjediwestussa.blob.core.windows.net/images/2019/06/0047_2019_LAA_DenzelWashington.jpg',
    },
    {
        id: 17,
        name: 'Байгудинова Э М',
        department: 'Отдел маркетинга',
        date: '02.06',
        image:
            'https://prdaficalmjediwestussa.blob.core.windows.net/images/2019/06/0047_2019_LAA_DenzelWashington.jpg',
    },
];
