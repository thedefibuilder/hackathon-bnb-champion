import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { useDraggable } from "@dnd-kit/core";

type SidebarItemProps = {
  lucideIcon: LucideIcon;
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
      className="h-[120px] w-[150px]"
      style={style}
      {...listeners}
      {...attributes}
    >
      <CardHeader>
        <props.lucideIcon />
      </CardHeader>
      <CardContent>
        <CardDescription>{props.title}</CardDescription>
      </CardContent>
    </Card>
  );
}
