import { Col, Container, Row } from "@/components/common/grid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";
import CategoryTemplateFilter from "../template/category-template-filter";

export default function UserTemplateHero() {
  return (
    <Container className="rounded-[16px]" variant="fluid">
      <div className="h-6" />
      <Row>
        <Col lg={10}>
          <h4 className="text-3xl">My Templates:</h4>
          <div className="h-6" />

          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="text-5xl">Web3 Degen</p>
          </div>
          <div className="h-8" />
          <div className="w-[80%]">
            <CategoryTemplateFilter />
          </div>
        </Col>
        <Col lg={2} className="bg-second-place rounded-[16px]">
          <div className="h-2" />
          <Link
            className="text-[40px] font-bold text-primary hover:no-underline"
            href="/manage/upload"
          >
            Sell your own template
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
