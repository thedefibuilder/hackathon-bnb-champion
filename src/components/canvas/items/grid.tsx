import React from "react";
import { Col, Row } from "@/components/common/grid";
import { useFormContext } from "react-hook-form";
import { TCanvasForm } from "@/lib/canvas-item";

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

type TGridItemProps = {
  id: string;
};

export default function GridItem({ id }: TGridItemProps) {
  const { getValues } = useFormContext<TCanvasForm>();
  const gridValues = getValues(id);

  const numRows = parseInt(gridValues?.settings.row, 10) || 0;
  const numCols = parseInt(gridValues?.settings.col, 10) || 0;
  const lgValue = getLgValue(numCols);
  const gapX = parseInt(gridValues?.settings.gapColumns, 10) || 0;

  const gapClass = `gap-x-${gapX}`;

  return (
    <div className="relative">
      {Array.from({ length: numRows }, (_, rowIndex) => (
        <Row key={rowIndex} className={gapClass}>
          {Array.from({ length: numCols }, (_, colIndex) => (
            <Col key={colIndex} lg={lgValue} className="border">
              This is a grid item {rowIndex} {colIndex}
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}
