import Vuex from 'vuex'
import axios from 'axios'

const createVuex = () =>{ // new vux for every user 
    return new Vuex.Store({
        state:{
            loadedPosts:[],
            token: null
        },
        mutations: {
            setPosts(state,posts){
                state.loadedPosts = posts;
            },
            addPost(state,post){
                state.loadedPosts.push(post);
            },
            editPost(state,editPost){
                const postIndex = state.loadedPosts.findIndex(post => post.postId === editPost.postId);
                state.loadedPosts[postIndex] = editPost;
            },
            setToken(state,token){
                state.token = token;
            },
            clearToken(state){
                state.token = null;
            }
        },
        actions:{
            nuxtServerInit(vuexContext,context){// second parameter is the payload and it must be context
                // return new Promise((resolve,reject) => { 
                //     setTimeout(()=>{
                //         vuexContext.commit('setPosts', [
                //                 { postId: '1',  title: "Post One", previewText: 'post one short description goes here', thumbnail: 'http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
                //                 { postId: '2',  title: "Post Two", previewText: 'post two short description goes here', thumbnail: 'http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
                //                 { postId: '3',  title: "Post Three", previewText: 'post three short description goes here', thumbnail: 'http://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
                //             ]
                //         );
                //         resolve();
                //     },1000);
                // })
                return axios.get(process.env.baseUrl+'/posts.json')
                    .then(response => {
                        const postArray = [];
                        for(const key in response.data){
                            postArray.push({
                                postId: key,
                                ...response.data[key]
                            });
                        }
                        vuexContext.commit('setPosts',postArray);
                    })
                    .catch(e => context.error(e));
            },
            addPost(vuexContext,post){
                const createPost = {...post, updatedOn: new Date()};
                return axios.post(process.env.baseUrl+'/posts.json?auth='+vuexContext.state.token,createPost)
                .then(result => {
                    vuexContext.commit('addPost',{...createPost, postId: result.data.name});
                })
                .catch(error => console.log(error));
            },
            editPost(vuexContext,editedPost){
                return axios.put(process.env.baseUrl+'/posts/'+editedPost.postId+'.json?auth='+vuexContext.state.token,editedPost)
                .then(response => {
                    vuexContext.commit('editPost',editedPost);
                })
                .catch(e => console.log(e));
            },
            authenticateUsers(vuexContext,authData){
                let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ process.env.firebaseAPIkey;
                if(! authData.isLogin){
                    authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ process.env.firebaseAPIkey;
                }
                return axios.post(authUrl,{
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(response => {
                   vuexContext.commit('setToken',response.data.idToken);
                   localStorage.setItem('token',response.data.idToken); // set token in local storage
                   localStorage.setItem('tokenExpires', new Date().getTime() + response.data.expiresIn * 1000); // set expire time in local storage
                   vuexContext.dispatch('setLoggedOutTimer',response.data.expiresIn * 1000);
                })
                .catch(e => {
                    console.log(e);
                });
            },
            setLoggedOutTimer(vuexContext,duration){
                setTimeout(() => {
                    vuexContext.commit('clearToken');
                },duration);
            },
            initAuth(vuexContext){
                const token = localStorage.getItem('token');
                const expireTokenValidity = localStorage.getItem('tokenExpires');
                if(new Date().getTime() > +expireTokenValidity || !token){ // +expireTokenValidity is to convert string into a number
                    return;
                }
                vuexContext.commit('setLoggedOutTimer', +expireTokenValidity - new Date().getTime());
                vuexContext.commit('setToken',token);
            }
        },
        getters:{
            loadedPosts(state){
                return state.loadedPosts;
            },
            isAuthenticated(state){
                return state.token != null;
            }
        }
    });
}

export default createVuex
