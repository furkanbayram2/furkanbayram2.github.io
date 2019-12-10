<template>
  <div class="chart">
	<Header/>
	<div class="chart-header">
		<div class="chart-header-top">
			<div class="container">
				<ul class="chart-header-top-list">
					<li class="chart-header-top-list-item d-flex align-items-center flex-wrap">Dates <span class="ml-2">01.31. Jul 2018</span></li>
					<li class="chart-header-top-list-item d-flex align-items-center flex-wrap">Project <span class="ml-2">All</span></li>
					<li class="chart-header-top-list-item d-flex align-items-center flex-wrap">Channel <span class="ml-2">All</span></li>
				</ul>
			</div>
			
		</div>
		<div class="chart-header-bottom">
			<div class="container">
				<h3 class="chart-header-bottom-title">Competetitor Comprative Product Availability</h3>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="chart-content">
			<div class="chart-content-header d-flex justify-content-between mb-3">
                <router-link class="go-back-link" to="/table">Go Back</router-link>
				<ul class="chart-content-header-list d-flex justify-content-end">
					<li class="chart-content-header-list-item"><a href="#" class="chart-content-header-list-item-link">Tree</a></li>
					<li class="chart-content-header-list-item"><a href="#" class="chart-content-header-list-item-link">Map</a></li>
					<li class="chart-content-header-list-item"><a href="#" class="chart-content-header-list-item-link active">Chart</a></li>
					<li class="chart-content-header-list-item"><a href="#" class="chart-content-header-list-item-link">Table</a></li>
					<li class="chart-content-header-list-item"><a href="#" class="chart-content-header-list-item-link">List</a></li>
				</ul>
			</div>
			<div class="chart-content-graph">
				<highcharts :options="chartOptions"></highcharts>
			</div>
		</div>
	</div>
  </div>
</template>



<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import {Chart} from 'highcharts-vue'



export default {
  name: 'chart',
  data: '',
  components: {
	Header,
	highcharts: Chart
	
  },
  data(){
        return {
			data :'',
			showHeader: true,
            chartOptions: {
                title: {
                    text: null,
                },
				chart: {
					type: 'column'},
				series: '',
			}		
        }
	},
	
	mounted() {
		
		this.chartOptions.series = this.$store.state.chartData.series;
	},

 
}
</script>

<style lang="scss">
	.chart{
		background-image: url('../assets/img/bg.jpg');
		
        background-position: center;
		background-size: cover;
		height: 100%;
		&-header{
			&-top{
				padding: 20px 0px;
				&-list{
					display: flex;
					padding:0;
					margin:0;
					list-style: none;

					&-item{
                        margin-right: 10px;
						span{
                            padding: 5px 15px;
                            background-color: rgba(0, 0, 0, 0.7);
                            color: #ffffff;
                            border-radius: 3px;

						}
					}
				}
			}

			&-bottom{
				background-color: rgba(0, 0, 0, 0.3);
				padding: 25px 0px;

				&-title{
					color: white;
					margin: 0;
					padding: 0;
				}
			}
		}
		&-content{
			background-color: rgba(255, 255, 255, 0.3);
			padding: 30px;
			&-header{
                .go-back-link{
                    color: #ffffff;
                }
				&-list{
					display: flex;
					padding:0;
					margin:0;
					list-style: none;

					&-item{
						&-link{
                            color: #000000;
                            padding: 5px 10px;
                            &.active{
                                background-color: #ef307d;
                                color: #ffffff;
                                border-radius: 3px;
                            }
						}
					}
				}
			}
		}

	}
	
</style>