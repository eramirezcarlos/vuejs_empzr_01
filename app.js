const app = Vue.createApp(
{
    data(){
        return {
            courseGoalA: '<h1>Finish the course and learn view! </h1>',
            CourseGoalB: 'Finish Vue and build Amazing Apps!',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {

        outputGoal(){
            const randomNumber = Math.random();
            if( randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.CourseGoalB;
            }
        }
    }



}
);
app.mount('#user-goal');