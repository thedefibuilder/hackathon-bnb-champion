import { Col, Row } from "@/components/common/grid";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  IconArchive,
  IconPhotoHeart,
  IconPokerChip,
  IconWritingSign,
  TablerIcon,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

type TTabBodyContent = {
  id: number;
  sales: string;
  user: string;
  image: string;
  templates: number;
  icons: TablerIcon[];
};

export default function LeaderboardTable() {
  const tableHeadContent = ["#", "Sales", "Creator", "Templates", "Categories"];
  const tabBodyContent: TTabBodyContent[] = [
    {
      id: 1,
      sales: "$5500",
      user: "MySpace Tom",
      image: "/first-place-avatar.png",
      templates: 58,
      icons: [IconPhotoHeart, IconPokerChip, IconArchive, IconWritingSign],
    },
    {
      id: 2,
      sales: "$5500",
      user: "Jane Doe",
      image: "/second-place-avatar.png",
      templates: 42,
      icons: [IconPhotoHeart, IconPokerChip, IconArchive, IconWritingSign],
    },
    {
      id: 3,
      sales: "$5500",
      user: "John Smith",
      image: "/third-place-avatar.png",
      templates: 36,
      icons: [IconPhotoHeart, IconPokerChip, IconArchive, IconWritingSign],
    },
    {
      id: 4,
      sales: "$5500",
      user: "Alice Johnson",
      image: "/third-place-avatar.png",
      templates: 29,
      icons: [IconPhotoHeart, IconPokerChip, IconArchive, IconWritingSign],
    },
    {
      id: 5,
      sales: "$5500",
      user: "Bob Williams",
      image: "/third-place-avatar.png",
      templates: 54,
      icons: [IconPhotoHeart, IconPokerChip, IconArchive, IconWritingSign],
    },
    {
      id: 6,
      sales: "$5500",
      user: "Charlie Brown",
      image: "/third-place-avatar.png",
      templates: 22,
      icons: [IconPhotoHeart, IconPokerChip, IconArchive, IconWritingSign],
    },
    {
      id: 7,
      sales: "$5500",
      user: "Emily Davis",
      image: "/third-place-avatar.png",
      templates: 31,
      icons: [IconPhotoHeart, IconPokerChip, IconArchive, IconWritingSign],
    },
    {
      id: 8,
      sales: "$5500",
      user: "Michael Taylor",
      image: "/third-place-avatar.png",
      templates: 45,
      icons: [IconPhotoHeart, IconPokerChip, IconArchive, IconWritingSign],
    },
    {
      id: 9,
      sales: "$5500",
      user: "Samantha Lee",
      image: "/third-place-avatar.png",
      templates: 39,
      icons: [IconPhotoHeart, IconPokerChip, IconArchive, IconWritingSign],
    },
    {
      id: 10,
      sales: "$5500",
      user: "David Wilson",
      image: "/third-place-avatar.png",
      templates: 50,
      icons: [IconPhotoHeart, IconPokerChip, IconArchive, IconWritingSign],
    },
  ];

  return (
    <Row>
      <Col>
        <Table className="w-full overflow-hidden rounded-[16px] border">
          <TableHeader className="w-full bg-background">
            <TableRow className="hover:bg-background">
              {tableHeadContent.map((item, id) => (
                <TableHead className="text-xl text-primary" key={id}>
                  {item}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tabBodyContent.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  {user.id === 1 ? (
                    <Image
                      src="/first-place-medal.png"
                      alt="first place"
                      width={34}
                      height={34}
                    />
                  ) : user.id === 2 ? (
                    <Image
                      src="/second-place.png"
                      alt="second place"
                      width={34}
                      height={34}
                    />
                  ) : user.id === 3 ? (
                    <Image
                      src="/third-place.png"
                      alt="third place"
                      width={34}
                      height={34}
                    />
                  ) : (
                    <p className="ml-2 text-xl">{user.id}</p>
                  )}
                </TableCell>
                <TableCell>
                  <div
                    className={cn(
                      "flex h-8 w-1/2 flex-col items-center justify-center rounded-full px-2 text-xl",
                      {
                        "bg-first-place": user.id === 1,
                        "bg-second-place": user.id === 2,
                        "bg-third-place": user.id === 3,
                      },
                    )}
                  >
                    {user.sales}
                  </div>
                </TableCell>
                <TableCell className="flex items-center gap-2 text-2xl">
                  <Image
                    src={user.image}
                    alt="user image"
                    width={48}
                    height={48}
                  />
                  {user.user}
                </TableCell>

                <TableCell className="text-2xl">{user.templates}</TableCell>
                <TableCell className="flex items-center gap-2">
                  {user.icons.map((Icon, index) => (
                    <Icon
                      key={index}
                      size={32}
                      className="rounded border border-primary p-2 text-primary"
                    />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Col>
    </Row>
  );
}
