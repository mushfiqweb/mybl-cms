import {
    HiOutlineBan,
    HiOutlineBookOpen,
    HiOutlineChartPie,
    HiOutlineChartSquareBar,
    HiOutlineChatAlt,
    HiOutlineColorSwatch,
    HiOutlineCurrencyDollar,
    HiOutlineDesktopComputer,
    HiOutlineDocumentDuplicate,
    HiOutlineDocumentText,
    HiOutlineHand,
    HiOutlineKey,
    HiOutlineLockClosed,
    HiOutlinePaperAirplane,
    HiOutlineShare,
    HiOutlineShieldCheck,
    HiOutlineTemplate,
    HiOutlineTrendingUp,
    HiOutlineUserAdd,
    HiOutlineUserCircle,
    HiOutlineUserGroup,
    HiOutlineVariable,
    HiOutlineViewGridAdd
} from 'react-icons/hi'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    apps: <HiOutlineViewGridAdd />,
    project: <HiOutlineChartSquareBar />,
    crm: <HiOutlineUserGroup />,
    sales: <HiOutlineTrendingUp />,
    crypto: <HiOutlineCurrencyDollar />,
    knowledgeBase: <HiOutlineBookOpen />,
    account: <HiOutlineUserCircle />,
    uiComponents: <HiOutlineTemplate />,
    common: <HiOutlineColorSwatch />,
    feedback: <HiOutlineChatAlt />,
    dataDisplay: <HiOutlineDesktopComputer />,
    forms: <HiOutlineDocumentText />,
    navigation: <HiOutlinePaperAirplane />,
    graph: <HiOutlineChartPie />,
    authentication: <HiOutlineLockClosed />,
    signIn: <HiOutlineShieldCheck />,
    signUp: <HiOutlineUserAdd />,
    forgotPassword: <HiOutlineLockClosed />,
    resetPassword: <HiOutlineKey />,
    pages: <HiOutlineDocumentDuplicate />,
    welcome: <HiOutlineHand />,
    accessDenied: <HiOutlineBan />,
    guide: <HiOutlineBookOpen />,
    documentation: <HiOutlineDocumentText />,
    sharedComponentDoc: <HiOutlineShare />,
    utilsDoc: <HiOutlineVariable />
}

export default navigationIcon
