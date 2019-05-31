# dcpermission
基于ant-design-vue的权限管理组件

## 安装
```shell
npm install dcpermission -S --registry https://npm.dianchu.cc/repository/npm-all/
```

## 使用

```javascript
import Vue from 'vue'
import dcpermission from 'dcpermission'

Vue.use(dcpermission)
```

未使用`ant-design-vue`框架的需要安装，然后按需加载   
  
安装ant-design-vue

```shell
npm install ant-design-vue -S
```

按需加载

```javascript
import Vue from 'vue'
import { Modal, Table, Divider, Popconfirm, Form, Input, Checkbox } from 'ant-design-vue';

import 'ant-design-vue/lib/modal/style/css';
import 'ant-design-vue/lib/table/style/css';
import 'ant-design-vue/lib/divider/style/css';
import 'ant-design-vue/lib/popconfirm/style/css';
import 'ant-design-vue/lib/form/style/css';
import 'ant-design-vue/lib/input/style/css';
import 'ant-design-vue/lib/checkbox/style/css';

Vue.use(Modal).use(Table).use(Divider).use(Popconfirm).use(Form).use(Input).use(Checkbox);
```

## 案例

```html
<Permission
    :visible="xxxx"
    :userData="xxxx"
    :permissionInfo="xxxx"
    @editClick="xxxx"
    @okEdit="xxxx"
    @close="visible = false"
/>
```

## API

参数 | 说明 | 类型 | 默认值
-------|--------------|-----|--------
visible | 组件是否可见 | Boolean | false
userData | 用户列表信息 | Array | []
permissionInfo | 当前编辑用户的权限信息 | Array | []

## 事件

名称  | 说明 | 回调参数
-----|-------------------|------------
editClick | 点击编辑的回调 | function(id) 用户id
close | 点击遮罩层或右上角叉或取消按钮的回调 | -
okEdit | 编辑窗口点击确认的回调 | function(Array, Object) 用户权限信息和用户信息
