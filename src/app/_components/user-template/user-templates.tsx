import { Col, Row } from "src/components/common/grid";
import UserTemplateCard from "./user-template-card";
import { userTemplateItemsMap } from "@/lib/user-templates-items";
import { TCategoryFilter } from "@/lib/schemas/category-filter";
import { useFormContext } from "react-hook-form";
import { categoryMap } from "../template/templates";

export default function UserTemplates() {
  const { watch } = useFormContext<TCategoryFilter>();
  const selectedCategory = watch("category");
  const items = Object.values(userTemplateItemsMap);

  const categoryKey = categoryMap[selectedCategory] || "all";
  const filteredItems =
    categoryKey !== "all"
      ? items.filter((item) => item.category === categoryKey)
      : items;

  console.log(selectedCategory);

  const recentItems = items.slice(0, 4);

  return !selectedCategory || selectedCategory === "Show All" ? (
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
          <Col lg={3} md={2} className="mb-8" key={item.id}>
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
          <Col lg={3} md={2} className="mb-8" key={item.id}>
            <UserTemplateCard item={item} />
          </Col>
        ))}
      </Row>
      <div className="h-12" />
    </>
  ) : (
    <>
      <Row>
        <Col>
          <div className="flex items-center gap-3 text-2xl text-primary">
            <h2 className="font-medium">{`${selectedCategory} Templates`}</h2>
          </div>
        </Col>
      </Row>
      <div className="h-12" />
      <Row>
        {filteredItems.map((item) => (
          <Col lg={3} md={2} key={item.id}>
            <UserTemplateCard item={item} />
            <div className="h-12" />
          </Col>
        ))}
      </Row>
    </>
  );
}
