<template>
        <div class="timers" v-on:native>
            <div class="timer">
               <div class="name">
                   <h3>{{massive.name}}</h3>
               </div>
                <div :class="time_cls" >
                    <time datatype="hh:mm:ss">{{this.formattedTimeLeft}}</time>
                </div>
                <div class="button">
                    <button @click="$emit('Del', massive.id)"><i class="fa fa-trash"></i></button>
                    <button  @click="pauseplay"><i :class="fa"></i></button>
                </div>
            </div>
        </div>
</template>

<script>


    var TIME_LIMIT;
    export default {
    props:['massive'],
        data(){
            return{
                time_cls:'time',
                fa: "fa fa-pause",
                one: 1,
                date:  new Date(),
                sec:0,
                props: ['second'],
                timePassed: 0,
                timerInterval: null,
                forever: false,
                Play:true,
                counter: this.massive
            }
        },

        computed: {
            timeLeft() {
                TIME_LIMIT = Math.floor(this.sec/1)
                return TIME_LIMIT + this.timePassed;
            },
            formattedTimeLeft() {
                const timeLeft = this.timeLeft;
                const minutes = Math.floor(timeLeft / 60);
                const hours = Math.floor(minutes / 60);
                let seconds = timeLeft % 60;
                let minute = minutes % 60;
                let hour = hours % 60;
                if (seconds < 10) { seconds = `0${seconds}`; }
                if (minute < 10) { minute = `0${minute}`; }
                if (hour < 10) { hour = `0${hour}`; }
                return `${hour}:${minute}:${seconds}`;
            }
        },
        mounted() {  this.newTime();this.startTimer(); this.pls();},

        methods:{
            newTime(){
                this.data = new Date().getTime()
                this.sec =  (this.data - this.counter.start)/1000
                console.log(this.sec)
            },
            startTimer() { this.timerInterval = setInterval( () => (this.timePassed += this.one), 1000); },
            pls(){
                if ( this.counter.pauseplay !== true){
                    this.pauseplay();
                    this.Play = false
                }
            },
            pauseplay() {
                if (this.Play === true){
                    console.log("play->pause "+ this.one)
                    this.fa = "fa fa-play"
                    this.time_cls = 'time-ps'
                    this.startTimer();
                    this.one = 0
                    this.Play = false
                }
                else {
                    console.log("pause->play "+ this.one),
                    this.Play = true
                    this.time_cls = 'time',
                    this.fa= "fa fa-pause"
                    this.one = 1
                    clearInterval(this.timerInterval)
                }
            },
        }
    }
</script>

<style lang="less" scoped>
    .timer{
       justify-content: flex-end;
        flex-grow: 2;
        display: flex;
        font-family: Nunito Sans;
        .name{
            text-align: right;
            margin-right: 30px;
            h3{
                font-weight: 800;
                font-size: 20px;
                color: #5586F2;
            }
        }
    .time, .time-ps{
        justify-content: flex-end;

        margin: 15px 30px;
        padding: 14px 24px;
        height: 50px;
        width: 115px;
        background: #E7E8EA;
        border: 1px solid #E7E8EA;
        box-sizing: border-box;
        border-radius: 6px;
    time{
        font-size: 17px;
        color: #676C75;
        }
    }
        .time-ps{
            background: rgba(255, 72, 118, 0.15);
     }
        .button{
                margin-right: 20%;
            button{
                cursor:pointer;
                float: right;
                outline: none;
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
        }
    button:first-child{
        background: linear-gradient(135deg, #F23673 0%, #FCA069 100%);
        border-radius: 6px;
    i{
        font-size: 20px;
        color: #FFFFFF;
            }
        }
    }
</style>