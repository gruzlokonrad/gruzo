import { faPeopleGroup, faDesktop, faWandMagicSparkles, faChartLine, faNewspaper, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { menuItem } from '@/components/views/navbar/Header'

export const menuItems: menuItem[] = [
  {
    desktopName: "O nas",
    mobileName: "o nas",
    link: "about",
    icon: faPeopleGroup,
  },
  {
    desktopName: "Strony internetowe",
    mobileName: "www",
    link: "website",
    icon: faDesktop,
  },
  {
    desktopName: "Projekty graficzne",
    mobileName: "design",
    link: "design",
    icon: faWandMagicSparkles,
  },
  {
    desktopName: "SEO",
    mobileName: "seo",
    link: "seo",
    icon: faChartLine,
  },
  {
    desktopName: "Blog",
    mobileName: "blog",
    link: "blog",
    icon: faNewspaper,
  },
]
