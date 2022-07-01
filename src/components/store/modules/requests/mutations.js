export default {
    createRequest(state, payload){
        state.requests.push(payload);
    }
}