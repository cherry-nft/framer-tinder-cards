"use client";
/*
 * Documentation:
 * Listing Select — https://app.subframe.com/library?component=Listing+Select_480d03ec-a8c9-496b-b2be-2da5936c65b5
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface ListingSelectRootProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: string;
  className?: string;
}

const ListingSelectRoot = React.forwardRef<HTMLElement, ListingSelectRootProps>(
  function ListingSelectRoot(
    { label, value, className, ...otherProps }: ListingSelectRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/480d03ec flex w-full cursor-pointer items-start gap-2 pt-4 pr-5 pb-4 pl-5 hover:bg-neutral-100 active:bg-neutral-200",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1">
          {label ? (
            <span className="line-clamp-1 w-full text-caption font-caption text-subtext-color">
              {label}
            </span>
          ) : null}
          <div className="flex w-full items-start gap-2">
            {value ? (
              <span className="w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                {value}
              </span>
            ) : null}
            <SubframeCore.Icon
              className="text-heading-3 font-heading-3 text-default-font"
              name="FeatherChevronDown"
            />
          </div>
        </div>
      </div>
    );
  }
);

export const ListingSelect = ListingSelectRoot;
