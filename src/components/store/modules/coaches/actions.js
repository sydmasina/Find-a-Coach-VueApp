
export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        }
        const response = await fetch(`https://vue-first-backend-15415-default-rtdb.firebaseio.com/coaches/${userId}.json`,
            {
                method: 'PUT',
                body: JSON.stringify(coachData),
            });

        // const responseData = response.json();

        if (!response.ok) {
            //errr....
        }
        context.commit('registerCoach', {
            ...coachData,
            id: userId,
        });
    }
};