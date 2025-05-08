import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import CustomInput from "..";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string | number;
  type?: string;
  required?: boolean;
  [key: string]: any; // To allow additional props
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  type,
  defaultValue = "",
  ...rest
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {rest.required && <span className="text-red">*</span>}
          </FormLabel>
          <FormControl>
            <CustomInput
              name={name}
              value={field.value || defaultValue}
              type={type as "number" | "text" | "email" | "password"}
              onChange={(e) => {
                field.onChange(e.target.value);
              }}
              {...rest}
            />
          </FormControl>
          <FormMessage>{errors[name]?.message as string}</FormMessage>
        </FormItem>
      )}
    ></FormField>
  );
};

export default FormInput;
