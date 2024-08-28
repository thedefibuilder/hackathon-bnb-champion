import { Col, Row } from "src/components/common/grid";
import UserTemplateCard from "./user-template-card";
import { userTemplateItemsMap } from "@/lib/user-templates-items";

export default function UserTemplates() {
  const items = Object.values(userTemplateItemsMap);

  const recentItems = items.slice(0, 4);

  return (
    <>
      <Row>
        <Col>
          <h2 className="text-2xl font-medium text-[#989898]">
            Edited recently
          </h2>
          <div className="h-2" />
          <div className="bg-grey h-0.5 w-full bg-[#989898]" />
        </Col>
      </Row>
      <div className="h-8" />
      <Row>
        {recentItems.map((item) => (
          <Col lg={4} className="mb-8" key={item.id}>
            <UserTemplateCard item={item} />
          </Col>
        ))}
      </Row>
      <div className="h-12" />
      <Row>
        <Col>
          <h2 className="text-2xl font-medium text-[#989898]">All</h2>
          <div className="h-2" />
          <div className="bg-grey h-0.5 w-full bg-[#989898]" />
        </Col>
      </Row>
      <div className="h-8" />
      <Row>
        {items.map((item) => (
          <Col lg={3} className="mb-8" key={item.id}>
            <UserTemplateCard item={item} />
          </Col>
        ))}
      </Row>
      <div className="h-12" />
    </>
  );
}
