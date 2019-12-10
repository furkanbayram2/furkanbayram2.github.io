<template>
    <header class="header">
        <div class="container">
            <div class="header d-flex justify-content-between  align-items-center">
                <div class="header-left d-flex align-items-center">
                    <div class="header-left-logo d-flex align-items-center">
                        <router-link to="/">
                            <img src="../assets/img/logo.svg" alt="" width="100">
                        </router-link>
                    </div>
                    <div class="header-left-menu">
                        <ul class="header-left-menu-list d-flex flex-wrap m-0">
                            <li class="header-left-menu-list-item">
                                <a href="#" class="header-left-menu-list-item-link text-light">Dashboard</a>
                            </li>
                            <li class="header-left-menu-list-item">
                                <a href="#" class="header-left-menu-list-item-link">Availability</a>
                            </li>
                            <li class="header-left-menu-list-item">
                                <a href="#" class="header-left-menu-list-item-link">Share</a>
                            </li>
                            <li class="header-left-menu-list-item">
                                <a href="#" class="header-left-menu-list-item-link">Score</a>
                            </li>
                            <li class="header-left-menu-list-item">
                                <a href="#" class="header-left-menu-list-item-link">Criteria</a>
                            </li>
    
                        </ul>
                    </div>
                </div>
                <div class="header-right d-flex align-items-center">
                    <div class="header-right-menu">
                        <ul class="header-right-menu-list d-flex m-0 p-0">
                            <li class="header-right-menu-list-item">
                                <a href="" class="header-right-menu-list-item-link">
                                                                                    <span>Tolga A.</span>
                                                                                    <img src="../assets/img/icon.jpeg" alt="" width="50" height="50">
                                                                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    
        </div>
    
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss">
.header {
    color: #000000;
    background-color: #ffffff;
    height: 100px;
    &-left {
        &-logo {}
        &-menu {
            &-list {
                &-item {
                    list-style: none;
                    &-link {
                        padding: 5px 10px;
                        color: #000000;
                    }
                }
            }
        }
    }
    &-right {
        &-menu {
            &-list {
                &-item {
                    list-style: none;
                    &-link {
                        padding: 25px 10px;
                        color: #000000;
                        font-size: 12px;
                        img {
                            margin-left: 5px;
                            border: 1px solid #efefef;
                            border-radius: 3px;
                        }
                    }
                }
            }
        }
    }
}
</style>