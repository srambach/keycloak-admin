import React from "react";
import { storiesOf } from "@storybook/react";
import { ListEmptyState } from "../components/list-empty-state/ListEmptyState";

function handleClick() {
  alert("Button clicked!");
}

storiesOf("Empty state for a list", module).add("View", () => {
  return (
    <ListEmptyState
      message="No things"
      instructions="You haven't created any things for this list."
      primaryActionText="Add a thing"
      onPrimaryAction={handleClick}
    />
  );
});
