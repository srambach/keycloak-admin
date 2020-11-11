import React from "react";
import { MemoryRouter } from "react-router-dom";
import { act, fireEvent, render } from "@testing-library/react";

import clientMock from "./mock-clients.json";
import { UserFederationLdapSettingsTab } from "../UserFederationLdapSettingsTab";

test("renders ClientList", () => {
  const container = render(
    <MemoryRouter>
      <UserFederationLdapSettingsTab
      // clients={clientMock}
      // baseUrl="http://blog.nerdin.ch"
      // refresh={() => {}}
      />
    </MemoryRouter>
  );
  const button = document.querySelector("button");
  act(() => {
    fireEvent.click(button!);
  });
  expect(container).toMatchSnapshot();
});
