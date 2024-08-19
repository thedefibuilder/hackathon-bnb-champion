import React from "react";
import EditableSection from "../editable-section";
import { Button } from "@/components/ui/button";

export default function ButtonItem() {
  return (
    <EditableSection id="button">
      <Button>Click, me!</Button>
    </EditableSection>
  );
}
