"use client";
/*
 * Documentation:
 * sher-continue-button — https://app.subframe.com/library?component=sher-continue-button_542c2490-a922-4469-bde3-64196c81106c
 * Button — https://app.subframe.com/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Button } from "./Button";

interface NewSubcomponentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const NewSubcomponent = React.forwardRef<HTMLElement, NewSubcomponentProps>(
  function NewSubcomponent(
    { className, ...otherProps }: NewSubcomponentProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex w-full max-w-[1280px] flex-col items-start gap-4",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <SherContinueButton />
      </div>
    );
  }
);

interface SherContinueButtonRootProps
  extends React.ComponentProps<typeof Button> {
  boolean?: boolean;
  boolean2?: boolean;
  className?: string;
}

const SherContinueButtonRoot = React.forwardRef<
  HTMLElement,
  SherContinueButtonRootProps
>(function SherContinueButtonRoot(
  {
    boolean = false,
    boolean2 = false,
    className,
    ...otherProps
  }: SherContinueButtonRootProps,
  ref
) {
  return (
    <Button
      className={SubframeCore.twClassNames(
        "h-10 w-full max-w-[1280px]",
        className
      )}
      size="large"
      iconRight="FeatherCheckSquare"
      ref={ref as any}
      {...otherProps}
    >
      Confirm and Deliver!
    </Button>
  );
});

export const SherContinueButton = Object.assign(SherContinueButtonRoot, {
  NewSubcomponent,
});
