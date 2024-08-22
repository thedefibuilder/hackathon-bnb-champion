import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { useDraggable } from "@dnd-kit/core";
import { TSidebarItem } from "@/lib/sidebar-item";

type SidebarItemProps = {
  item: TSidebarItem;
};

export default function SidebarItem({ item }: SidebarItemProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.itemName,
    data: { itemName: item.itemName, sidebar: true },
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
        <item.icon />
      </CardHeader>
      <CardContent className="p-0">
        <CardDescription className="text-white">{item.title}</CardDescription>
      </CardContent>
    </Card>
  );
}
