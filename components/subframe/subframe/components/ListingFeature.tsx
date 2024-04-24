"use client";
/*
 * Documentation:
 * Listing Feature — https://app.subframe.com/library?component=Listing+Feature_52dc87fa-8ac9-4fb0-a59e-a2fe33c04451
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface ListingFeatureRootProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: SubframeCore.IconName;
  title?: string;
  description?: string;
  className?: string;
}

const ListingFeatureRoot = React.forwardRef<
  HTMLElement,
  ListingFeatureRootProps
>(function ListingFeatureRoot(
  {
    icon = "FeatherLampDesk",
    title,
    description,
    className,
    ...otherProps
  }: ListingFeatureRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex h-full w-full items-center gap-4",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex h-12 w-12 flex-none items-center justify-center gap-4">
        <SubframeCore.Icon
          className="text-heading-2 font-heading-2 text-default-font"
          name={icon}
        />
      </div>
      <div className="flex flex-col items-start gap-1">
        {title ? (
          <span className="text-body-bold font-body-bold text-default-font">
            {title}
          </span>
        ) : null}
        {description ? (
          <span className="text-caption font-caption text-subtext-color">
            {description}
          </span>
        ) : null}
      </div>
    </div>
  );
});

export const ListingFeature = ListingFeatureRoot;
