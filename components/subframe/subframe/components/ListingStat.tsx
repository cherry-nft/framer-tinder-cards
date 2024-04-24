"use client";
/*
 * Documentation:
 * Listing Stat — https://app.subframe.com/library?component=Listing+Stat_1bb5cd59-a28f-4773-ae80-dfe706900e6b
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface ListingStatRootProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: SubframeCore.IconName;
  text?: string;
  className?: string;
}

const ListingStatRoot = React.forwardRef<HTMLElement, ListingStatRootProps>(
  function ListingStatRoot(
    {
      icon = "FeatherBedDouble",
      text,
      className,
      ...otherProps
    }: ListingStatRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex w-full items-start gap-4",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <SubframeCore.Icon
          className="text-heading-2 font-heading-2 text-default-font"
          name={icon}
        />
        {text ? (
          <span className="text-body font-body text-default-font">{text}</span>
        ) : null}
      </div>
    );
  }
);

export const ListingStat = ListingStatRoot;
