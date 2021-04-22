import React from "react";
import {Heading} from "arui-feather/heading";
import {
    ProjectDataList, ROLE, PROJECT, PERCENTAGE, OWNER
} from "../dataList";

export const ProjectData = () => {
    return(
        <div className='project'>
            <Heading size='m' className='heading'>Данные о проектах</Heading>
            <div className='list'>
                <li className='listItem'>{PROJECT}</li>
                <li className='listItem'>{ROLE}</li>
                <li className='listItem'>{PERCENTAGE}</li>
                <li className='listItem'>{OWNER}</li>
            </div>
            <div className='list'>
                {ProjectDataList.map((val, key) => {
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