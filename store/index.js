import Vuex from 'vuex'

const createVuex = () =>{ // new vux for every user 
    return new Vuex.Store({
        state:{
            loadedPosts:[]
        },
        mutations: {
            setPosts(state,posts){
                state.loadedPosts = posts;
            }
        },
        actions:{
            nuxtServerInit(vuexContext,context){// second parameter is the payload and it must be context
                return new Promise((resolve,reject) => { 
                    setTimeout(()=>{
                        vuexContext.commit('setPosts', [
                                { postId: '1',  title: "Post One", previewText: 'post one short description goes here', thumbnail: 'http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
                                { postId: '2',  title: "Post Two", previewText: 'post two short description goes here', thumbnail: 'http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
                                { postId: '3',  title: "Post Three", previewText: 'post three short description goes here', thumbnail: 'http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
                            ]
                        );
                        resolve();
                    },1000);
                })
            }
        },
        getters:{
            loadedPosts(state){
                return state.loadedPosts;
            }
        }
    });
}

export default createVuex
