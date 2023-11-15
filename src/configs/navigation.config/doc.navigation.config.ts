import type { NavigationTree } from '@/@types/navigation'
import {
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_TITLE,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import { DOCS_PREFIX_PATH } from '@/constants/route.constant'

const docNavigationConfig: NavigationTree[] = [
    {
        key: 'guide',
        path: '',
        title: 'Guide',
        translateKey: 'nav.docs.guide',
        icon: 'guide',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'docs.documentation',
                path: `${DOCS_PREFIX_PATH}/documentation/introduction`,
                title: 'Documentation',
                translateKey: 'nav.docs.documentation',
                icon: 'documentation',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'docs.sharedComponentDoc',
                path: `${DOCS_PREFIX_PATH}/shared-component-doc/action-link`,
                title: 'Shared Component',
                translateKey: 'nav.docs.sharedComponentDoc',
                icon: 'sharedComponentDoc',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {
                key: 'docs.utilsDoc',
                path: `${DOCS_PREFIX_PATH}/utils-doc/use-auth`,
                title: 'Utilities',
                translateKey: 'nav.docs.utilsDoc',
                icon: 'utilsDoc',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
        ],
    },
]

export default docNavigationConfig
