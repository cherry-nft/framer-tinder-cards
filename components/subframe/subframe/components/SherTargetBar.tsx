"use client";
/*
 * Documentation:
 * sher-target-bar — https://app.subframe.com/library?component=sher-target-bar_b3a48f33-0fdf-4b9f-97bb-df8d295cf249
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface SherTargetBarRootProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  userTotal?: string;
  className?: string;
}

const SherTargetBarRoot = React.forwardRef<HTMLElement, SherTargetBarRootProps>(
  function SherTargetBarRoot(
    { text, userTotal, className, ...otherProps }: SherTargetBarRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex w-full flex-col items-center gap-2 rounded border border-solid border-neutral-border bg-warning-200 pt-6 pr-6 pb-6 pl-6 shadow-default",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {text ? (
          <span className="w-full text-body font-body text-default-font">
            {text}
          </span>
        ) : null}
        {userTotal ? (
          <span className="w-full text-heading-2 font-heading-2 text-default-font">
            {userTotal}
          </span>
        ) : null}
      </div>
    );
  }
);

export const SherTargetBar = SherTargetBarRoot;
