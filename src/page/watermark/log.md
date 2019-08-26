
## WaterMark 水印

页面全覆盖的水印



## API

水印的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| text | 水印文字 | string | `请设置水印文字` | 1.0.7 |
| isWatermark | 是否显示水印 | boolean | false |  |
| angle | 文字旋转角度 | number | -30 |  |





##
## 示例
```jsx
import { WaterMark } from 'watermelon-design';

ReactDOM.render(<WaterMark text="admin" isWatermark/>,mountNode);

```



