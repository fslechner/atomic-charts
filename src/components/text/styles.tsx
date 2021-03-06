import styled from "styled-components";

export interface StyleProps {
  /**
   * Define a color for the label text.
   * @default #b8b8b8
   */
  color?: string;

  /**
   * Define a size for the label text.
   * @default 14
   */
  size?: number;

  /**
   * Define a font family for the label text.
   * @default undefined
   */
  family?: string;

  /**
   * Define a weight for the label text.
   * @default undefined
   */
  weight?: number;

  // TODO: does not work. Fix issue or remove
  /**
   * Define a letterSpacing for the label text.
   * @default undefined
   */
  letterSpacing?: string;

  transform?: string;
}

//tslint:disable
export const StyledDiv = styled.div<StyleProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.size ? props.size + "px" : "")};
  font-family: ${(props) => props.family || "inherit"};
  font-weight: ${(props) => props.weight};
  letter-spacing: ${(props) => props.letterSpacing};
`;
