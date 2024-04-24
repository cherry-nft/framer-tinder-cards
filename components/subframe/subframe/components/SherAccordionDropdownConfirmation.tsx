"use client";
/*
 * Documentation:
 * sher-accordion-dropdown-confirmation — https://app.subframe.com/library?component=sher-accordion-dropdown-confirmation_d7768ce2-d3b1-4512-b902-b1874dbd4405
 * Accordion — https://app.subframe.com/library?component=Accordion_d2e81e20-863a-4027-826a-991d8910efd9
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Accordion } from "./Accordion";

interface SherAccordionDropdownConfirmationRootProps
  extends React.ComponentProps<typeof Accordion> {
  number?: string;
  audienceType?: string;
  className?: string;
}

const SherAccordionDropdownConfirmationRoot = React.forwardRef<
  HTMLElement,
  SherAccordionDropdownConfirmationRootProps
>(function SherAccordionDropdownConfirmationRoot(
  {
    number,
    audienceType,
    className,
    ...otherProps
  }: SherAccordionDropdownConfirmationRootProps,
  ref
) {
  return (
    <Accordion
      className={className}
      trigger={
        <div className="flex w-full items-center gap-2 pt-2 pr-3 pb-2 pl-3">
          {number ? (
            <span className="text-heading-2 font-heading-2 text-default-font">
              {number}
            </span>
          ) : null}
          {audienceType ? (
            <span className="w-full grow shrink-0 basis-0 text-heading-2 font-heading-2 text-default-font">
              {audienceType}
            </span>
          ) : null}
          <Accordion.Chevron />
        </div>
      }
      defaultOpen={false}
      ref={ref as any}
      {...otherProps}
    />
  );
});

export const SherAccordionDropdownConfirmation =
  SherAccordionDropdownConfirmationRoot;
