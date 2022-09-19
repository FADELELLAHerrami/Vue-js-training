
new Vue({
    el: '#app',
    data:{
        counter:0,
    },
    methods:{
        increment:function(){
            this.counter++;
        },
        decrement:function(){
            this.counter--;
        },
        increment2:function(step){
            this.counter+=step;
        },
        decrement2:function(step){
            this.counter-=step;
        },
        add:function(){
            alert("submit");
        }
    }
})