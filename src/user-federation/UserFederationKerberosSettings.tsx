import { PageSection } from "@patternfly/react-core";
import { useTranslation } from "react-i18next";
import React from "react";
import { ScrollForm } from "../components/scroll-form/ScrollForm";
import { KerberosSettingsRequired } from "./KerberosSettingsRequired";
import { KerberosSettingsCache } from "./KerberosSettingsCache";

export const UserFederationKerberosSettings = () => {
  const { t } = useTranslation("user-federation");

  return (
    <>
      <PageSection variant="light" isFilled>
        {/* Required settings */}
        <KerberosSettingsRequired />

        {/* Cache settings */}
        <KerberosSettingsCache />
      </PageSection>
    </>
  );
};
