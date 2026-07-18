import Image, { ImageProps } from "next/image";

import { cn } from "@/lib/utils";

interface ImageContainerProps extends Omit<ImageProps, "className"> {
  wrapperClassName?: string;
  imageClassName?: string;
  hover?: boolean;
}

export default function ImageContainer({
  wrapperClassName,
  imageClassName,
  hover = true,
  alt,
  ...props
}: ImageContainerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl",
        hover && "group",
        wrapperClassName
      )}
    >
      <Image
        alt={alt}
        {...props}
        className={cn(
          "h-full w-full object-cover transition-transform duration-300",
          hover && "group-hover:scale-[1.02]",
          imageClassName
        )}
      />
    </div>
  );
}