import { Pressable, PressableProps, Text } from "react-native";
import { tv } from "tailwind-variants";

type ButtonProps = PressableProps & {
  title: string;
  variant?: "primary" | "secondary";
};

export function Button({ title, variant, ...rest }: ButtonProps) {
  const button = tv({
    base: "w-full min-h-[56px] max-h-[56px] rounded-md justify-center items-center mb-6",
    variants: {
      color: {
        primary: "bg-GREEN_700",
        secondary: "bg-RED_DARK",
      },
    },
    defaultVariants: {
      color: "primary", // define "primary" como o valor padrão
    },
  });

  return (
    <Pressable {...rest} className={button({ color: variant })}>
      <Text className="text-white font-bold text-lg">{title}</Text>
    </Pressable>
  );
}
