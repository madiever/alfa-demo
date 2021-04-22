import React from "react";
import {Heading} from "arui-feather/heading";
import {
    STATUS,
    BIRTHDATE,
    ADMISSION_DATE,
    AFFILATION,
    FUNC_SUPERVISOR,
    SUPERVISOR,
    VACATION,
    EmployeeDataList
} from "../dataList.js";
import TabComponent from "../Tabs/tabComponent";

export const EmployeeData = () => {
    return(
        <div className='employee'>
            <Heading size='m' className='heading'>
                Данные о сотруднике
            </Heading>
            <div className='tab-component'>
                <TabComponent />
            </div>
            <div className='list'>
               <li className='listItem'>{STATUS}</li>
               <li className='listItem'>{BIRTHDATE}</li>
               <li className='listItem'>{ADMISSION_DATE}</li>
               <li className='listItem'>{VACATION}</li>
               <li className='listItem'>{SUPERVISOR}</li>
               <li className='listItem'>{FUNC_SUPERVISOR}</li>
               <li className='listItem'>{AFFILATION}</li>
            </div>
            <div className='list'>
                {EmployeeDataList.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className='listItem second'
                        >
                            <div >{val.icon}{val.label}</div>
                        </li>
                    );
                })}
            </div>
        </div>
    );
}