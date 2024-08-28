import { Col, Row } from "@/components/common/grid";
import { cn } from "@/lib/utils";
import {
  IconEye,
  IconMessageUser,
  IconShoppingCart,
  IconTemplate,
} from "@tabler/icons-react";
import Image from "next/image";

export default function LeaderboardPlacement() {
  const data = [
    {
      avatar: "/second-place-avatar.png",
      name: "CZ",
      stars: "/stars.png",
      templates: 58,
      sales: 5500,
      reviews: 500,
      views: 500,
      place: "second",
    },
    {
      avatar: "/first-place-avatar.png",
      name: "My Space Tom",
      stars: "/stars.png",
      templates: 90,
      sales: 7000,
      reviews: 800,
      views: 900,
      place: "first",
    },
    {
      avatar: "/third-place-avatar.png",
      name: "Waifu",
      stars: "/stars.png",
      templates: 72,
      sales: 6000,
      reviews: 300,
      views: 1200,
      place: "third",
    },
  ];
  return (
    <Row>
      {data.map((user, index) => (
        <Col lg={4} md={2} key={index}>
          <div
            className={cn("rounded-[16px]", {
              "-mt-8 h-[400px] bg-first-place": user.place === "first",
              "bg-second-place": user.place === "second",
              "bg-third-place": user.place === "third",
            })}
          >
            <div className="h-6" />
            <div className="flex flex-col items-center justify-center">
              <Image
                src={user.avatar}
                alt={`${user.name}-avatar`}
                width={170}
                height={170}
              />
              <p className="text-2xl">{user.name}</p>
              <div className="h-2" />
              <Image src={user.stars} alt="stars" width={136} height={24} />
            </div>
            <div className="h-6" />
            <div className="flex items-center justify-evenly">
              <div className="flex items-center gap-2 text-[#989898]">
                <IconTemplate stroke={2} />
                <p className="font-bold">{user.templates} templates</p>
              </div>
              <div className="flex items-center gap-2 text-[#989898]">
                <IconShoppingCart stroke={2} />
                <p className="font-bold">{user.sales} sales</p>
              </div>
            </div>
            <div className="h-2" />
            <div className="flex items-center justify-evenly">
              <div className="flex items-center gap-2 text-[#989898]">
                <IconMessageUser stroke={2} />
                <p className="font-bold">{user.reviews} reviews</p>
              </div>
              <div className="flex items-center gap-2 text-[#989898]">
                <IconEye stroke={2} />
                <p className="font-bold">{user.views} views</p>
              </div>
            </div>
            <div className="h-4" />
          </div>
        </Col>
      ))}
    </Row>
  );
}
