import { TextInput, TextInputProps } from "react-native";
import { twMerge } from "tailwind-merge";

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({
  className,
  inputRef,
  ...rest
}: InputProps & { className?: string }) {
  return (
    <TextInput
      {...rest}
      ref={inputRef}
      style={{ fontSize: 18 }}
      className={twMerge(
        "w-full h-16 bg-GRAY_700 text-zinc-50 rounded-md p-4",
        className
      )}
      placeholderTextColor="#7C7C8A"
    />
  );
}
