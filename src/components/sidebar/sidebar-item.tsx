import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { useDraggable } from "@dnd-kit/core";
import { TSidebarItem } from "@/lib/sidebar-item";

type SidebarItemProps = {
  item: TSidebarItem;
};

export default function SidebarItem({ item }: SidebarItemProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id,
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
        <item.icon />
      </CardHeader>
      <CardContent>
        <CardDescription>{item.title}</CardDescription>
      </CardContent>
    </Card>
  );
}
