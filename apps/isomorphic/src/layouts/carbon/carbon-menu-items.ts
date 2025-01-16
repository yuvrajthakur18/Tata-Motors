import { DUMMY_ID } from '@/config/constants';
import { routes } from '@/config/routes';
import { atom } from 'jotai';
import { IconType } from 'react-icons/lib';
import {
  PiAirplaneTilt,
  PiAppStoreLogo,
  PiArrowsOut,
  PiArrowsOutLineHorizontalBold,
  PiBellSimpleRinging,
  PiBinoculars,
  PiBriefcase,
  PiBrowser,
  PiCalendar,
  PiCalendarPlus,
  PiCards,
  PiCaretCircleUpDown,
  PiChartBar,
  PiChartLineUp,
  PiChartPieSlice,
  PiChatCenteredDots,
  PiClipboardText,
  PiCodesandboxLogo,
  PiCreditCard,
  PiCurrencyCircleDollar,
  PiCurrencyDollar,
  PiEnvelopeSimpleOpen,
  PiFeather,
  PiFileImage,
  PiFolder,
  PiFolderLock,
  PiFolderUser,
  PiGridFour,
  PiHammer,
  PiHeadset,
  PiHourglassSimple,
  PiHouseLine,
  PiListNumbers,
  PiLockKey,
  PiMagicWand,
  PiMapPinLine,
  PiNewspaperClipping,
  PiNoteBlank,
  PiNotePencil,
  PiPackage,
  PiPokerChip,
  PiPresentationChart,
  PiPushPin,
  PiRocketLaunch,
  PiScales,
  PiShapes,
  PiShieldCheckered,
  PiShootingStar,
  PiShoppingCart,
  PiSparkle,
  PiSquaresFour,
  PiSteps,
  PiTable,
  PiUserCircle,
  PiUserGear,
  PiUserPlus,
} from 'react-icons/pi';

export interface SubMenuItemType {
  name: string;
  description?: string;
  href: string;
  badge?: string;
}

export interface ItemType {
  name: string;
  icon: IconType;
  href?: string;
  description?: string;
  badge?: string;
  subMenuItems?: SubMenuItemType[];
}

export interface MenuItemsType {
  id: string;
  name: string;
  title: string;
  icon: IconType;
  menuItems: ItemType[];
}

export const carbonMenuItems: MenuItemsType[] = [
  {
    id: '1',
    name: 'Dashboard',
    title: 'Overview',
    icon: PiBrowser,
    menuItems: [
      {
        name: 'File Manager',
        href: '/',
        icon: PiFolder,
      },
      {
        name: 'Appointment',
        href: routes.appointment.dashboard,
        icon: PiCalendar,
      },
      {
        name: 'Executive',
        href: routes.executive.dashboard,
        icon: PiBriefcase,
      },
      {
        name: 'Project',
        href: routes.project.dashboard,
        icon: PiClipboardText,
      },
      {
        name: 'CRM',
        href: routes.crm.dashboard,
        icon: PiFolderUser,
      },
      {
        name: 'Affiliate',
        href: routes.affiliate.dashboard,
        icon: PiChartPieSlice,
      },
      {
        name: 'Store Analytics',
        href: routes.storeAnalytics.dashboard,
        icon: PiPresentationChart,
        badge: 'NEW',
      },
      {
        name: 'Bidding',
        href: routes.bidding.dashboard,
        icon: PiScales,
        badge: 'NEW',
      },
      {
        name: 'Social Media',
        href: routes.socialMedia.dashboard,
        icon: PiSparkle,
      },
      {
        name: 'Job Board',
        href: routes.jobBoard.dashboard,
        icon: PiShapes,
      },
      {
        name: 'Financial',
        href: routes.financial.dashboard,
        icon: PiCurrencyCircleDollar,
      },
      {
        name: 'Logistics',
        href: routes.logistics.dashboard,
        icon: PiPackage,
      },
      {
        name: 'E-Commerce',
        href: routes.eCommerce.dashboard,
        icon: PiShoppingCart,
      },
      {
        name: 'Analytics',
        href: routes.analytics,
        icon: PiChartBar,
      },
      {
        name: 'Support',
        href: routes.support.dashboard,
        icon: PiHeadset,
      },
    ],
  },
  {
    id: '2',
    name: 'Apps Kit',
    title: 'Apps Kit',
    icon: PiAppStoreLogo,
    menuItems: [
      {
        name: 'E-Commerce',
        description: '"Shop Smart, Click Quick: Your One-Stop Solution!"',
        href: '#',
        icon: PiShoppingCart,
        subMenuItems: [
          {
            name: 'Products',
            href: routes.eCommerce.products,
          },
          {
            name: 'Product Details',
            href: routes.eCommerce.productDetails(DUMMY_ID),
          },
          {
            name: 'Create Product',
            href: routes.eCommerce.createProduct,
          },
          {
            name: 'Edit Product',
            href: routes.eCommerce.ediProduct(DUMMY_ID),
          },
          {
            name: 'Categories',
            href: routes.eCommerce.categories,
          },
          {
            name: 'Create Category',
            href: routes.eCommerce.createCategory,
          },
          {
            name: 'Edit Category',
            href: routes.eCommerce.editCategory(DUMMY_ID),
          },
          {
            name: 'Orders',
            href: routes.eCommerce.orders,
          },
          {
            name: 'Order Details',
            href: routes.eCommerce.orderDetails(DUMMY_ID),
          },
          {
            name: 'Create Order',
            href: routes.eCommerce.createOrder,
          },
          {
            name: 'Edit Order',
            href: routes.eCommerce.editOrder(DUMMY_ID),
          },
          {
            name: 'Reviews',
            href: routes.eCommerce.reviews,
          },
          {
            name: 'Shop',
            href: routes.eCommerce.shop,
          },
          {
            name: 'Cart',
            href: routes.eCommerce.cart,
          },
          {
            name: 'Checkout & Payment',
            href: routes.eCommerce.checkout,
          },
        ],
      },
      {
        name: 'Support',
        description: '"Effortless Assistance at your Fingertips!"',
        href: '#',
        icon: PiHeadset,
        subMenuItems: [
          {
            name: 'Inbox',
            href: routes.support.inbox,
          },
          {
            name: 'Snippets',
            href: routes.support.snippets,
          },
          {
            name: 'Templates',
            href: routes.support.templates,
          },
        ],
      },
      {
        name: 'Invoice',
        description: 'Professional-looking invoices for each customer order',
        href: '#',
        icon: PiCurrencyDollar,
        subMenuItems: [
          {
            name: 'List',
            href: routes.invoice.home,
          },
          {
            name: 'Details',
            href: routes.invoice.details(DUMMY_ID),
          },
          {
            name: 'Create',
            href: routes.invoice.create,
          },
          {
            name: 'Edit',
            href: routes.invoice.edit(DUMMY_ID),
          },
        ],
      },
      {
        name: 'Logistics',
        description:
          '"Streamline Shipments: Discover Efficiency with our Logistics!"',
        href: '#',
        icon: PiPackage,
        subMenuItems: [
          {
            name: 'Shipment List',
            href: routes.logistics.shipmentList,
          },
          {
            name: 'Shipment Details',
            href: routes.logistics.shipmentDetails(DUMMY_ID),
          },
          {
            name: 'Create Shipment',
            href: routes.logistics.createShipment,
          },
          {
            name: 'Edit Shipment',
            href: routes.logistics.editShipment(DUMMY_ID),
          },
          {
            name: 'Customer Profile',
            href: routes.logistics.customerProfile,
          },
          {
            name: 'Tracking',
            href: routes.logistics.tracking(DUMMY_ID),
          },
        ],
      },
      {
        name: 'Job Feeds',
        href: routes.jobBoard.jobFeed,
        icon: PiShapes,
      },
      {
        name: 'Appointment',
        href: routes.appointment.appointmentList,
        icon: PiCalendar,
      },
      {
        name: 'File Manager',
        description:
          '"Organize, Access, and Share: Simplify your Digital World with us!"',
        href: routes.file.manager,
        icon: PiFileImage,
      },
      {
        name: 'Event Calendar',
        href: routes.eventCalendar,
        icon: PiCalendarPlus,
      },
      {
        name: 'Roles & Permissions',
        href: routes.rolesPermissions,
        icon: PiFolderLock,
      },
      {
        name: 'Point of Sell',
        href: routes.pos.index,
        icon: PiCreditCard,
      },
      {
        name: 'Invoice Builder',
        href: routes.invoice.builder,
        icon: PiNewspaperClipping,
      },
      {
        name: 'Image Viewer',
        href: routes.imageViewer,
        icon: PiCodesandboxLogo,
      },
    ],
  },
  {
    id: '3',
    name: 'Search',
    title: 'Search & Filter',
    icon: PiUserCircle,
    menuItems: [
      {
        name: 'Real Estate',
        href: routes.searchAndFilter.realEstate,
        icon: PiHouseLine,
      },
      {
        name: 'Flight Booking',
        href: routes.searchAndFilter.flight,
        icon: PiAirplaneTilt,
      },
      {
        name: 'NFT',
        href: routes.searchAndFilter.nft,
        icon: PiPokerChip,
      },
    ],
  },
  {
    id: '4',
    name: 'Widgets',
    title: 'Widgets',
    icon: PiPackage,
    menuItems: [
      {
        name: 'Cards',
        href: routes.widgets.cards,
        icon: PiSquaresFour,
      },
      {
        name: 'Icons',
        href: routes.widgets.icons,
        icon: PiFeather,
      },
      {
        name: 'Charts',
        href: routes.widgets.charts,
        icon: PiChartLineUp,
      },
      {
        name: 'Maps',
        href: routes.widgets.maps,
        icon: PiMapPinLine,
      },
    ],
  },
  {
    id: '5',
    name: 'Forms',
    title: 'Forms',
    icon: PiNotePencil,
    menuItems: [
      {
        name: 'Account Settings',
        href: routes.forms.profileSettings,
        icon: PiUserGear,
      },
      {
        name: 'Notification Preference',
        href: routes.forms.notificationPreference,
        icon: PiBellSimpleRinging,
      },
      {
        name: 'Personal Information',
        href: routes.forms.personalInformation,
        icon: PiUserCircle,
      },
      {
        name: 'Newsletter',
        href: routes.forms.newsletter,
        icon: PiEnvelopeSimpleOpen,
      },
      {
        name: 'Multi Step',
        href: routes.multiStep,
        icon: PiSteps,
      },
      {
        name: 'Payment Checkout',
        href: routes.eCommerce.checkout,
        icon: PiCreditCard,
      },
    ],
  },
  {
    id: '6',
    name: 'Tables',
    title: 'Tables',
    icon: PiTable,
    menuItems: [
      {
        name: 'Basic',
        href: routes.tables.basic,
        icon: PiGridFour,
      },
      {
        name: 'Collapsible',
        href: routes.tables.collapsible,
        icon: PiCaretCircleUpDown,
      },
      {
        name: 'Enhanced',
        href: routes.tables.enhanced,
        icon: PiTable,
      },
      {
        name: 'Sticky Header',
        href: routes.tables.stickyHeader,
        icon: PiBrowser,
      },
      {
        name: 'Pagination',
        href: routes.tables.pagination,
        icon: PiListNumbers,
      },
      {
        name: 'Search',
        href: routes.tables.search,
        icon: PiHourglassSimple,
      },
      {
        name: 'Resizable',
        href: routes.tables.resizable,
        icon: PiArrowsOutLineHorizontalBold,
      },
      {
        name: 'Pinning',
        href: routes.tables.pinning,
        icon: PiPushPin,
      },
      {
        name: 'Drag & Drop',
        href: routes.tables.dnd,
        icon: PiArrowsOut,
      },
    ],
  },
  {
    id: '7',
    name: 'Pages',
    title: 'Pages',
    icon: PiCards,
    menuItems: [
      {
        name: 'Profile',
        href: routes.profile,
        icon: PiMagicWand,
      },
      {
        name: 'Welcome',
        href: routes.welcome,
        icon: PiShootingStar,
      },
      {
        name: 'Coming Soon',
        href: routes.comingSoon,
        icon: PiRocketLaunch,
      },
      {
        name: 'Access Denied',
        href: routes.accessDenied,
        icon: PiFolderLock,
      },
      {
        name: 'Not Found',
        href: routes.notFound,
        icon: PiBinoculars,
      },
      {
        name: 'Maintenance',
        href: routes.maintenance,
        icon: PiHammer,
      },
      {
        name: 'Blank',
        href: routes.blank,
        icon: PiNoteBlank,
      },
    ],
  },
  {
    id: '8',
    name: 'Authentication',
    title: 'Authentication',
    icon: PiShieldCheckered,
    menuItems: [
      {
        name: 'Sign Up',
        icon: PiUserPlus,
        description: '"Shop Smart, Click Quick: Your One-Stop Solution!"',
        href: '#',
        subMenuItems: [
          {
            name: 'Modern Sign Up',
            href: routes.auth.signUp1,
          },
          {
            name: 'Vintage Sign Up',
            href: routes.auth.signUp2,
          },
          {
            name: 'Trendy Sign Up',
            href: routes.auth.signUp3,
          },
          {
            name: 'Elegant Sign Up',
            href: routes.auth.signUp4,
          },
          {
            name: 'Classic Sign Up',
            href: routes.auth.signUp5,
          },
        ],
      },
      {
        name: 'Sign In',
        icon: PiShieldCheckered,
        description: '"Effortless Assistance at your Fingertips!"',
        href: '#',
        subMenuItems: [
          {
            name: 'Modern Sign In',
            href: routes.auth.signIn1,
          },
          {
            name: 'Vintage Sign In',
            href: routes.auth.signIn2,
          },
          {
            name: 'Trendy Sign In',
            href: routes.auth.signIn3,
          },
          {
            name: 'Elegant Sign In',
            href: routes.auth.signIn4,
          },
          {
            name: 'Classic Sign In',
            href: routes.auth.signIn5,
          },
        ],
      },
      {
        name: 'Forgot Password',
        icon: PiLockKey,
        description:
          '"Streamline Shipments: Discover Efficiency with our Logistics!"',
        href: '#',
        subMenuItems: [
          {
            name: 'Modern Forgot Password',
            href: routes.auth.forgotPassword1,
          },
          {
            name: 'Vintage Forgot Password',
            href: routes.auth.forgotPassword2,
          },
          {
            name: 'Trendy Forgot Password',
            href: routes.auth.forgotPassword3,
          },
          {
            name: 'Elegant Forgot Password',
            href: routes.auth.forgotPassword4,
          },
          {
            name: 'Classic Forgot Password',
            href: routes.auth.forgotPassword5,
          },
        ],
      },
      {
        name: 'OTP Pages',
        icon: PiChatCenteredDots,
        description:
          '"Organize, Access, and Share: Simplify your Digital World with us!"',
        href: '#',
        subMenuItems: [
          {
            name: 'Modern OTP Page',
            href: routes.auth.otp1,
          },
          {
            name: 'Vintage OTP Page',
            href: routes.auth.otp2,
          },
          {
            name: 'Trendy OTP Page',
            href: routes.auth.otp3,
          },
          {
            name: 'Elegant OTP Page',
            href: routes.auth.otp4,
          },
          {
            name: 'Classic OTP Page',
            href: routes.auth.otp5,
          },
        ],
      },
    ],
  },
];

export const carbonMenuItemAtom = atom(carbonMenuItems[0]);
