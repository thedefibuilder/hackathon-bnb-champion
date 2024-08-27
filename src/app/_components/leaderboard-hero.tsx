import { Col, Row } from "@/components/common/grid";
import Image from "next/image";
import LeaderboardPlacement from "./leaderboard-placement";

export default function LeaderboardHero() {
  return (
    <Row>
      <Col lg={4}>
        <div className="flex gap-3">
          <Image
            src="/social-leaderboard.png"
            alt="social-leaderboard"
            width={100}
            height={100}
          />
          <h1 className="text-5xl font-medium tracking-wide">
            Creators Leaderboard
          </h1>
        </div>
        <div className="h-12" />

        <div className="flex items-center gap-6">
          <div className="relative w-52 rounded-[16px] bg-background px-4">
            <Image
              src="/account-box.png"
              alt="account-box"
              width={130}
              height={130}
              className="absolute left-0"
            />
            <div className="h-4" />
            <div className="relative z-20">
              <h2 className="text-[32px] font-medium text-primary">
                Total Creators
              </h2>
              <div className="h-8" />
              <div className="flex w-full justify-end">
                <p className="text-[32px] font-bold">400</p>
              </div>
            </div>
            <div className="h-4" />
          </div>

          <div className="relative w-52 rounded-[16px] bg-background px-4">
            <Image
              src="/total-sales.png"
              alt="total-sales"
              width={105}
              height={105}
              className="absolute left-0"
            />
            <div className="h-4" />
            <div className="relative z-20">
              <h2 className="w-1/2 text-[32px] font-medium text-primary">
                Total Sales
              </h2>
              <div className="h-8" />
              <div className="flex w-full justify-end">
                <p className="text-[32px] font-bold">$300,200</p>
              </div>
            </div>
            <div className="h-4" />
          </div>
        </div>
      </Col>
      <Col lg={8}>
        <LeaderboardPlacement />
      </Col>
    </Row>
  );
}
