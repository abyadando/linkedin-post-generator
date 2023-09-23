import {
  BarChart3,
  FilePlus2,
  Gauge,
  LayoutDashboard,
  ScrollText,
  Sparkles,
} from "lucide-react";

export type SidebarConfig = typeof sidebarConfig;
export type SidebarLink = (typeof sidebarConfig.links)[0];

const sidebarConfig = {
  links: [
    {
      icon: Gauge,
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: FilePlus2,
      title: "Create post",
      href: "/create-post",
    },
    {
      icon: ScrollText,
      title: "My posts",
      href: "/posts",
    },
    {
      icon: Sparkles,
      title: "Customize",
      href: "/customize",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      href: "/analytics",
    },
  ],
};

export default sidebarConfig;
