<template>
  <div class="WycButtonIframe">
    <el-row type="flex">
      <WycButton>默认按钮</WycButton>
      <WycButton type="primary">主要按钮</WycButton>
      <WycButton type="success">成功按钮</WycButton>
      <WycButton type="info">信息按钮</WycButton>
      <WycButton type="warning">警告按钮</WycButton>
      <WycButton type="danger">危险按钮</WycButton>
    </el-row>
    <el-row type="flex">
      <WycButton plain>朴素按钮</WycButton>
      <WycButton type="primary" plain>主要按钮</WycButton>
      <WycButton type="success" plain>成功按钮</WycButton>
      <WycButton type="info" plain>信息按钮</WycButton>
      <WycButton type="warning" plain>警告按钮</WycButton>
      <WycButton type="danger" plain>危险按钮</WycButton>
    </el-row>

    <el-row type="flex">
      <WycButton round>圆角按钮</WycButton>
      <WycButton type="primary" round>主要按钮</WycButton>
      <WycButton type="success" round>成功按钮</WycButton>
      <WycButton type="info" round>信息按钮</WycButton>
      <WycButton type="warning" round>警告按钮</WycButton>
      <WycButton type="danger" round>危险按钮</WycButton>
    </el-row>

    <el-row type="flex">
      <WycButton icon="el-icon-search" circle></WycButton>
      <WycButton type="primary" icon="el-icon-edit" circle></WycButton>
      <WycButton type="success" icon="el-icon-check" circle></WycButton>
      <WycButton type="info" icon="el-icon-message" circle></WycButton>
      <WycButton type="warning" icon="el-icon-star-off" circle></WycButton>
      <WycButton type="danger" icon="el-icon-delete" circle></WycButton>
    </el-row>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="代码" name="1">
        <div v-pre>
          &#60;el-row type="flex"&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton&#62;默认按钮&#60;/WycButton&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton type="primary"&#62;主要按钮&#60;/WycButton&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton type="success"&#62;成功按钮&#60;/WycButton&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton type="info"&#62;信息按钮&#60;/WycButton&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton type="warning"&#62;警告按钮&#60;/WycButton&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton type="danger"&#62;危险按钮&#60;/WycButton&#62;<br/>
          &#60;/el-row&#62;
          <br/><br/>
          &#60;el-row type="flex"&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;&#60;WycButton plain&#62;朴素按钮&#60;/WycButton&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;&#60;WycButton type="primary" plain&#62;主要按钮&#60;/WycButton&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;&#60;WycButton type="success" plain&#62;成功按钮&#60;/WycButton&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;&#60;WycButton type="info" plain&#62;信息按钮&#60;/WycButton&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;&#60;WycButton type="warning" plain&#62;警告按钮&#60;/WycButton&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#60;&#60;WycButton type="danger" plain&#62;危险按钮&#60;/WycButton&#62;<br/>
          &#60;/el-row&#62;
          <br/><br/>
          &#60;el-row type="flex"&#62;<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton round&#62;圆角按钮&#60;/WycButton&#62;<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton type="primary" round&#62;主要按钮&#60;/WycButton&#62;<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton type="success" round&#62;成功按钮&#60;/WycButton&#62;<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton type="info" round&#62;信息按钮&#60;/WycButton&#62;<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton type="warning" round&#62;警告按钮&#60;/WycButton&#62;<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton type="danger" round&#62;危险按钮&#60;/WycButton&#62;<br/>
          &#60;/el-row&#62;
            <br/><br/>
          &#60;el-row type="flex"&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp; &#60;WycButton icon="el-icon-search" circle&#62;&#60;/WycButton&#62;<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton type="primary" icon="el-icon-edit" circle&#62;&#60;/WycButton&#62;<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton type="success" icon="el-icon-check" circle&#62;&#60;/WycButton&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp; &#60;WycButton type="info" icon="el-icon-message" circle&#62;&#60;/WycButton&#62;<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;&#60;WycButton type="warning" icon="el-icon-star-off" circle&#62;&#60;/WycButton&#62;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp; &#60;WycButton type="danger" icon="el-icon-delete" circle&#62;&#60;/WycButton&#62;<br/>
          &#60;/el-row&#62;
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import wangyuncongComponents from '@wangyuncong/components'
const WycButton = wangyuncongComponents.WycButton
export default {
  name: "WycButtonIframe",
  data() {
    return {
      activeNames: ['1']
    };
  },
  components: {
    WycButton
  }
};
</script>

<style lang='less' scoped>
.WycButtonIframe {
  .el-row--flex{
    margin-top: 10px;
  }
  .WycButton {
    margin-left: 10px;
  }
}
</style>
