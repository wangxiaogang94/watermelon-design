import React from 'react';
import Watermark from './watermark';
import FileToBase64 from './fileToBase64';
import Install from './install';
import ColorPicker from './ColorPicker';
import CircleMenu from './CircleMenu';

const menu = [
    {
        key: 'install',
        name: '安装',
        component: <Install />,
    },
    {
        key: 'component',
        name: '组件',
        component: [
            {
                key: 'watermark',
                name: '水印',
                component: <Watermark />,
            },
            {
                key: 'colorpicker',
                name: '颜色选择器',
                component: <ColorPicker />,
            },
            {
                key: 'circlemenu',
                name: '扇形菜单',
                component: <CircleMenu />,
            },
        ],
    },
    {
        key: 'function',
        name: '函数',
        component: [
            {
                key: 'fileToBase64',
                name: '图片转base64',
                component: <FileToBase64 />,
            },
        ],
    },
];

export default menu;