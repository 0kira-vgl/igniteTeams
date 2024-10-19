import { TextInput, TextInputProps, View } from "react-native";
import { twMerge } from "tailwind-merge";

export function Input({
  className,
  ...rest
}: TextInputProps & { className?: string }) {
  return (
    <TextInput
      {...rest}
      style={{ fontSize: 18 }}
      className={twMerge(
        "w-full h-16 bg-GRAY_700 text-zinc-50 rounded-md p-4",
        className
      )}
      placeholderTextColor="#7C7C8A"
    />
  );
}
