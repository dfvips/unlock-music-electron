<template>
  <el-container id="app">
    <el-main>
      <Home />
    </el-main>
    <el-footer id="app-footer">
      <el-row>
        音乐解锁({{ version }})
        <!-- <a href="https://github.com/ix64/unlock-music" target="_blank">音乐解锁</a>({{ version }}) -->
        ：移除已购音乐的加密保护。
        <!-- <a href="https://github.com/ix64/unlock-music/wiki/使用提示" target="_blank">使用提示</a> -->
      </el-row>
      <el-row>
        目前支持
        QQ 音乐 (<a href="javascript:">.qmc0/.qmc2/.qmc3/.qmcflac/.qmcogg/.tkm</a>),
        Moo 音乐格式 (<a href="javascript:">.bkcmp3/.bkcflac/...</a>), 
        QQ 音乐 Tm 格式 (<a href="javascript:">.tm0/.tm2/.tm3/.tm6</a>),
        QQ 音乐新格式 (<a href="javascript:">.mflac/.mgg/.mflac0/.mgg1/.mggl</a>),
        QQ 音乐海外版JOOX Music (<a href="javascript:">.ofl_en</a>),
        网易云音乐格式 (<a href="javascript:">.ncm</a>),
        虾米音乐格式 (<a href="javascript:">.xm</a>),
        酷我音乐格式 (<a href="javascript:">.kwm</a>),
        酷狗音乐格式 (<a href="javascript:">.kgm/.vpr</a>),
        Android版喜马拉雅文件格式 (<a href="javascript:">.x2m/.x3m</a>),
        咪咕音乐格式 (<a href="javascript:">.mg3d</a>)
        <!-- <a href="https://github.com/ix64/unlock-music/blob/master/README.md" target="_blank">更多</a>。 -->
      </el-row>
      <el-row>
        <!--如果进行二次开发，此行版权信息不得移除且应明显地标注于页面上-->
        <span>Copyright &copy; 2019 - {{ new Date().getFullYear() }} MengYX, Compiled by dreamfly</span>
        音乐解锁使用
        <!-- <a href="https://github.com/ix64/unlock-music/blob/master/LICENSE" target="_blank">MIT许可协议</a> -->
        <a href="javascript:">MIT许可协议</a>
        开放源代码
        <br/> <br/>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
import FileSelector from '@/component/FileSelector';
import PreviewTable from '@/component/PreviewTable';
import config from '@/../package.json';
import Home from '@/view/Home';
import { checkUpdate } from '@/utils/api';

export default {
  name: 'app',
  components: {
    FileSelector,
    PreviewTable,
    Home,
  },
  data() {
    return {
      version: config.version,
    };
  },
  created() {
    this.$nextTick(() => this.finishLoad());
  },
  methods: {
    async finishLoad() {
      const mask = document.getElementById('loader-mask');
      if (!!mask) mask.remove();
      let updateInfo;
      try {
        updateInfo = await checkUpdate(this.version);
      } catch (e) {
        console.warn('check version info failed', e);
      }
      // if (
      //   updateInfo &&
      //   process.env.NODE_ENV === 'production' &&
      //   (updateInfo.HttpsFound || (updateInfo.Found && window.location.protocol !== 'https:'))
      // ) {
        // this.$notify.warning({
        //   title: '发现更新',
        //   message: `发现新版本 v${updateInfo.Version}<br/>更新详情：${updateInfo.Detail}<br/> <a target="_blank" href="${updateInfo.URL}">获取更新</a>`,
        //   dangerouslyUseHTMLString: true,
        //   duration: 15000,
        //   position: 'top-left',
        // });
      // } else {
        // this.$notify.info({
        //   title: '离线使用',
        //   message: `<div>
        //                 <p>我们使用 PWA 技术，无网络也能使用</p>
        //                 <div class="update-info">
        //                     <div class="update-title">最近更新</div>
        //                     <div class="update-content"> ${config.updateInfo} </div>
        //                 </div>
        //                 <a target="_blank" href="https://github.com/ix64/unlock-music/wiki/使用提示">使用提示</a>
        //             </div>`,
        //   dangerouslyUseHTMLString: true,
        //   duration: 10000,
        //   position: 'top-left',
        // });
      // }
    },
  },
};
</script>

<style lang="scss">
@import 'scss/unlock-music';
</style>
