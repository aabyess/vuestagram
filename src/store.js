import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name: 'Kim',
            age: 20,
            likes: 30,
            좋아요눌렀니: false,
            more :{},
        }
    },
    mutations: {
        이름변경(state) {
            state.name = 'Park'
        },
        증가(state, payload) {
            state.age += payload;
        },
        좋아요(state) {
            if (state.좋아요눌렀니 == false) {
                state.likes++;
                state.좋아요눌렀니 = true;
            }
            else {
                state.likes--;
                state.좋아요눌렀니 = false;
            }
        },
        setMore(state, data){
            state.more = data;
        },
    },
    actions :{
        getData(context){
            axios.get('https://codingapple1.github.io/vue/more0.json')
            .then((a)=>{
                console.log(a.data);
                context.commit('setMore', a.data);
            });
        },
    },
})

export default store;