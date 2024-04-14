import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const userState = useCookie<any>('user');

  const user = computed(() => userState.value ?? null);

  const isAuthenticated = computed(() => !!user.value?.access_token);

  function authorizeUser() {
    userState.value = { access_token: 'qwerty' };
  }

  function logoutUser() {
    userState.value = null;
  }

  return { user, isAuthenticated, authorizeUser, logoutUser };
});
