"use client";
/*
 * Documentation:
 * sher-completed-search-result — https://app.subframe.com/library?component=sher-completed-search-result_0e1bafff-26d9-4916-aff5-bc8290c316ef
 * Checkbox Card — https://app.subframe.com/library?component=Checkbox+Card_de0b4dfb-3946-4702-be52-5678dd71925a
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { CheckboxCard } from "./CheckboxCard";

interface SherCompletedSearchResultRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon?: SubframeCore.IconName;
  text?: string;
  text2?: string;
  text3?: string;
  className?: string;
}

const SherCompletedSearchResultRoot = React.forwardRef<
  HTMLElement,
  SherCompletedSearchResultRootProps
>(function SherCompletedSearchResultRoot(
  {
    icon = "FeatherMinusSquare",
    text,
    text2,
    text3,
    className,
    ...otherProps
  }: SherCompletedSearchResultRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex w-full items-center justify-between rounded bg-neutral-50 pt-6 pr-6 pb-6 pl-6",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <SubframeCore.Icon
        className="text-body font-body text-default-font"
        name={icon}
      />
      {text ? (
        <span className="text-body-bold font-body-bold text-default-font">
          {text}
        </span>
      ) : null}
      <div className="flex h-full items-center justify-end gap-2 bg-success-600">
        <CheckboxCard>
          <div className="flex flex-col items-end justify-center">
            {text2 ? (
              <span className="text-body-bold font-body-bold text-success-700">
                {text2}
              </span>
            ) : null}
            {text3 ? (
              <span className="text-caption font-caption text-subtext-color">
                {text3}
              </span>
            ) : null}
          </div>
        </CheckboxCard>
      </div>
    </div>
  );
});

export const SherCompletedSearchResult = SherCompletedSearchResultRoot;
