export default {
    requests(state){
        return state.requests;
    },
    hasRequests(state){
        return state.requests && state.requests.length > 0;  //Returns true if there's at least one request.
    }
}