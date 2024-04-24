"use client";
/*
 * Documentation:
 * sher-step-count — https://app.subframe.com/library?component=sher-step-count_3307a7b1-6b95-49d5-8f09-fee72b9289ee
 * Stepper — https://app.subframe.com/library?component=Stepper_3c5d47dc-1b1a-45d9-b244-18422d7bfb56
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Stepper } from "./Stepper";

interface SherStepCountRootProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SherStepCountRoot = React.forwardRef<HTMLElement, SherStepCountRootProps>(
  function SherStepCountRoot(
    { className, ...otherProps }: SherStepCountRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex min-h-[80px] w-full items-center",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <Stepper.Step
          variant="completed"
          firstStep={true}
          stepNumber="1"
          label="Connect Your Wallet"
        />
        <Stepper.Step
          variant="active"
          stepNumber="2"
          label="Target an Audience"
        />
        <Stepper.Step stepNumber="3" label="Upload Media and Details" />
        <Stepper.Step
          lastStep={true}
          stepNumber="4"
          label="Confirm and Deliver!"
        />
      </div>
    );
  }
);

export const SherStepCount = SherStepCountRoot;
