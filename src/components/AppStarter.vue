<template>
    <div class="form">
        <form action="" onsubmit="return false;">
            <input id="timeName" v-on:keyup.enter="Create" type="text" placeholder="Timer Name">
            <input @click="Create" type="button" value="Create Timer">
        </form>
        <hr>
        <div class="timers">
            <div class="timer" v-for="(massive, index) in massives" :index="index" :key="index">
                <h3>{{massive.name}}</h3>
                <div class="time">
                    <time datatype="hh:mm:ss">{{formattedTimeLeft}}</time>
                </div>
                <button  @click="pauseplay"><i class="fa fa-pause"></i></button>
                <button @click="deletes(index)"><i class="fa fa-trash"></i></button>
            </div>
        </div>
    </div>
</template>

<script>

    const TIME_LIMIT = 0;
    export default {
        data(){
            return{
                one: 1,
                props: ['second'],
                timePassed: 0,
                timerInterval: null,
                forever: false,
                newId: 0,
                date: "",
                start: "",
                name: "",
                timename: "",
                time: new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds(),
                Play: true,
                massives:[
                    {id: "845", name: "Test_1", start: "4:18:15:25", time: "00:00:00", pauseplay: "true"},
                    {id: "256", name: "Test_2", start: "4:18:15:25", time: "00:00:00", pauseplay: "true"},
                ]
            }
        },
        computed: {
            timeLeft() {
                return TIME_LIMIT + this.timePassed;
            },
            formattedTimeLeft() {
                const timeLeft = this.timeLeft;
                const minutes = Math.floor(timeLeft / 60);
                const hours = Math.floor(minutes / 60);
                let seconds = timeLeft % 60;
                let minute = minutes % 60;
                let hour = hours % 60;

                if (seconds < 10) {
                    seconds = `0${seconds}`;
                }
                if (minute < 10) {
                    minute = `0${minute}`;
                }
                if (hour < 10) {
                    hour = `0${hour}`;
                }


                return `${hour}:${minute}:${seconds}`;
            }



        },


        mounted() {
            this.startTimer();
        },

        methods:{
            startTimer() {
                    this.timerInterval = setInterval( () => (this.timePassed += this.one), 1000);
                    },
            Create:function () {

                console.log(this.sec)
                var name = document.getElementById('timeName').value;
                if (name === ""){
                    this.timename = new Date().getDay()+new Date().getMonth()+new Date().getHours()+new Date().getMinutes()+"_timer"
                }
                else{
                    this.timename = name
                    document.getElementById('timeName').value = ""
                }
                this.start = new Date().getDay()+""+new Date().getHours()+""+new Date().getMinutes() +""+ new Date().getSeconds()
                this.newId = new Date().getHours()+new Date().getMinutes() + new Date().getSeconds()+ new Date().getMilliseconds()
                this.name = this.timename
                this.date = new Date()
                this.time = new Date(this.sec).getHours()+":"+new Date(this.sec).getMinutes()+":"+new Date(this.sec).getSeconds()
                this.massives.push({id: this.newId, name: this.name, start: this.start ,time: this.time,pauseplay: true})


            },




            pauseplay:function () {
                if (this.Play === true){
                    console.log("play->pause "+ this.one),
                        this.startTimer();
                    this.one = 0
                    this.Play = false

                }
                else {
                    console.log("pause->play "+ this.one),
                        this.Play = true
                    this.one = 1
                    clearInterval(this.timerInterval)
                }
            },
            deletes:function (index) {
                console.log(index)
                Vue.delete(this.massives, index)
                console.log(this.massives)
            },


        }




    }
</script>

<style lang="less" scoped>
    .timer{
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        display: flex;
        font-family: Nunito Sans;
    h3{
        font-weight: 800;
        font-size: 20px;
        color: #5586F2;
        margin: 15px;
    }
    .time{
        margin: 15px 30px;
        padding: 14px 24px;
        height: 50px;
        background: #E7E8EA;
        border: 1px solid #E7E8EA;
        box-sizing: border-box;
        border-radius: 6px;
    time{
        font-size: 17px;
        color: #676C75;
        }
    }
    button{
        height: 50px;
        width: 50px;
        margin: 10px;
        border: none;
        background: linear-gradient(135deg, #7956EC 0%, #2FB9F8 100%);
        border-radius: 25px;
    i{
        font-size: 14px;
        color: #FFFFFF;
    }
    }

    button:last-child{
        background: linear-gradient(135deg, #F23673 0%, #FCA069 100%);
        border-radius: 6px;
    i{
        font-size: 20px;
        color: #FFFFFF;
    }
    }
    }
</style>