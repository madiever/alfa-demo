import React, {Component, useState} from "react";
import Icon from 'arui-feather/icon/action/edit';
import {Label} from "arui-feather/label";
import IconButton from 'arui-feather/icon-button';
import {FULL_NAME, PHONE_NUMBER, POSITION} from './profileData';
import {ProfileInfoEditor} from "./profileInfoEditor";

export const ProfileInfo = () => {
    let [showEditor, setShowEditor] = useState(false);
    const toggle = () => setShowEditor(showEditor = !showEditor);

    return (
        <div className='profileInfo'>
            <Label size='2xl'>{FULL_NAME}</Label>
            <span className='editButton'>
            <IconButton onClick={toggle}>
                <Icon name='edit' size='m' className='editIcon'/>
            </IconButton>
        </span>
            {showEditor ? <ProfileInfoEditor /> : null}
            <Label size='m'>{POSITION}</Label>
            <Label size='m'>{PHONE_NUMBER}</Label>
        </div>
    );
}