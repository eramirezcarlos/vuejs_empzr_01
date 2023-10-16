const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName:'',
      confirmedName:''
    };
  },
  methods:{
    add( num ){
      this.counter = this.counter + num;
    },
    reduce( num ){
      this.counter = this.counter - num;
    },
    setName(event, lastName){
      //this.name = event.target.value + ' ' + lastName
      this.name = event.target.value;
    },
    submitForm( event ){
      //event.preventDefault();
      alert("Submitted!!")
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    resetInput(){
      this.name='';
    }

  }
});

app.mount('#events');
