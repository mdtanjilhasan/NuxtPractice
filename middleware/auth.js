export default function(context){
    if(process.client){
        context.store.dispatch('initAuth');
    }
    if(!context.store.getters.isAuthenticated){
        context.redirect('/admin/auth');
    }
}