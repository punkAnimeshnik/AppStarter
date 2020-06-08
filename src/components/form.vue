<template>
    <div class="cont">
    <div class="form">
        <form action="" onsubmit="return false;">
            <input id="timeName" v-on:keyup.enter="Create" type="text" placeholder="Timer Name">
            <input  @click="Create" type="button" id="create" value="Create Timer">
        </form>
        <hr>
    </div>
        <AppStarter v-for="massive in massives.slice().reverse()"
                    v-bind:key="massive.id"
                    v-bind:massive="massive"
                    v-on:Del="deletes"
        ></AppStarter>
    </div>
</template>

<script>
    const Observer = (new Vue()).$data.__ob__.constructor;
    function makeNonreactive(value)
    {
        value.__ob__ = new Observer({});
        return value;
    };
    import json from "./timer.json";
    import Vue from "vue";

    export default {
        data(){
            return{
                timename: "",
                newId: 0,
                date: "",
                start: "",
                name: "",
                time: new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds(),
                massives:[],
            }
        },

        components: {
            AppStarter: () => import('./AppStarter.vue')
        },
        mounted() {
            this.massiveJson();
            if (localStorage.getItem('timers')) {
                try {
                    this.massives = JSON.parse(localStorage.getItem('timers'));
                } catch(e) {
                    localStorage.removeItem('timers');
                }
            }
        },

        methods:{
            massiveJson(){
                console.log(json)
                this.massives = json
            },
            Create:function () {
                var name = document.getElementById('timeName').value;
                if (name === ""){
                    this.timename = new Date().getDay()+new Date().getMonth()+new Date().getHours()+new Date().getMinutes()+new Date().getMilliseconds()+"_timer"
                }
                else{
                    this.timename = name
                    document.getElementById('timeName').value = ""
                }
                this.start = new Date().getTime()
                this.newId = new Date().getHours()+new Date().getMinutes() + new Date().getSeconds()+ new Date().getMilliseconds()
                this.name = this.timename
                this.date = new Date()
                this.time = new Date(this.sec).getHours()+":"+new Date(this.sec).getMinutes()+":"+new Date(this.sec).getSeconds()
                this.massives.push({id: this.massives.length, name: this.name, start: this.start, time: 0, pauseplay: true })
                console.log(this.massives)
                this.saveMassive();
            },
            saveMassive(){
                const parsed = JSON.stringify(this.massives);
                localStorage.setItem('timers', parsed);
            },
                deletes:function (index) {
                    Vue.delete(this.massives, index),
                    console.log(this.massives)
                    this.saveMassive();
                },
        }
    }
</script>

<style lang="less" scoped>
    .form{
        justify-content: center;
        form{
            margin: 0 auto 30px;
            input{
                font-family: Nunito Sans;
                font-size: 17px;
                height: 50px;
                border-radius: 6px;
                margin: auto  10px;
            }
            input[type = text]{
                outline: none;
                min-width: 300px;
                background: #F8F9FA;
                border: 1px solid #E7E8EA;
                box-sizing: border-box;
                padding-left: 20px;
            }
            input[type = button]{
                cursor:pointer;
                padding:13px 25px;
                background: linear-gradient(163.14deg, #FF8E64 0%, #FFE641 100%);
                border: none;
                outline: none;
            }
        }
    }
</style>