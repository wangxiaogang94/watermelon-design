import React from 'react';
import { Icon } from 'antd';
import CircleMenu from '../../components/CircleMenu';
import Show from '../showMarkdown';
import log from './log.md'


export default class menu extends React.Component {
    render() {
        const props = {
            top: 150, // 中心点的y
            left: 650, // 中心点的x
            show: true, // 是否显示菜单
            menu: [
                {
                    icon: <Icon type="plus-circle" />,
                    text: '拓展',
                    onClick: i => console.log(i),
                },
                {
                    icon: <Icon type="plus" />,
                    text: '新增',
                    onClick: i => console.log(i),
                },
                {
                    icon: <Icon type="fullscreen" />,
                    text: '全屏',
                    onClick: i => console.log(i),
                },
                {
                    icon: <Icon type="fullscreen-exit" />,
                    text: '收回',
                    onClick: i => console.log(i),
                },
                {
                    icon: <Icon type="form" />,
                    text: '编辑',
                    onClick: i => console.log(i),
                },
                {
                    icon: <Icon type="qq" />,
                    text: 'qq',
                    onClick: i => console.log(i),
                },
            ],
            centerButton: (
                <span>
                    <Icon type="plus-circle" />
                    点击
                </span>
            ),
            centerClick: () => {},
            centerBackground: 'blue',
        };
        return (
            <div>
                <h2>扇形菜单</h2>
                <CircleMenu {...props}/>
                <Show style={{marginTop: 200}} log={log} />
            </div>
        );
    }
}
