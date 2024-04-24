"use client";
/*
 * Documentation:
 * Listing Review — https://app.subframe.com/library?component=Listing+Review_36dd23ea-3143-47d5-a2a5-74623fe0ab90
 * Avatar — https://app.subframe.com/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 * Link Button — https://app.subframe.com/library?component=Link+Button_a4ee726a-774c-4091-8c49-55b659356024
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "./Avatar";
import { LinkButton } from "./LinkButton";

interface ListingReviewRootProps extends React.HTMLAttributes<HTMLDivElement> {
  photo?: string;
  name?: string;
  location?: string;
  date?: string;
  desc?: string;
  review?: string;
  className?: string;
}

const ListingReviewRoot = React.forwardRef<HTMLElement, ListingReviewRootProps>(
  function ListingReviewRoot(
    {
      photo,
      name,
      location,
      date,
      desc,
      review,
      className,
      ...otherProps
    }: ListingReviewRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex w-full flex-col items-start gap-3",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex w-full items-center gap-2">
          <Avatar size="medium" image={photo}>
            AB
          </Avatar>
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
            {name ? (
              <span className="text-body-bold font-body-bold text-default-font">
                {name}
              </span>
            ) : null}
            {location ? (
              <span className="text-caption font-caption text-subtext-color">
                {location}
              </span>
            ) : null}
          </div>
        </div>
        <div className="flex w-full items-center gap-2">
          <div className="flex items-center">
            <SubframeCore.Icon
              className="text-monospace-body font-monospace-body text-default-font"
              name="FeatherStar"
            />
            <SubframeCore.Icon
              className="text-monospace-body font-monospace-body text-default-font"
              name="FeatherStar"
            />
            <SubframeCore.Icon
              className="text-monospace-body font-monospace-body text-default-font"
              name="FeatherStar"
            />
            <SubframeCore.Icon
              className="text-monospace-body font-monospace-body text-default-font"
              name="FeatherStar"
            />
            <SubframeCore.Icon
              className="text-monospace-body font-monospace-body text-default-font"
              name="FeatherStar"
            />
          </div>
          <span className="text-caption font-caption text-default-font">•</span>
          {date ? (
            <span className="text-caption-bold font-caption-bold text-default-font">
              {date}
            </span>
          ) : null}
          <span className="text-caption font-caption text-default-font">•</span>
          {desc ? (
            <span className="text-caption font-caption text-subtext-color">
              {desc}
            </span>
          ) : null}
        </div>
        {review ? (
          <span className="line-clamp-3 w-full whitespace-pre-wrap text-body font-body text-default-font">
            {review}
          </span>
        ) : null}
        <LinkButton variant="neutral" icon={null}>
          Show more
        </LinkButton>
      </div>
    );
  }
);

export const ListingReview = ListingReviewRoot;
