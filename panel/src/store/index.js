
import Vue from 'vue'
import Vuex from 'vuex'

import HighchartsVue from 'highcharts-vue'
import loadDrillDown from 'highcharts/modules/drilldown'

loadDrillDown(Highcharts)
Vue.use(HighchartsVue, { Highcharts })
Vue.use(Vuex)

import tableJSON from '../../data/table.json'
import chartJSON from '../../data/chart.json'

require('../assets/css/reset.css');

export default new Vuex.Store({
  state: {
    tableData: tableJSON,
    chartData: chartJSON,
    username: 'admin',
    password: '1234',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

