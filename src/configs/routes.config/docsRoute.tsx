import type { Routes } from '@/@types/routes'
import { DOCS_PREFIX_PATH } from '@/constants/route.constant'
import { lazy } from 'react'

const docsRoute: Routes = [
    {
        key: 'docs.documentation',
        path: `${DOCS_PREFIX_PATH}/documentation/*`,
        component: lazy(() => import('@/views/docs/Documentations')),
        authority: [],
    },
    {
        key: 'docs.sharedComponentDoc',
        path: `${DOCS_PREFIX_PATH}/shared-component-doc/*`,
        component: lazy(() => import('@/views/docs/SharedComponentsDoc')),
        authority: [],
    },
    {
        key: 'docs.utilsDoc',
        path: `${DOCS_PREFIX_PATH}/utils-doc/*`,
        component: lazy(() => import('@/views/docs/UtilsDoc')),
        authority: [],
    }
]

export default docsRoute
