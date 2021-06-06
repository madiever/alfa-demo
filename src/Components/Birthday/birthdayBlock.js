import Person from "./person";
import './index.css';
import Heading from "arui-feather/heading";
import {Component} from "react";

export default class BirthdayBlock extends Component {
    render() {
        return (
            <div>
                <Heading size='m'>Дни рождения сотрудников</Heading>
                <Person/>
            </div>
        );
    }
}

