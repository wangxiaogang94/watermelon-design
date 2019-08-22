# 个人使用的组件库
================================================
## 上传的图片文件转base64
```
import { fileToBase64 } from 'watermelon-design';
// 在antd的upload的beforeUpload中使用 可以完成前端获取上传图片
const image = fileToBase64(file, (base64)=>{
    console.log(base64);
})
```
## 水印
> - text:
>   > - Type:String
>   > - 
> - isWatermark:
>   > - Type:bool
>   > - Default: false
> - angle:
>   > - Type:number
>   > - Default: -30
```
import { WaterMark } from 'watermelon-design';

const a = () => <WaterMark text={'admin'} isWatermark/>
```