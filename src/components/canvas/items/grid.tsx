import React from "react";
import { Col, Row } from "@/components/common/grid";
import { useFormContext } from "react-hook-form";
import { TCanvasProps } from "..";

const lgValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

const getLgValue = (
  numCols: number,
): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 => {
  if (numCols <= 0) return 12;

  const lgValue = 12 / numCols;
  return (lgValues.find((value) => value === Math.round(lgValue)) || 12) as
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;
};

export default function GridItem({
  canvasItems,
  setCanvasItems,
}: TCanvasProps) {
  const { getValues } = useFormContext();
  const values = getValues();
  const gridValues = values.items?.grid || {};

  const numRows = parseInt(gridValues.row, 10) || 0;
  const numCols = parseInt(gridValues.col, 10) || 0;
  const lgValue = getLgValue(numCols);
  const gapX = parseInt(gridValues.gapColumns, 10) || 0;

  const gapClass = `gap-x-${gapX}`;

  function onRemove(id: string) {
    setCanvasItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="relative">
      {Array.from({ length: numRows }, (_, rowIndex) => (
        <Row key={rowIndex} className={gapClass}>
          {Array.from({ length: numCols }, (_, colIndex) => (
            <Col key={colIndex} lg={lgValue} className="border">
              {/* {canvasItems.map((item) => (
                <EditableSection key={item.id} id={item.id} onRemove={onRemove}>
                  {item.requiresProps
                    ? item.component({ canvasItems, setCanvasItems })
                    : item.component()}
                </EditableSection>
              ))} */}
              test
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}
