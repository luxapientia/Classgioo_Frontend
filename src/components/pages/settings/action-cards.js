"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@heroui/react";
import { Card, CardBody } from "@heroui/react";
import Link from "next/link";

const ActionCard = React.forwardRef(
  (
    { color, title, icon, description, link, children, className, ...props },
    ref
  ) => {
    const colors = React.useMemo(() => {
      switch (color) {
        case "primary":
          return {
            card: "border-default-200",
            iconWrapper: "bg-primary-50 border-primary-100",
            icon: "text-primary",
          };
        case "secondary":
          return {
            card: "border-secondary-100",
            iconWrapper: "bg-secondary-50 border-secondary-100",
            icon: "text-secondary",
          };
        case "warning":
          return {
            card: "border-warning-500",
            iconWrapper: "bg-warning-50 border-warning-100",
            icon: "text-warning-600",
          };
        case "danger":
          return {
            card: "border-danger-300",
            iconWrapper: "bg-danger-50 border-danger-100",
            icon: "text-danger",
          };

        default:
          return {
            card: "border-default-200",
            iconWrapper: "bg-default-50 border-default-100",
            icon: "text-default-500",
          };
      }
    }, [color]);

    return (
      <Link href={link}>
        <Card
          ref={ref}
          isPressable
          className={cn("w-full mb-5 border-small", colors?.card, className)}
          shadow="sm"
          {...props}
        >
          <CardBody className="flex h-full flex-row items-start gap-3 p-4">
            <div
              className={cn(
                "item-center flex rounded-medium border p-2",
                colors?.iconWrapper
              )}
            >
              <Icon className={colors?.icon} icon={icon} width={24} />
            </div>
            <div className="flex flex-col">
              <p className="text-medium">{title}</p>
              <p className="text-small text-default-400">
                {description || children}
              </p>
            </div>
          </CardBody>
        </Card>
      </Link>
    );
  }
);

ActionCard.displayName = "ActionCard";

export default ActionCard;
