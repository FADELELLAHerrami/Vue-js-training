
new Vue({
    el: '#app',
    data:{
        counter:0,
        name:'',
    },
    methods:{
        add:function(){
            alert("submit");
        },
        logName:function(){
            console.log("my name is ");
        }
    }
})