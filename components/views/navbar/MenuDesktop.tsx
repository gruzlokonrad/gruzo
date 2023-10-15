import { tailwindClassMerge } from "@/utils/tailwindClassMerge"
import { menuItems } from "@/utils/utils"
import Link from "next/link"

export const MenuDesktop = ({ className }: { className?: string }) => {
  return (
    <div className={tailwindClassMerge(`flex items-center gap-6 xl:gap-8 ${className}`)}>
      {menuItems.map(({ desktopName, link }, index) => (
        <Link key={index} href={link} className="text-base">{desktopName}</Link>
      ))}
    </div>
  )
}