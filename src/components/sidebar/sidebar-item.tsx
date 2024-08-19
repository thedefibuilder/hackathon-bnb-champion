import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { useDraggable } from "@dnd-kit/core";
import { TablerIcon } from "@tabler/icons-react";

type SidebarItemProps = {
  tablerIcon: TablerIcon;
  title: string;
  id: string;
};

export default function SidebarItem(props: SidebarItemProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <Card
      ref={setNodeRef}
      className="jutify-center h flex flex-col items-center p-0 py-3 hover:bg-muted"
      style={style}
      {...listeners}
      {...attributes}
    >
      <CardHeader className="p-0">
        <props.tablerIcon />
      </CardHeader>
      <CardContent className="p-0">
        <CardDescription className="text-white">{props.title}</CardDescription>
      </CardContent>
    </Card>
  );
}
