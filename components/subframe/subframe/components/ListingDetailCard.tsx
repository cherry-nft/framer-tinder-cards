"use client";
/*
 * Documentation:
 * Listing Detail Card — https://app.subframe.com/library?component=Listing+Detail+Card_2fb21b42-4883-405f-9591-6342cc2a0e8c
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface ListingDetailCardRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon?: SubframeCore.IconName;
  title?: string;
  description?: string;
  className?: string;
}

const ListingDetailCardRoot = React.forwardRef<
  HTMLElement,
  ListingDetailCardRootProps
>(function ListingDetailCardRoot(
  {
    icon = "FeatherBedDouble",
    title,
    description,
    className,
    ...otherProps
  }: ListingDetailCardRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex w-full max-w-[192px] flex-col items-start gap-6 rounded border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <SubframeCore.Icon
        className="text-heading-2 font-heading-2 text-default-font"
        name={icon}
      />
      <div className="flex flex-col items-start gap-2">
        {title ? (
          <span className="text-body-bold font-body-bold text-default-font">
            {title}
          </span>
        ) : null}
        {description ? (
          <span className="text-caption font-caption text-default-font">
            {description}
          </span>
        ) : null}
      </div>
    </div>
  );
});

export const ListingDetailCard = ListingDetailCardRoot;
