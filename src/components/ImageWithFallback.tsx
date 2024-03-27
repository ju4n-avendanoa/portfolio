"use client";

import { ImageProps } from "next/image";
import { useState } from "react";
import Image from "next/image";

export interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, fallbackSrc, alt, height, width, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default ImageWithFallback;
