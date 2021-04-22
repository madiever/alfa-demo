import React from "react";
import {Heading} from "arui-feather/heading";
import {
    EmployeeDataList
} from "../dataList.js";
import TabComponent from "../Tabs/tabComponent";

export const EmployeeData = () => {
    return(
        <div className='employee'>
            <Heading size='m' className='heading'>
                Данные о сотруднике
            </Heading>
            <div className="flex">
                <div className='list'>
                    {EmployeeDataList.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className='listItem'
                            >
                                <span>{val.label}</span>
                                <span className="second">{val.icon}{val.value}</span>
                            </li>
                        );
                    })}
                </div>
                <div className='tab-component'>
                    <TabComponent />
                </div>
            </div>

        </div>
    );
}