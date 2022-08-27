import { ComponentPropsWithoutRef, HTMLAttributes } from "react";
import { StyledButton } from "./styles";

export type ButtonPropsType = React.FunctionComponent<
  ComponentPropsWithoutRef<typeof StyledButton> &
    HTMLAttributes<HTMLButtonElement> & {
      children: "SEE PRODUCT" | "SHOP" | "ADD TO CART";
    }
>;
