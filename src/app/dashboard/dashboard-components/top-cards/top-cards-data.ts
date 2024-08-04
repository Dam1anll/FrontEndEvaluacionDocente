export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string,
    href: string
}

export const topcards: topcard[] = [
    {
        bgcolor: 'success',
        icon: 'bi bi-people',
        title: '4',
        subtitle: 'Grupos',
        href: '/component/estatus'
    },
    {
        bgcolor: 'primary',
        icon: 'bi bi-person',
        title: '83 %',
        subtitle: 'Resultados',
        href: '/component/resultados'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-thermometer-half',
        title: '2',
        subtitle: 'Gestion',
        href: '/component/gestion'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-bell-fill',
        title: '104',
        subtitle: 'Claves',
        href: '/component/claves'
    }
] 