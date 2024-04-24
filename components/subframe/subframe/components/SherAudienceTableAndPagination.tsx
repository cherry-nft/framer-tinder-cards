"use client";
/*
 * Documentation:
 * sher-audience-table-and-pagination — https://app.subframe.com/library?component=sher-audience-table-and-pagination_6551d320-c991-4ab6-8ba2-df12eb9f802a
 * sher-audience-table — https://app.subframe.com/library?component=sher-audience-table_ad251377-6d39-40bc-8481-6b50c0260caa
 * Button — https://app.subframe.com/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { SherAudienceTable } from "./SherAudienceTable";
import { Button } from "./Button";

interface SherAudienceTableAndPaginationRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  className?: string;
}

const SherAudienceTableAndPaginationRoot = React.forwardRef<
  HTMLElement,
  SherAudienceTableAndPaginationRootProps
>(function SherAudienceTableAndPaginationRoot(
  { text, className, ...otherProps }: SherAudienceTableAndPaginationRootProps,
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
      <SherAudienceTable
        text="julialipton"
        text2="0xb0...49f6"
        text3="corrine"
        text4="0xeb...34b4"
        text5="gigarahul.eth"
        text6="0x45...de15"
      />
      <div className="flex w-full items-center justify-end gap-1">
        <Button
          variant="neutral-secondary"
          size="small"
          icon="FeatherChevronLeft"
        >
          Prev
        </Button>
        <div className="flex items-center justify-center gap-6 pt-4 pr-4 pb-4 pl-4">
          {text ? (
            <span className="text-caption-bold font-caption-bold text-default-font">
              {text}
            </span>
          ) : null}
        </div>
        <Button
          variant="neutral-secondary"
          size="small"
          iconRight="FeatherChevronRight"
        >
          Next
        </Button>
      </div>
    </div>
  );
});

export const SherAudienceTableAndPagination =
  SherAudienceTableAndPaginationRoot;
