<template>
  <div>
    <a-modal centered :footer="null" :width="900" :visible="visible" title="权限管理" @cancel="() => $emit('close')">
      <a-table :columns="columns" :dataSource="userData" :rowKey="record => record.id">
        <span slot="action" slot-scope="row">
          <a href="javascript:;" @click="handleEdit(row)">编辑</a>
          <a-divider type="vertical" />
          <a-popconfirm title="确定删除?">
            <a href="javascript:;">删除</a>
          </a-popconfirm>
        </span>
      </a-table>
    </a-modal>
    <a-modal v-model="visibleChild" :width="900" centered title="操作" @ok="handleOk">
      <a-form-item
        :labelCol="{span: 4}"
        :wrapperCol="{span: 16}"
        label="用户id"
      >
        <a-input v-model="userInfo.id" disabled />
      </a-form-item>
      <a-form-item
        :labelCol="{span: 4}"
        :wrapperCol="{span: 16}"
        label="用户名称"
      >
        <a-input v-model="userInfo.roleName" />
      </a-form-item>
      <a-form-item
        :labelCol="{span: 4}"
        :wrapperCol="{span: 16}"
        label="描述"
      >
        <a-textarea v-model="userInfo.description" :rows="5" placeholder="描述" />
      </a-form-item>
      <a-divider />
      <TreeItem :list="permissions" />
    </a-modal>
  </div>
</template>
<script>
import TreeItem from './TreeItem';
export default {
  name: 'Permission',
  components: {
    TreeItem
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    userData: Array,
    permissionInfo: Array
  },
  data () {
    return {
      // 表头
      columns: [
        {
          dataIndex: 'id',
          title: '用户id'
        },
        {
          dataIndex: 'roleName',
          title: '用户名称'
        },
        {
          dataIndex: 'description',
          title: '描述'
        },
        {
          title: '操作',
          fixed: 'right',
          width: 160,
          scopedSlots: { customRender: 'action' }
        }
      ],
      userInfo: [],
      permissions: [],
      visibleChild: false
    };
  },
  watch: {
    permissionInfo (newValue) {
      this.permissions = this.getPermissions(newValue);
    }
  },
  methods: {
    getPermissions (data) {
      const arr = [];
      for (let index = 0; index < data.length; index++) {
        const v = data[index];
        if (v.hasOwnProperty('components')) {
          v.options = v.components.map(option => {
            return {
              label: option.name,
              value: option.code
            };
          });
        }
        if (v.hasOwnProperty('children')) {
          this.getPermissions(v.children);
        }
        arr.push(v);
      }
      return arr;
    },
    handleEdit (row) {
      this.userInfo = row;
      this.$emit('editClick', row.id);
      this.visibleChild = true;
    },
    handleOk () {
      this.visibleChild = false;
      this.$emit('okEdit', this.permissionInfo, this.userInfo);
    }
  }
};
</script>
