import Link from 'next/link'
import { Button } from '../atoms/Button'

interface SidebarProps {
  path: string
  title: string
  icon: any
}

export function SidebarButton({ path, icon, title }: SidebarProps) {
  return (
    <>
      <Link href={path}>
        {icon}
        <Button backgroundColor="transparent">{title}</Button>
      </Link>
    </>
  )
}
