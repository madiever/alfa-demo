import React from "react";
import {Heading} from "arui-feather/heading";
import {
    ProjectDataList
} from "../dataList";

export const ProjectData = () => {
    return(
        <div className='project'>
            <Heading size='m' className='heading'>Данные о проектах</Heading>
            <div className='list'>
                {ProjectDataList.map((val, key) => {
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

        </div>
    );
}