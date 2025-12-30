import React from "react"

type Props = {
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

export default function SectionPill({ children, className = "", icon }: Props) {
  return (
    <span className={`inline-flex items-center rounded-full border border-foreground/20 px-6 py-4 text-xs bg-background/60 backdrop-blur ${className}`}>
      {icon ? <span className="mr-2 inline-flex items-center">{icon}</span> : null}
      {children}
    </span>
  )
}
