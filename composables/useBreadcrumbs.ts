export default function () {
  const router = useRouter();

  const getCrumbs = (routerObj: typeof router) => {
    if (!routerObj.currentRoute.value.meta?.crumbs) {
      return [];
    }

    return typeof routerObj.currentRoute.value.meta.crumbs === 'function'
      ? routerObj.currentRoute.value.meta.crumbs(routerObj)
      : JSON.parse(routerObj.currentRoute.value.meta.crumbs as string);
  };

  const breadcrumbs = computed(() => {
    return getCrumbs(router);
  });

  return { breadcrumbs };
}
