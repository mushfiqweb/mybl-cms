import type { NavigationTree } from '@/@types/navigation'
import appsNavigationConfig from './apps.navigation.config'
import authNavigationConfig from './auth.navigation.config'
import docNavigationConfig from './doc.navigation.config'
import pagesNavigationConfig from './pages.navigation.config'
import uiComponentNavigationConfig from './ui-components.navigation.config'

const navigationConfig: NavigationTree[] = [
    ...uiComponentNavigationConfig,
    ...appsNavigationConfig,
    ...authNavigationConfig,
    ...pagesNavigationConfig,
    ...docNavigationConfig,
]

export default navigationConfig
