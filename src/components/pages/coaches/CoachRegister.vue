<template>
  <section>
    <base-card>
      <h2>Register as a Coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../minicomps/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data){
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.push('/coaches');
    }
  }
};
</script>

<style>
</style>