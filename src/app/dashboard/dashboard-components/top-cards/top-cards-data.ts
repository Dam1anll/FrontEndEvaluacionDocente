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
        title: 'Estatus',
        subtitle: 'Grupos',
        href: '/component/estatus'
    },
    {
        bgcolor: 'primary',
        icon: 'bi bi-person',
        title: 'Resultados',
        subtitle: 'Resultados',
        href: '/component/resultados'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-thermometer-half',
        title: 'Gestion',
        subtitle: 'Gestion',
        href: '/component/gestion'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-bell-fill',
        title: 'Claves',
        subtitle: 'Claves',
        href: '/component/claves'
    }
] 