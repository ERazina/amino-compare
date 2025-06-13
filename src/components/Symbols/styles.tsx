import styled from "styled-components";

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Symbol = styled.span<{ $color?: string }>`
  background-color: ${({ $color }) => $color || "transparent"};
  user-select: text;
  -webkit-user-select: text;
  font-size: 16px;
  padding: 4px;
  white-space: pre;
`;
