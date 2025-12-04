import { designTokens } from './design-tokens';

export const componentStyles = {
  navigation: {
    nav: (scrolled: boolean) => `fixed top-0 w-full z-50 transition-all duration-300 bg-[#333333] shadow-lg`,
    container: "max-w-none mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[152px]",
    navRow: "flex justify-between items-center h-14 sm:h-16",
    logo: "flex-shrink-0",
    logoButton: "text-xl font-bold text-gray-900 hover:text-blue-600 font-inter",
    menuDesktop: "hidden md:block",
    menuList: "flex space-x-6",
    menuItem: (active: boolean) => `px-3 py-2 text-[14px] font-normal font-inter transition-all duration-200 text-[#E0E2E3] hover:text-blue-400 hover:bg-blue-400/5 rounded-md`,
    mobileButton: "md:hidden p-2 text-[#E0E2E3]",
    mobileIcon: "h-6 w-6",
  },
  
  footer: {
    section: "bg-gray-900 text-white py-8",
    container: designTokens.spacing.container,
    content: "text-center text-gray-400",
  }
};
