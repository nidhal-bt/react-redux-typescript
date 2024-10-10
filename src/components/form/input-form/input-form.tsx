import { FieldValues, UseControllerProps } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";

type Props<T extends FieldValues> = UseControllerProps<T> & {
  // name: string;
  placeholder?: string;
  label: string;
  description?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
};

function InputForm<T extends FieldValues>({
  control,
  placeholder,
  label,
  name,
  description,
  className,
  inputClassName,
  labelClassName,
}: Props<T>) {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className={labelClassName}>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className={inputClassName}
            />
          </FormControl>
          {<FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default InputForm;
