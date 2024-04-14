import VueTippy from 'vue-tippy';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTippy, {
    defaultProps: {
      delay: 200,
    },
  });
});