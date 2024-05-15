export default function () {
    const router = useRouter()

    const getCrumbs = (routerObj: typeof router) => {
        const currentRoute = routerObj.currentRoute.value

        if (!currentRoute.meta?.crumbs) {
            return []
        }

        return typeof currentRoute.meta.crumbs === 'function'
            ? currentRoute.meta.crumbs(routerObj)
            : JSON.parse(currentRoute.meta.crumbs as string)
    }

    const breadcrumbs = computed(() => {
        return getCrumbs(router)
    })

    return { breadcrumbs }
}
