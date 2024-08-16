import { tv } from "tailwind-variants";

export const Button = tv({
  variants: {
    p: {
      xs: "!py-[10px]",
    },
    disabled: {
      true: "text-medium-gray ring-medium-gray",
    },
  },
  base: "w-full text-primary bg-black max-w-[140px] text-white rounded-[10px] p-6 whitespace-nowrap",
});
