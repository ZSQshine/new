<template>
  <div>
      <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" type='password' autocomplete="off" placeholder='留空则不修改'></el-input>
        </el-form-item>
        
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch
            v-model="form.status"
            active-color="#66CD00"
            inactive-color="#8F8F8F"
            :active-value='1'
            :inactive-value='2'
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="edit">编  辑</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { successAlert } from '../../../utils/alter'
import {mapActions,mapGetters} from 'vuex'
import {oneVip,editVip} from '../../../utils/request'
export default {
    props:['info'],
    data(){
        return{
            form:{
                nickname:'',
                phone:'',
                password:'',
                status:1
            },
            formLabelWidth:'120px'
        }
    },
    methods:{
        cancel(){
            this.info.isShow = false;
            this.form = {
                 nickname:'',
                phone:'',
                password:'',
                status:1
            }
        },
        edit(){
          editVip(this.form).then(res=>{
            successAlert(res.data.msg);
            this.requestVip()
             this.cancel();

          })
           
        },
        getOne(uid){
          // 
          oneVip({uid}).then(res=>{
            this.form = res.data.list;
            this.form.uid = uid;
          })
        },
        ...mapActions({
          'requestVip':'vip/vipListActions'
        })

    },


}
</script>

<style>

</style>