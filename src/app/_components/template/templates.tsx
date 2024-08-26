import { Col, Row } from "src/components/common/grid";
import {
  IconArchive,
  IconFlame,
  IconPhotoHeart,
  IconPokerChip,
} from "@tabler/icons-react";
import TemplateCard from "./template-card";
import { templateItemsMap } from "@/lib/templates-item";

export default function Templates() {
  const tokenItems = Object.values(templateItemsMap).filter(
    (item) => item.category === "token",
  );
  const enftItems = Object.values(templateItemsMap).filter(
    (item) => item.category === "nft",
  );
  const daoItem = Object.values(templateItemsMap).filter(
    (item) => item.category === "dao",
  );
  return (
    <>
      <Row>
        <Col>
          <div className="flex items-center gap-3 text-2xl text-primary">
            <IconFlame stroke={2} className="h-8 w-8" />
            <h2 className="font-meidum">All Templates</h2>
          </div>
        </Col>
      </Row>
      <div className="h-12" />
      <Row>
        {Object.values(templateItemsMap).map((item) => (
          <Col lg={3}>
            <TemplateCard key={item.id} item={item} />
          </Col>
        ))}
      </Row>
      <div className="h-12" />
      <Row>
        <Col>
          <div className="flex items-center gap-3 text-2xl text-primary">
            <IconPokerChip stroke={2} className="h-8 w-8" />
            <h2 className="font-meidum">Token Landing Page</h2>
          </div>
        </Col>
      </Row>
      <div className="h-12" />
      <Row>
        {Object.values(tokenItems).map((item) => (
          <Col lg={3}>
            <TemplateCard key={item.id} item={item} />
          </Col>
        ))}
      </Row>
      <div className="h-12" />
      <Row>
        <Col>
          <div className="flex items-center gap-3 text-2xl text-primary">
            <IconPhotoHeart stroke={2} className="h-8 w-8" />
            <h2 className="font-meidum">NFT Collection Page</h2>
          </div>
        </Col>
      </Row>
      <div className="h-12" />
      <Row>
        {Object.values(enftItems).map((item) => (
          <Col lg={3}>
            <TemplateCard key={item.id} item={item} />
          </Col>
        ))}
      </Row>
      <div className="h-12" />
      <Row>
        <Col>
          <div className="flex items-center gap-3 text-2xl text-primary">
            <IconArchive stroke={2} className="h-8 w-8" />
            <h2 className="font-meidum">DAO Voting dApp</h2>
          </div>
        </Col>
      </Row>
      <div className="h-12" />
      <Row>
        {Object.values(daoItem).map((item) => (
          <Col lg={3}>
            <TemplateCard key={item.id} item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
