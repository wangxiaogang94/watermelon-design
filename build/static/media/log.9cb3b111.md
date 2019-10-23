## API

属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| top | 中心点的y | number | 350 | 1.0.10 |
| left | 中心点的x | number | 350 | 1.0.10 |
| show | 是否显示菜单 | boolean | true | 1.0.10 |
| menu | 菜单项 | ReactNode[] | [] | 1.0.10 |
| centerButton | 中心按钮 | `string/ReactNode` | | 1.0.10 |
| centerClick | 中心按钮点击事件 | function | | 1.0.10 |
| centerBackground | 中心按钮背景 | string | #fd485e | 1.0.10 |

menu的子属性

| 属性 | 说明 | 类型 | 默认值 | 版本 | 说明 |
| --- | --- | --- | --- | --- |
| icon | 图标 | ReactNode | | 1.0.10 | |
| text | 文字 | `string/ReactNode` | | 1.0.10 | |
| onClick | 点击事件 | function | | 1.0.10 | |
| className | 自定义样式class名 | string | | 1.0.10 | 

## 示例

```jsx
import { CircleMenu } from 'watermelon-design';


export default class menu extends React.Component {
    render() {
        const props = {
            top: 150, // 中心点的y
            left: 350, // 中心点的x
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
                <CircleMenu {...props}/>
            </div>
        );
    }
}

```