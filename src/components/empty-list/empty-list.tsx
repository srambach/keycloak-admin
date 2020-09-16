import React from "react";
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  Title,
  Button,
} from "@patternfly/react-core";
import { PlusCircleIcon } from "@patternfly/react-icons";

type EmptyListProps = {
  message: string;
  instructions: string;
  primaryActionText: string;
  primaryAction: any;
};

export const EmptyList = ({
  message,
  instructions,
  primaryActionText,
  primaryAction,
}: EmptyListProps) => {
  return (
    <>
      <EmptyState variant="large">
        <EmptyStateIcon icon={PlusCircleIcon} />
        <Title headingLevel="h4" size="lg">
          {message}
        </Title>
        <EmptyStateBody>{instructions}</EmptyStateBody>
        <Button variant="primary" onClick={primaryAction}>
          {primaryActionText}
        </Button>
      </EmptyState>
    </>
  );
};
