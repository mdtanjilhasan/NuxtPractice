export default function(context){
    context.store.dispatch('initAuth',context.req); // for set token in serverside and local
    if(!context.store.getters.isAuthenticated){
        context.redirect('/admin/auth');
    }
}