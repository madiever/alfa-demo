import React from "react";
import Heading from 'arui-feather/heading';
import {ProfileImage} from "./profileImage";
import {ProfileInfo} from "./profileInfo";

export default function ProfileHeader() {
    return (
        <div className='header'>
            <Heading size='l'>Личный кабинет</Heading>
            <ProfileImage/>
            <ProfileInfo />
        </div>
    );
}