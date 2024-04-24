"use client";
/*
 * Documentation:
 * Template Card — https://app.subframe.com/library?component=Template+Card_283360ea-9072-403c-bab3-0dd4e13d41fa
 * Badge — https://app.subframe.com/library?component=Badge_97bdb082-1124-4dd7-a335-b14b822d0157
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Badge } from "./Badge";

interface TemplateCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "neutral" | "blue" | "green" | "red";
  image?: string;
  title?: string;
  description?: string;
  tag?: string;
  className?: string;
}

const TemplateCardRoot = React.forwardRef<HTMLElement, TemplateCardRootProps>(
  function TemplateCardRoot(
    {
      variant = "neutral",
      image,
      title,
      description,
      tag,
      className,
      ...otherProps
    }: TemplateCardRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/283360ea flex w-full min-w-[256px] cursor-pointer items-center gap-6 rounded border border-solid border-neutral-border bg-default-background pt-4 pr-4 pb-4 pl-4 shadow-default hover:bg-neutral-50",
          {
            "hover:bg-error-50": variant === "red",
            "hover:bg-success-50": variant === "green",
            "hover:bg-brand-50": variant === "blue",
          },
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div
          className={SubframeCore.twClassNames(
            "flex h-24 w-24 flex-none items-center justify-center gap-2 overflow-hidden rounded bg-neutral-100 pt-2 pr-2 pb-2 pl-2",
            {
              "bg-error-100": variant === "red",
              "bg-success-100": variant === "green",
              "bg-brand-100": variant === "blue",
            }
          )}
        >
          {image ? <img className="h-12 w-12 flex-none" src={image} /> : null}
        </div>
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2">
          <div className="flex flex-col items-start">
            {title ? (
              <span className="line-clamp-1 w-full text-body-bold font-body-bold text-default-font">
                {title}
              </span>
            ) : null}
            {description ? (
              <span className="line-clamp-2 text-caption font-caption text-subtext-color">
                {description}
              </span>
            ) : null}
          </div>
          <Badge variant="neutral">{tag}</Badge>
        </div>
      </div>
    );
  }
);

export const TemplateCard = TemplateCardRoot;
