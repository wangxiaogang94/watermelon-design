import React, { Component } from 'react';
// import { Icon } from 'antd';
import './index.css';
export default class CircleMenu extends Component {
    static defaultProps = {
        top: 350, // 中心点的y
        left: 350, // 中心点的x
        show: true, // 是否显示菜单
        menu: [],
        centerButton: '按钮',
        centerClick: () => {},
        centerBackground: null,
    };
    render() {
        const { top, left, show, menu, centerButton, centerClick, centerBackground } = this.props;
        const menuHtml = menu.map((v, i) => {
            return (
                <li onClick={() => v.onClick(i)} key={i} className={v.className}>
                    <span className="icon">{v.icon}</span>
                    <span className="text">{v.text}</span>
                </li>
            );
        });
        return (
            <div
                className="circle-warpper"
                style={{ top: top - 150, left: left - 150, display: show ? 'block' : 'none' }}
            >
                <div className="circle-nav">
                    <div
                        className="circle-circle"
                        onClick={centerClick}
                        style={{ background: centerBackground || null }}
                    >
                        {centerButton}
                    </div>
                    <ul id="menu-items">{menuHtml}</ul>
                </div>
            </div>
        );
    }
}
