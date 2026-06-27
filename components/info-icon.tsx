import {
  Wrench,
  Car,
  Wind,
  Brush,
  ArrowUpDown,
  Bug,
  Droplet,
  type LucideIcon,
} from 'lucide-react'
import type { InfoTopic } from '@/lib/info'

const map: Record<InfoTopic['icon'], LucideIcon> = {
  wrench: Wrench,
  car: Car,
  wind: Wind,
  broom: Brush,
  arrowupdown: ArrowUpDown,
  bug: Bug,
  droplet: Droplet,
}

export function InfoIcon({
  name,
  className,
}: {
  name: InfoTopic['icon']
  className?: string
}) {
  const Icon = map[name]
  return <Icon className={className} aria-hidden="true" />
}
