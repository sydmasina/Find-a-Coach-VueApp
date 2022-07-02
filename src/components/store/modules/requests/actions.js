export default {
    async contactCoach(context, data){
        const newRequest = {
            id: new Date().toISOString(),
            coachId: data.coachId,
            userEmail: data.email,
            message: data.message,
        };
        const response = await fetch(`https://vue-first-backend-15415-default-rtdb.firebaseio.com/requests/${data.coachId}.json`,{
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData = await response.json();

        if(response.ok){
            const error = new Error(responseData.message || "Failed to send fetch request");
            throw error;
        }

        newRequest.id = responseData.name;

        context.commit('createRequest', newRequest);
    }
}