import React, {Component, useState} from "react";
import Input from 'arui-feather/input';
import Button from 'arui-feather/button';
import {Label} from "arui-feather/label";

export class ProfileInfoEditor extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        firstName: '',
                }
                this.getData = this.getData.bind(this);
        }

        getData(event) {
                this.setState({firstName: event});
        }

        render() {
                return (
                    <div>
                            <Input className='input' placeholder='Имя' onChange={this.getData}/>
                            <Input className='input'  />
                            <Input className='input' />
                            <Button>Применить</Button>
                            <div>
                                    <Label>
                                            {this.state.firstName}
                                    </Label>
                            </div>
                    </div>
                )
        }

}