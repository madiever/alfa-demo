import React, {Component, useState} from "react";
import Icon from 'arui-feather/icon/action/edit';
import {Label} from "arui-feather/label";
import IconButton from 'arui-feather/icon-button';
import {FULL_NAME, PHONE_NUMBER, POSITION} from '../dataList';
import {ProfileInfoEditor} from "./profileInfoEditor";

export const ProfileInfo = () => {
    let [showEditor, setShowEditor] = useState(false);
    const toggle = () => setShowEditor(showEditor = !showEditor);

    return (
        <div className='profileInfo'>
            <Label size='2xl' >
                {FULL_NAME}
                {<div className='editButton'>
                    <IconButton onClick={toggle}>
                        <Icon name='edit' size='m' className='editIcon'/>
                    </IconButton>
                </div>}
            </Label>
            {showEditor ? <ProfileInfoEditor /> : null}
            <Label size='m'>{POSITION}</Label>
            <Label size='m'>{PHONE_NUMBER}</Label>
        </div>
    );
}