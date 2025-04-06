"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SectorSelectorProps {
  selectedSector: string
  onSectorChange: (sector: string) => void
}

export function SectorSelector({ selectedSector, onSectorChange }: SectorSelectorProps) {
  const sectors = ["Technology", "Real Estate", "Energy", "Consumer Goods", "Finance", "Industrials"]

  return (
    <Select value={selectedSector} onValueChange={onSectorChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select sector" />
      </SelectTrigger>
      <SelectContent>
        {sectors.map((sector) => (
          <SelectItem key={sector} value={sector}>
            {sector}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

