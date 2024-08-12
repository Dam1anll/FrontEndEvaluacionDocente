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
        icon: 'bi bi-activity',
        title: 'Estatus',
        subtitle: 'Grupos',
        href: '/component/estatus'
    },
    {
        bgcolor: 'primary',
        icon: 'bi bi-graph-up-arrow',
        title: 'Resultados',
        subtitle: 'Evaluaciones',
        href: '/component/resultados'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-clipboard-data',
        title: 'Gestion',
        subtitle: 'Procesos',
        href: '/component/gestion'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-person',
        title: 'Claves',
        subtitle: 'Tutores',
        href: '/component/claves'
    }
] 