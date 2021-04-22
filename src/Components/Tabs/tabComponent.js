import React, {Component} from "react";
import Tabs from 'arui-feather/tabs';
import TabItem from 'arui-feather/tab-item';
import {Label} from "arui-feather/label";

export default class TabComponent extends Component {
    state = {
        page: '/actions',
        visible: true,
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({page: event.target.getAttribute('href')});
        this.setState(() => {
            console.log('123');
            this.state.visible = !this.state.visible;
        });
    }

    render() {
        return(
            <div className='tabs'>
                <Tabs>
                    <TabItem
                        url='/actions'
                        onClick={() => {}}
                        checked={this.state.page === '/actions' }
                    >
                        Действия
                    </TabItem>
                    <TabItem
                        url='/urls'
                        onClick={this.handleClick}
                        checked={this.state.page === '/urls' }
                    >
                        Полезные ссылки
                    </TabItem>
                </Tabs>
                {this.state.visible ?
                    <div className="tab-content">
                        <div onClick={() => {}} className='actions'>
                            <Label >
                                Получить справку о чем-то
                            </Label>
                        </div>
                        <div onClick={() => {}} className='actions'>
                            <Label >
                                Запросить помощь службы поддержки
                            </Label>
                        </div>
                    </div> : null}
            </div>
        );
    }
}