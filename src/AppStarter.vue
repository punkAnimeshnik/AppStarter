<template>
    <div class="timer">
        <h3>{{name}}</h3>
        <div class="time">
            <time datatype="hh:mm:ss">{{time}}</time>
        </div>
        <button><i class="fa fa-pause"></i></button>
        <button><i class="fa fa-trash"></i></button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name: "AppStarter"
            }
        }

    }
</script>

<style less>
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