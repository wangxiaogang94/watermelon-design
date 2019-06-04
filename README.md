# 个人使用的组件库
================================================
## 上传的图片文件转base64
```
import { fileToBase64 } from 'watermelon-design';

const image = fileToBase64(file, (base64)=>{
    console.log(base64);
})
```