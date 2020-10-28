import {
  Card,
  CardTitle,
  Divider,
  DropdownItem,
  Form,
  FormGroup,
  Gallery,
  PageSection,
  Select,
  SelectOption,
  Split,
  SplitItem,
  Switch,
  Tab,
  TabContent,
  Tabs,
  TabTitleText,
  Text,
  TextContent,
  TextInput,
  TextVariants,
} from "@patternfly/react-core";
import { DatabaseIcon } from "@patternfly/react-icons";
import { useTranslation } from "react-i18next";
import React from "react";
import { ViewHeader } from "../components/view-header/ViewHeader";
import { PageBreadCrumbs } from "../components/bread-crumb/PageBreadCrumbs";
import { ScrollForm } from "../components/scroll-form/ScrollForm";
import { HelpItem } from "../components/help-enabler/HelpItem";
import { LdapSettingsAdvanced } from "./LdapSettingsAdvanced";
import { LdapSettingsKerberosIntegration } from "./LdapSettingsKerberosIntegration";
import { LdapSettingsCache } from "./LdapSettingsCache";
import { LdapSettingsSynchronization } from "./LdapSettingsSynchronization";
import { LdapSettingsGeneral } from "./LdapSettingsGeneral";
import { LdapSettingsConnection } from "./LdapSettingsConnection";
import { LdapSettingsSearching } from "./LdapSettingsSearching";

export const UserFederationLdapSettings = () => {
  const { t } = useTranslation("user-federation");
  const helpText = useTranslation("user-federation-help").t;

  const linkArgs = {
    title: t("common:learnMore"),
    href: "http://google.com",
  };

  return (
    <>
      {/* <PageBreadCrumbs /> */}
      <ViewHeader
        titleKey="user-federation:Ldap"
        subKey=""
        dropdownItems={[
          <DropdownItem key="syncChangedUsers" onClick={() => {}}>
            {t("syncChangedUsers")}
          </DropdownItem>,
          <DropdownItem key="syncAllUsers" onClick={() => {}}>
            {t("syncAllUsers")}
          </DropdownItem>,
          <DropdownItem key="unlinkUsers" onClick={() => {}}>
            {t("unlinkUsers")}
          </DropdownItem>,
          <DropdownItem key="removeImported" onClick={() => {}}>
            {t("removeImported")}
          </DropdownItem>,
          <Divider></Divider>,
          <DropdownItem key="deleteProvider" onClick={() => {}}>
            {t("deleteProvider")}
          </DropdownItem>,
        ]}
        isEnabled
        onToggle={() => {}}
      >
        stuff
      </ViewHeader>
      {/* /> */}
      <PageSection variant="light" isFilled>
        <Tabs
          // activeKey={activeTabKey}
          // onSelect={this.handleTabClick}
          isBox
        >
          <Tab eventKey={0} title={<TabTitleText>Settings</TabTitleText>}>
            <ScrollForm
              sections={[
                t("generalOptions"),
                t("connectionAndAuthenticationSettings"),
                t("LdapSearchingAndUpdatingSettings"),
                t("synchronizationSettings"),
                t("kerberosIntegration"),
                t("cacheSettings"),
                t("advancedSettings"),
              ]}
            >
              {/* General settings */}
              <LdapSettingsGeneral />

              {/* General settings */}
              <LdapSettingsConnection />

              {/* Synchronization settings */}
              <LdapSettingsSearching />

              {/* Synchronization settings */}
              <LdapSettingsSynchronization />

              {/* Kerberos integration */}
              <LdapSettingsKerberosIntegration />

              {/* Cache settings */}
              <LdapSettingsCache />

              {/* Advanced settings */}
              <LdapSettingsAdvanced />
            </ScrollForm>
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Mappers</TabTitleText>}>
            Mappers
          </Tab>
        </Tabs>
      </PageSection>
    </>
  );
};
