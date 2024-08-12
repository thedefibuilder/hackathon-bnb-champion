import React from "react";
import { Container } from "./grid";

interface BannerContainerProps {
  children: React.ReactNode;
}

export default function BannerContainer({ children }: BannerContainerProps) {
  return (
    <Container variant="fluid" className="!p-0">
      <div className="bg-main-gradient w-full rounded-3xl p-6">{children}</div>
    </Container>
  );
}
