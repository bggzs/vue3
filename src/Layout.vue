<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="180px">
        <el-menu
          :uniqueOpened="true"
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <div v-for="menu in permission" :key="menu.id" index="menu.id">
            <el-submenu v-if="menu.child.length>0">
              <template #title>
                <i :class="menu.icon"></i>
                <span>{{ menu.menuLabel }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  :index="children.id"
                  v-for="children in menu.child"
                  :key="children.id"
                  >{{ children.menuLabel }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-else index="menu.id">{{menu.menuLabel}}</el-menu-item>
          </div>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <header-bar :userInfo="userInfo"></header-bar>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";
import { getUserPermission } from "@/apis/user";
import { ref } from "vue";
export default {
  name: "",
  setup() {
    let userInfo = ref({
      name: "bggzs",
      avatar:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    });
    let permission = ref([]);
    permission.value = getUserPermission();
    return {
      userInfo,
      permission,
    };
  },
  components: {
    HeaderBar,
  },
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style lang='less' scoped>
.el-header {
  padding: 0;
  background: #ffffff;
}
.el-main {
  height: calc(100vh - 60px);
  background: #EEF0F5;
}
.el-menu {
  padding: 56px 0;
  height: calc(100% - 112px);
}
</style>