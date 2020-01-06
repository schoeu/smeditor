# SUEditor

> ✎ 基于 Vue.js 2.0+ 超简文档样式的富文本编辑器, 轻量, 快速, 优雅


## 功能
- [x] 轻, 快 48 KB
- [x] 自动添加图片描述框 (类似简书)
- [x] 复制上传, 多张批量上传
- [x] 轻量级备份, 恢复, 预览
- [x] 代码精简, 适合二次开发
- [x] 其他编辑器有的功能
- [ ] 移动端

## 使用

```js
// 安装
yarn install sueditor

// 引入
import SUEditor from 'sueditor'

// 全局组件
Vue.use(SUEditor)

// 局部组件
components: {
  'sueditor': SUEditor
}

// 使用
<sueditor :config='config'></sueditor>
```

## 配置
```js
const config = {
  // 接口地址
  uploadUrl: '',
  // form 里的 filename
  uploadName: '',
  // 其他参数
  uploadParams: {},
  // 上传成功回调
  uploadCallback: (data) => {
    console.log(data)
    return 'blob:https://xxxx'
  },
  // 上传失败回调, 可选
  uploadFailed: (err) => {
    console.log(err)
  }
}
```

## 快捷键
```
Ctrl + S 保存
Ctrl + P 预览(新窗口)
```

## 本地运行

```
npm run dev

npm run build

npm run gp
```
