import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps
    extends VariantProps<typeof buttonVariants>,
        ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    isLoading?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    className?: string;
    iconOnly?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    isLoading = false,
    disabled = false,
    startIcon,
    endIcon,
    className,
    variant,
    size,
    iconOnly = false,
    ...props
}) => {
    return (
        <ShadcnButton
            className={cn(
                className,
                buttonVariants({ variant, size }),
                isLoading || disabled ? "opacity-50 cursor-not-allowed" : "",
                iconOnly ? "p-2" : "" // Adjust padding for icon-only buttons
            )}
            disabled={isLoading || disabled}
            {...props}
        >
            {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
            ) : iconOnly ? (
                startIcon || endIcon
            ) : (
                <>
                    {startIcon && <span className="mr-2">{startIcon}</span>}
                    {children}
                    {endIcon && <span className="ml-2">{endIcon}</span>}
                </>
            )}
        </ShadcnButton>
    );
};

export default Button;