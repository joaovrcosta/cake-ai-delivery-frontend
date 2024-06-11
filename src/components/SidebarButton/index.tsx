import Link from 'next/link'
import { Button } from '../atoms/Button'
import { MenuButton, PathLink } from './styles'

interface SidebarProps {
  path: string
  title: string
  icon: any
}

export function SidebarButton({ path, icon, title }: SidebarProps) {
  return (
    <>
      <PathLink href={path}>
        {icon}
        <MenuButton backgroundColor="transparent" rounding="sm" hug={false}>
          {title}
        </MenuButton>
      </PathLink>
    </>
  )
}
