"use client"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

function EmptyProjectsState() {
  return (
    <div className="flex min-h-40 items-center justify-center rounded-xl border border-dashed border-surface-border-subtle px-4 text-center text-sm text-copy-muted">
      No projects to show yet.
    </div>
  )
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      aria-label="Projects"
      className={cn(
        "absolute top-3 bottom-3 left-3 z-20 flex w-80 flex-col rounded-2xl border border-surface-border bg-surface/95 shadow-2xl backdrop-blur transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1.5rem)] pointer-events-none",
      )}
    >
      <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
        <h2 className="text-sm font-semibold text-copy-primary">Projects</h2>
        <Button aria-label="Close projects sidebar" onClick={onClose} size="icon-sm" variant="ghost">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs className="min-h-0 flex-1 p-4" defaultValue="my-projects">
        <TabsList className="w-full" variant="line">
          <TabsTrigger className="flex-1" value="my-projects">
            My Projects
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="shared">
            Shared
          </TabsTrigger>
        </TabsList>
        <TabsContent className="mt-4" value="my-projects">
          <EmptyProjectsState />
        </TabsContent>
        <TabsContent className="mt-4" value="shared">
          <EmptyProjectsState />
        </TabsContent>
      </Tabs>

      <div className="border-t border-surface-border p-4">
        <Button className="w-full" type="button">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  )
}
