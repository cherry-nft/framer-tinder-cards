"use client";
/*
 * Documentation:
 * sher-audience-table — https://app.subframe.com/library?component=sher-audience-table_ad251377-6d39-40bc-8481-6b50c0260caa
 * Skeleton Text — https://app.subframe.com/library?component=Skeleton+Text_a9aae3f0-955e-4607-a272-374f1dc18f4b
 * Table — https://app.subframe.com/library?component=Table_142dfde7-d0cc-48a1-a04c-a08ab2252633
 * Badge — https://app.subframe.com/library?component=Badge_97bdb082-1124-4dd7-a335-b14b822d0157
 * sher-box-select — https://app.subframe.com/library?component=sher-box-select_8b2b9571-84b8-4536-958e-08512dd88f69
 * Dropdown Menu — https://app.subframe.com/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Icon Button — https://app.subframe.com/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { SkeletonText } from "./SkeletonText";
import { Table } from "./Table";
import { Badge } from "./Badge";
import { SherBoxSelect } from "./SherBoxSelect";
import { DropdownMenu } from "./DropdownMenu";
import { IconButton } from "./IconButton";

interface SherAudienceTableRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  className?: string;
}

const SherAudienceTableRoot = React.forwardRef<
  HTMLElement,
  SherAudienceTableRootProps
>(function SherAudienceTableRoot(
  {
    text,
    text2,
    text3,
    text4,
    text5,
    text6,
    className,
    ...otherProps
  }: SherAudienceTableRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex w-full flex-col items-start gap-2",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <SkeletonText size="subheader" />
      <Table
        header={
          <Table.HeaderRow>
            <Table.HeaderCell>Farcaster</Table.HeaderCell>
            <Table.HeaderCell>Wallet Address</Table.HeaderCell>
            <Table.HeaderCell>Token ID #</Table.HeaderCell>
          </Table.HeaderRow>
        }
      >
        <Table.Row clickable={true}>
          <Table.Cell>
            {text ? (
              <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                {text}
              </span>
            ) : null}
          </Table.Cell>
          <Table.Cell>
            {text2 ? (
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                {text2}
              </span>
            ) : null}
          </Table.Cell>
          <Table.Cell>
            <Badge>386</Badge>
          </Table.Cell>
          <Table.Cell>
            <SherBoxSelect />
          </Table.Cell>
        </Table.Row>
        <Table.Row clickable={true}>
          <Table.Cell>
            {text3 ? (
              <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                {text3}
              </span>
            ) : null}
          </Table.Cell>
          <Table.Cell>
            {text4 ? (
              <span className="whitespace-nowrap text-body font-body text-neutral-500">
                {text4}
              </span>
            ) : null}
          </Table.Cell>
          <Table.Cell>
            <Badge>396</Badge>
          </Table.Cell>
          <Table.Cell>
            <div className="flex w-full grow shrink-0 basis-0 items-end justify-center bg-neutral-50">
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <IconButton size="medium" icon="FeatherBoxSelect" />
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
          </Table.Cell>
        </Table.Row>
        <Table.Row clickable={true}>
          <Table.Cell>
            {text5 ? (
              <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                {text5}
              </span>
            ) : null}
          </Table.Cell>
          <Table.Cell>
            {text6 ? (
              <span className="line-clamp-1 text-body font-body text-neutral-500">
                {text6}
              </span>
            ) : null}
          </Table.Cell>
          <Table.Cell>
            <Badge>383</Badge>
          </Table.Cell>
          <Table.Cell>
            <div className="flex w-full grow shrink-0 basis-0 items-end justify-center bg-neutral-50">
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <IconButton size="medium" icon="FeatherBoxSelect" />
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
          </Table.Cell>
        </Table.Row>
      </Table>
    </div>
  );
});

export const SherAudienceTable = SherAudienceTableRoot;
