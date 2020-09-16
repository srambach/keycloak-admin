import React from "react";
import { storiesOf } from "@storybook/react";
import { Page } from "@patternfly/react-core";
import { EmptyList } from "../components/empty-list/empty-list";

storiesOf("Empty list", module).add("View", () => {
  return (
    <EmptyList
      message="No things"
      instructions="You haven't created any things for this list."
      primaryActionText="Add a thing"
      primaryAction="onClick={() => save()}"
    />
  );
});
