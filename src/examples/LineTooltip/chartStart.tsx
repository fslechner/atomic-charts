import React, { FC } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import { Data } from "../../store";
import {
  Chart,
  DrawZone,
  Line,
  Axis,
  Marker,
  Area,
  Cross,
  Tooltip,
  Values
} from "../../components";

const StyledDiv = styled.div`
  svg {
  }
`;

interface Props {
  data: any;
}

export const ChartStart: FC<Props> = ({ data }) => {
  /* const [ref, size] = useComponentSize(); */

  const outerHight = 500;
  const outerWidth = 800;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const width = outerWidth - margin.left * 2 - margin.right;
  const height = outerHight - margin.top - margin.bottom;

  const xMin = Math.min(...data.map((d: Data) => d[0]));
  const xMax = Math.max(...data.map((d: Data) => d[0]));
  const yMax = Math.max(...data.map((d: Data) => d[1]));

  const y = d3
    .scaleLinear()
    .domain([0, yMax])
    .range([height - margin.top, 0]);

  const x = d3
    .scaleTime()
    .domain([xMin, xMax])
    .range([0, width - margin.right]);

  return (
    <StyledDiv>
      <Chart data={data} scale={{ x, y }} dimension={{ height, width }}>
        <DrawZone>
          <Line />
          <Area />
        </DrawZone>
        <Tooltip>
          <Values />
          <Cross hideY />
          <Marker />
        </Tooltip>
        <Axis align="axisLeft" />
        <Axis align="axisBottom" />
      </Chart>
    </StyledDiv>
  );
};
