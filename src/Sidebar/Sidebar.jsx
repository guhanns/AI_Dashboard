import {
  Dashboard,
  Public,
  Article,
  School,
  AccountBalance,
  Settings,
  HelpOutline,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import { Button } from "../ui/button";
import { cn } from "../ui/utils";
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navigationItems = [
    {
        navItem: 'Dashboard',
        id: 'dashboard',
        // show: false,
        img: Dashboard,
        // imgSelected: learningSupportSelected,
        link: '/dashboard',
      },
       {
        navItem: 'Abroad',
        id: 'abroad',
        // show: false,
        img: Public,
        // imgSelected: learningSupportSelected,
        link: '/abroad',
      },

      {
        navItem: 'Blogs',
        id: 'blogs',
        // show: false,
        img: Article,
        // imgSelected: learningSupportSelected,
        link: '/blog',
      },
      {
        navItem: 'Courses',
        id: 'courses',
        // show: false,
        img: School,
        // imgSelected: learningSupportSelected,
        link: '/courses',
      },
      {
        navItem: 'University',
        id: 'university',
        // show: false,
        img: AccountBalance,
        // imgSelected: learningSupportSelected,
        link: '/university',
      },
       {
        navItem: 'Settings',
        id: 'settings',
        // show: false,
        img: Settings,
        // imgSelected: learningSupportSelected,
        link: '/setting',
      },
       {
        navItem: 'Help',
        id: 'help',
        // show: false,
        img: HelpOutline,
        // imgSelected: learningSupportSelected,
        link: '/help',
      },
       

//       { label: 'Blogs', icon: Article, href: '#blogs' },
//   { label: 'Courses', icon: School, href: '#courses' },
//   { label: 'University', icon: AccountBalance, href: '#university' },
//   { label: 'Dashboard', icon: Dashboard, href: '#dashboard', active: true },
//   { label: 'Abroad', icon: Public, href: '#abroad' },
//   { label: 'Blogs', icon: Article, href: '#blogs' },
//   { label: 'Courses', icon: School, href: '#courses' },
//   { label: 'University', icon: AccountBalance, href: '#university' },
//   { label: 'Settings', icon: Settings, href: '#settings' },
//   { label: 'Help', icon: HelpOutline, href: '#help' },
];

export function Sidebar({ isCollapsed, onToggle, className }) {
    const [sidebarMenu, setSidebarMenu] = useState([]);
  const [activeMenu, setActiveMenu] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSidebarMenu(navigationItems);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const active = navigationItems.find((item) =>
      currentPath.startsWith(item.link)
    );
    if (active) {
      setActiveMenu(active.id);
    }
  }, [location]);
  return (
    <aside className={cn(
      "bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out flex flex-col",
      isCollapsed ? "w-16" : "w-64",
      className
    )}>
      {/* Sidebar Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            {/* <div className="h-8 w-8 bg-sidebar-primary rounded-md flex items-center justify-center">
              <span className="text-sidebar-primary-foreground font-bold text-sm"></span>
            </div> */}
            <span className="font-medium text-sidebar-foreground">Studytez</span>
          </div>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="hidden lg:flex h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navigationItems.map((item) => {
            const IconComponent = item.img;
            return (
              <Link to={item?.link}>
                <li key={item?.navItem}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 h-10 px-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    activeMenu === item.id && "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground",
                    isCollapsed && "justify-center"
                  )}
                >
                  <IconComponent className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="truncate">{item.navItem}</span>
                  )}
                </Button>
              </li>
              </Link>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-sidebar-border">
          <p className="text-xs text-muted-foreground text-center">
            Version 1.0.0
          </p>
        </div>
      )}
    </aside>
  );
}