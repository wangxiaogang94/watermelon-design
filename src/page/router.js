import React from 'react';
import Watermark from './watermark';
import FileToBase64 from './fileToBase64';
import Install from './install';

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