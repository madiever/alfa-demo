import React, {Component} from "react";
import Tabs from 'arui-feather/tabs';
import TabItem from 'arui-feather/tab-item';

export class TabComponent extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            page: '/actions'
        }
    }

    handleClick(event) {
        console.log('123');
    }

    render() {
        return(
            <div>
                <Tabs>
                    <TabItem url='/actions' onClick={ this.handleClick } checked={ this.state.page === '/actions' }>
                        Действия
                    </TabItem>
                    <TabItem url='/urls' onClick={ this.handleClick } checked={ this.state.page === '/urls' }>
                        Полезные ссылки
                    </TabItem>
                </Tabs>
            </div>
        );
    }
}