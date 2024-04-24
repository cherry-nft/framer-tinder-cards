"use client";
/*
 * Documentation:
 * sher-box-select — https://app.subframe.com/library?component=sher-box-select_8b2b9571-84b8-4536-958e-08512dd88f69
 * Dropdown Menu — https://app.subframe.com/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Icon Button — https://app.subframe.com/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { DropdownMenu } from "./DropdownMenu";
import { IconButton } from "./IconButton";

interface SherBoxSelectRootProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SherBoxSelectRoot = React.forwardRef<HTMLElement, SherBoxSelectRootProps>(
  function SherBoxSelectRoot(
    { className, ...otherProps }: SherBoxSelectRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex w-full flex-col items-center justify-end bg-neutral-50",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <SubframeCore.DropdownMenu.Root>
          <SubframeCore.DropdownMenu.Trigger asChild={true}>
            <IconButton icon="FeatherBoxSelect" />
          </SubframeCore.DropdownMenu.Trigger>
          <SubframeCore.DropdownMenu.Portal>
            <SubframeCore.DropdownMenu.Content
              side="bottom"
              align="end"
              sideOffset={8}
              asChild={true}
            >
              <DropdownMenu />
            </SubframeCore.DropdownMenu.Content>
          </SubframeCore.DropdownMenu.Portal>
        </SubframeCore.DropdownMenu.Root>
      </div>
    );
  }
);

export const SherBoxSelect = SherBoxSelectRoot;
