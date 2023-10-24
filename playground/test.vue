<!-- 试卷审核 -->
<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="pb_15">
      <el-breadcrumb-item><span class="tc_999">题库系统</span></el-breadcrumb-item>
      <el-breadcrumb-item><span class="tc_blue">试卷审核</span></el-breadcrumb-item>
    </el-breadcrumb>
    <div class="flex_start bd_radius_8 h45 of_hidden w290">
      <div class="bg_white w70 text_center lh_45" :class="paperCategory === 1 ? 'bg_blue' : ''" @click="changeType(1)">
        <p class="ts_14" :class="paperCategory === 1 ? 'tc_white' : 'tc_999'">试卷</p>
      </div>
      <div class="bg_white w70 text_center lh_45" :class="paperCategory === 2 ? 'bg_blue' : ''" @click="changeType(2)">
        <p class="ts_14" :class="paperCategory === 2 ? 'tc_white' : 'tc_999'">教辅图书</p>
      </div>
      <div class="bg_white w70 text_center lh_45" :class="paperCategory === 4 ? 'bg_blue' : ''" @click="changeType(4)">
        <p class="ts_14" :class="paperCategory === 4 ? 'tc_white' : 'tc_999'">精品专辑</p>
      </div>
      <div class="bg_white w80 text_center lh_45" :class="paperCategory === 6 ? 'bg_blue' : ''" @click="changeType(6)">
        <p class="ts_14" :class="paperCategory === 6 ? 'tc_white' : 'tc_999'">个性化学习</p>
      </div>
    </div>
    <div class="flex_start mt_10">
      <div class="flex_start bd_radius_8 h45 of_hidden pointer">
        <div class="bg_white w70 text_center lh_45" :class="syncType === 1 ? 'bg_blue' : ''" @click="changeSync(1)">
          <p class="ts_14" :class="syncType === 1 ? 'tc_white' : 'tc_999'">同步</p>
        </div>
        <div class="bg_white w70 text_center lh_45" :class="syncType === 2 ? 'bg_blue' : ''" @click="changeSync(2)">
          <p class="ts_14" :class="syncType === 2 ? 'tc_white' : 'tc_999'">非同步</p>
        </div>
      </div>
      <!-- 筛选 -->
      <FilterTab :showSection="true" :key="syncType" class="ml_20" ref="filterTab" :hasYear="true" :paperTypesList="dictList.PAPER_TYPE" :yearList="yearList" :hasGrade="syncType == 2" :type="syncType == 1 ? 'materialTree' : 'knowledgeTree'" :hasPaperType="true" :hasPaperStatus="true" :hasSearch="true" @handleQuery="getTestPaperList" :searchPrepend="searchPrepend"></FilterTab>
    </div>
    <div id="test_paper_examine" class="mt_15" >
      <el-table
        id="paper_examine_list"
        v-loading="tableLoading"
        :data="testPaperList"
        :style="{minHeight: curHeight + 'px'}"
        style="width: 100%; border-radius: 8px;"
        :row-key="row => row.id"
      > 
        <el-table-column v-if="paperCategory == 2" label="图书名称" prop="bookName" align="center">
          <template #default="{row}">
            <div>
              <p class="text_ellipsis_line_2" :title="row.bookName || '-'">{{row.bookName || '-'}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column v-if="paperCategory == 2" label="图书编号" prop="bookId" align="center">
          <template #default="{row}">
            <div>
              <p >{{row.bookId || '-'}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="批次号" width="135" prop="batchId"></el-table-column>
        <el-table-column label="试卷名称" width="300">
          <template #default="{row}">
            <div class="h50 flex_column_center">
              <div v-html="row.title" :title="row.title" class="text_ellipsis_line_2" />
            </div>
          </template>
        </el-table-column>
        <el-table-column v-if="paperCategory === 6" label="所属学校" prop="customerName" align="center">
          
        </el-table-column>
        <el-table-column label="类型" prop="paperCategory" align="center">
          <template #default="{ row }">
            <p>{{paperTypes.find(item=>item.id == row.paperCategory)?.title}}</p>
          </template>
        </el-table-column>
        <el-table-column label="年级" prop="paperCategory" align="center">
          <template #default="{ row }">
            <p>{{ row.gradeName }}</p>
          </template>
        </el-table-column>
        <el-table-column label="状态" align="center">
          <template #default="{ row }">
            <p :class="paperStatusList[row.paperStatus]?.color">{{paperStatusList[row.paperStatus]?.title}}</p>
          </template>
        </el-table-column>
        <el-table-column label="题数" align="center">
          <template #default="{ row }">
            <p >{{row.questionCount || '-'}}</p>
          </template>
        </el-table-column>
        <el-table-column label="上传日期" prop="createTime" align="center">
          
        </el-table-column>
        <el-table-column fixed="right" width="200" label="操作" align="center">
          <template #default="{ row }">
            <div class="flex_center">
              <p class="tc_blue pointer" @click="handleRemove('showRemoveQuestion', row.id)" v-if="row.paperStatus == 0 && authBtn?.deWeight">{{authBtn?.deWeight}}</p>
              <p class="tc_blue pointer" @click="handleRemove('showSetTag', row.id)" v-if="row.paperStatus == 1 && authBtn?.tag">{{authBtn?.tag}}</p>
              <p class="tc_blue pointer" v-if="row.paperStatus == 2 && authBtn?.approve" @click="changeRouter(row, 'approve')">{{authBtn?.approve}}</p>
              <p class="tc_blue pointer ml_10" v-if="authBtn?.delete" @click="handleDelete(row,)">{{authBtn?.delete}}</p>
              <p class="tc_blue pointer ml_10" v-if="paperCategory === 6" @click="toDetail(row)">查看原卷</p>
            </div>
          </template>
        </el-table-column>
        
        <template #empty>
          <el-empty image="/zw-matrix/menu/no_data.png" :image-size="300" description="暂无数据"></el-empty>
        </template>
      </el-table>
    </div>
    <div v-if="testPaperList.length" class="flex_end pb_20 pt_20">
      <el-pagination    
        background
        :currentPage="pageNum"
        :page-size="pageSize"
        layout="prev, pager, next, total, jumper"
        :total="total"
        @current-change="changePage">
      </el-pagination>
    </div> 
    <RemoveModal :isShow="showRemoveQuestion" @closeModal="closeModal" :paperId="paperId"></RemoveModal>
    <SetTagModal :dictList="dictList" :isShow="showSetTag" @closeModal="closeModal" :paperId="paperId" ></SetTagModal>
    <delPaper ref="delPaperRef" @ok="delOk"></delPaper>
  </div>
</template>
<script lang='ts'>
import {defineComponent, onMounted, reactive, ref, toRefs, nextTick, onActivated, computed, } from 'vue';
import FilterTab from 'coms/filterTab.vue';
import { deleteTestPaperApi, getPaperApproveListApi } from '@/api/questionBank/paperReview'
import { handleHeight, throttle } from '@/utils';
import { paperStatusList, paperTypes } from '@/assets/js/common';
import { getMoreDictListApi } from '@/api/common';
import { useRoute, useRouter } from 'vue-router';
import RemoveModal from './removeRepeatQuestion.vue'
import SetTagModal from './setTagModal.vue'
import { useStore } from 'vuex';
import { IGlobalState } from '@/store';
import { ElMessage, ElMessageBox } from 'element-plus';
import delPaper from '../components/delPaper.vue';
import {IMapList} from "@/views/homeOperate/NEMTActivity/typing";
import {getYearListApi} from "@/api/homeOperate/modelManage";

export default defineComponent({
  name: 'paperExamine',
  components: {
    FilterTab,
    RemoveModal,
    SetTagModal,
    delPaper,
  },
  setup(){
    const router = useRouter();
    const route = useRoute() as any;
    const store = useStore<IGlobalState>();
    const filterTab = ref();
    const delPaperRef = ref<any>(null)
    const state = reactive({
      syncType: 1, //同步类型
      paperCategory: 1, // 试卷类型
      showRemoveQuestion: false,//是否显示试题去重弹窗
      showSetTag: false,//是否显示设置标签弹窗
      tableLoading: false,
      paperId: '',//试卷id
      dictList: {},//字典
      curHeight: 0,
      testPaperList: [],//试卷列表
      questionListH: 0,//列表高度
      pageNum: 1, //当前页数
      pageSize: 10, //每页条数
      total: 0,//总数
      searchPrepend: [
        {
          id: 1,
          name: '试卷',
          inputPlaceholder: '请输入试卷名称',
        },
        {
          id: 2,
          name: '批次',
          inputPlaceholder: '请输入批次',
        }
      ],//搜索类型
    });
    //权限按钮
    const authBtn = computed(()=> store.state.authBtn.authBtnMap[route.name]);
    onMounted(()=>{  
      state.tableLoading = true;
      state.curHeight = handleHeight('test_paper_examine') - 70 ;
      window.addEventListener('resize',throttle(() => {
        state.curHeight = handleHeight('test_paper_examine') - 70;  
      }, 300))
      if(Object.keys(state.dictList).length){
        filterTab.value.handleQuery('keepPageNum');
      }else{
        getDictList();  
      }
      getYearList()
    })
    onActivated(()=>{
      if(state.tableLoading) return;
      state.tableLoading = true;
      state.curHeight = handleHeight('test_paper_examine') - 70 ;
      window.addEventListener('resize',throttle(() => {
        state.curHeight = handleHeight('test_paper_examine') - 70;  
      }, 300))
      if(Object.keys(state.dictList).length){
        filterTab.value.handleQuery('keepPageNum');
      }else{
        getDictList();
      }   
    })

    //年份下拉值
    const yearList = ref<IMapList>([])
    // 获取年份下拉值
    const getYearList = () => {
      getYearListApi().then((res) => {
        let { code, data } = res;
        if (+code !== 200) return;
        yearList.value = data;
      })
    }
     //获取字典
    const getDictList = async() => {
      const { code, data } = await getMoreDictListApi(['ORGANIZATION', 'PAPER_TYPE','COLLEGE_DISTRICT' , 'TERM']);
      if(code == 200){
        data.PAPER_TYPE = data.PAPER_TYPE.map(item => {
          item.id = item.dictCode,
              item.title = item.dictName
          return item
        })
        state.dictList = data;
        getTestPaperList({}, '');
      }
    }
    //获取试卷列表
    const getTestPaperList = async({gradeData, subjectData, title, paperStatusData, sectionData, selectSearch, yearData, paperTypeData, editionData, volumeData}: any, val) => {
      if(selectSearch == 2 && !/^\d+$/.test(title) && title){
        ElMessage.warning('批次号只能为数字！');
        return;
      }
      if(val != 'keepPageNum'){// != keepPageNum 说明需要 请求第一页数据
        state.pageNum = 1;
      }
      state.tableLoading = true;
      const { code, data } = await getPaperApproveListApi({
        params:{
          studyPhaseCode: sectionData?.dictCode,
          gradeCode: gradeData?.dictCode,
          subjectCode: subjectData?.dictCode,
          paperStatus: paperStatusData?.id,
          paperCategory: state.paperCategory,
          title: selectSearch == 1 ? title : '',
          batchId: selectSearch == 2 ? title : '',
          syncType: state.syncType,
          yearCode: yearData?.dictCode,  // 年份编码
          paperType: paperTypeData?.id, // 试卷类型
          textbookVersionCode: state.syncType == 1 ? editionData?.dictCode : '', // 版本编号
          ceciCode:  state.syncType === 1 ? volumeData?.dictCode : '', // 册次编号
        },
        pageNum: state.pageNum,
        pageSize: state.pageSize,
        onlyCheckUrlAndMethod: true,
      });
      if(code == 200){
        state.testPaperList = data.list;
        state.total = Number(data.total);
        nextTick(()=>{
          state.questionListH = document.getElementById('paper_examine_list')?.clientHeight as number;
          state.tableLoading = false;
        })
      }
    }
    //切换同步
    const changeSync = (val) => {
      state.syncType = val;
      filterTab.value.handleQuery(); 
    }
    const changeType= (val) => {
      state.paperCategory = val;
      filterTab.value.handleQuery(); 
    }
    //切换页数
    const changePage = (val)=>{
      state.pageNum = val;
      filterTab.value.handleQuery('keepPageNum');
    }
    //切换路由
    const changeRouter = (item, type) => {
      router.push({path: '/question_bank/import_paper/paper_review/paper_detail', query: {paper_id: item.id, handle_type: type,approved_frequency:1}})
      // router.push({path: '/question_bank/test_questions_review/review_detail', query: {id: item.id, sync_type: state.sync, type,}})
    }
    //跳转原卷详情
    const toDetail = (row) => {
      router.push({
        path: '/question_bank/exam_paper/paper_detail',
        query: {
          id: row.id,
        }
      })
    }
    //关闭弹窗
    const closeModal = (val) => {
      state.showRemoveQuestion = false;
      state.showSetTag = false;
      if(val == 1){
        filterTab.value.handleQuery('keepPageNum'); 
      }
    }
    //去重
    const handleRemove = (type, id) => {
      state.paperId = id;
      state[type] = true;
    }
    //删除
    //删除
    const handleDelete = (item) => {
      delPaperRef.value.showModal(item)
    }
    // 删除完成
    const delOk = () => {
      if(state.testPaperList.length == 1 && state.pageNum > 1){
          state.pageNum--;
        }
        filterTab.value.handleQuery('keepPageNum'); 
    }

    return {
      ...toRefs(state),
      changeSync,
      changeType,
      changePage,
      filterTab,
      getTestPaperList,
      paperStatusList,
      changeRouter,
      toDetail,
      handleRemove,
      closeModal,
      paperTypes,
      route,
      authBtn,
      handleDelete,
      delPaperRef,
      delOk,
      yearList
    }
  }
})
</script>
<style scoped>
.lh_45{
  line-height: 45px;
}
.w290{
  width: 290px;
}
</style>