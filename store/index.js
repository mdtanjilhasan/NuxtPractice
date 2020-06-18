import Vuex from 'vuex'
import axios from 'axios'

const createVuex = () =>{ // new vux for every user 
    return new Vuex.Store({
        state:{
            loadedPosts:[]
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
                return axios.get('https://my-nuxt-af4db.firebaseio.com/posts.json')
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
                return axios.post('https://my-nuxt-af4db.firebaseio.com/posts.json',createPost)
                .then(result => {
                    vuexContext.commit('addPost',{...createPost, postId: result.data.name});
                })
                .catch(error => console.log(error));
            },
            editPost(vuexContext,editedPost){
                return axios.put('https://my-nuxt-af4db.firebaseio.com/posts/'+editedPost.postId+'.json',editedPost)
                .then(response => {
                    vuexContext.commit('editPost',editedPost);
                })
                .catch(e => console.log(e));
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
