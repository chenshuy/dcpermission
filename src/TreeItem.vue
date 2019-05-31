<template>
  <div>
    <div v-for="item in list" :key="item.id" class="ctree_item">
      <div class="clearfix">
        <label class="ctree_label">{{ item.name }}：</label>
        <div class="ctree_group">
          <a-checkbox-group v-model="item.selected" :options="item.options" />
        </div>
      </div>
      <TreeMenus class="ctree_item_sub" :list="item.children" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeMenus',
  props: {
    list: Array
  }
};
</script>

<style>
.ctree_item {
  margin-bottom: 15px;
}

.ctree_label {
  float: left;
  margin-left: 10%;
}
.ctree_group {
  width: 60%;
  position: absolute;
  left: 30%;
}
.ctree_item_sub {
  margin-top: 15px;
  padding-left: 20px;
}
</style>
