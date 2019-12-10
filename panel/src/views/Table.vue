<template>
    <div>
       <div class="list">
            <Header/>
            <div class="list-header">
                <div class="list-header-top">
                    <div class="container">
                        <ul class="list-header-top-list">
                            <li class="list-header-top-list-item d-flex align-items-center flex-wrap">Dates <span class="ml-2">01.31. Jul 2018</span></li>
                            <li class="list-header-top-list-item d-flex align-items-center flex-wrap">Project <span class="ml-2">All</span></li>
                            <li class="list-header-top-list-item d-flex align-items-center flex-wrap">Channel <span class="ml-2">All</span></li>
                        </ul>
                    </div>
                    
                </div>
                <div class="list-header-bottom pl-5">
                    <div class="container">
                        <h3 class="list-header-bottom-title">Competetitor Comprative Product Availability</h3>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="list-content">
                    <div class="list-content-header d-flex justify-content-end mb-3">
                        <ul class="list-content-header-list">
                            <li class="list-content-header-list-item"><a href="#" class="list-content-header-list-item-link">Tree</a></li>
                            <li class="list-content-header-list-item"><a href="#" class="list-content-header-list-item-link">Map</a></li>
                            <li class="list-content-header-list-item"><a href="#" class="list-content-header-list-item-link active">list</a></li>
                            <li class="list-content-header-list-item"><a href="#" class="list-content-header-list-item-link">Table</a></li>
                            <li class="list-content-header-list-item"><a href="#" class="list-content-header-list-item-link">List</a></li>
                        </ul>
                    </div>
                    <div class="list-content-table">
                        <div class="table-container">
                            <table class="table m-0">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col" v-for="column in data.headers" v-bind:key="column.id">{{ column }}</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr v-for="row in data.rows" v-bind:key="row.id">
                                        <td scope="row">1</td>
                    
                                        <td>
                                            <router-link to="/chart">{{ row.salesPointNumber }}</router-link>
                                        </td>
                                        <td>
                                            <router-link to="/chart">{{ row.city }}</router-link>
                                        </td>
                                        <td>
                                            <router-link to="/chart">{{ row.salesPointName }}</router-link>
                                        </td>
                                        <td>
                                            <router-link to="/chart">{{ row.researchGroupName }}</router-link>
                                        </td>
                                        <td>
                                            <router-link to="/chart">{{ row.productName }}</router-link>
                                        </td>
                                        <td>
                                            <router-link to="/chart">{{ row.availability }}</router-link>
                                        </td>

                                    
                                    </tr>
                                    
                                </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

import Header from '@/components/Header'

export default {
    name: 'table',
    components: {
        Header,
    },
    data(){
        return {
            data: '',
            showHeader: true,
        }
    },

    mounted(){
        this.data = this.$store.state.tableData.data;
    }

}
</script>

<style lang="scss">
   .list{
        background-image: url('../assets/img/bg.jpg');
        background-repeat: no-repeat;
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
            &-table{
                .table-container{
                    overflow: scroll;
                    .table{
                        thead{
                            tr{
                                th{
                                    background-color :	#EFEFEF;
                                    font-size: 13px;
                                }
                            }
                        }
                        tbody{
                            background-color: white;
                            tr{
                                td{
                                    a{
                                        color: black;
                                    }
                                }
                            }

                        }
                    }
                }
            }
		}

	}
</style>