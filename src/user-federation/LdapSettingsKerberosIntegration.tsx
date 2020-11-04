import { Form, FormGroup, Switch } from "@patternfly/react-core";
import { useTranslation } from "react-i18next";
import React from "react";
import { HelpItem } from "../components/help-enabler/HelpItem";
import { useForm } from "react-hook-form";
import { UserFederationLdapKerberosIntegrationRepresentation } from "./models/user-federation";

export const LdapSettingsKerberosIntegration = () => {
  const { t } = useTranslation("user-federation");
  const helpText = useTranslation("user-federation-help").t;

  const { register, handleSubmit } = useForm<
    UserFederationLdapKerberosIntegrationRepresentation
  >();
  const onSubmit = (
    data: UserFederationLdapKerberosIntegrationRepresentation
  ) => {
    console.log(data);
  };

  return (
    <>
      {/* Kerberos integration */}
      <Form isHorizontal onSubmit={handleSubmit(onSubmit)}>
        <FormGroup
          label={t("allowKerberosAuthentication")}
          labelIcon={
            <HelpItem
              helpText={helpText("allowKerberosAuthenticationHelp")}
              forLabel={t("allowKerberosAuthentication")}
              forID="kc-allow-kerberos-authentication"
            />
          }
          fieldId="kc-allow-kerberos-authentication"
          hasNoPaddingTop
        >
          <Switch
            id={"kc-allow-kerberos-authentication"}
            isChecked={true}
            isDisabled={false}
            onChange={() => undefined as any}
            label={t("common:on")}
            labelOff={t("common:off")}
          />
        </FormGroup>

        <FormGroup
          label={t("useKerberosForPasswordAuthentication")}
          labelIcon={
            <HelpItem
              helpText={helpText("useKerberosForPasswordAuthenticationHelp")}
              forLabel={t("useKerberosForPasswordAuthentication")}
              forID="kc-use-kerberos-password-authentication"
            />
          }
          fieldId="kc-use-kerberos-password-authentication"
          hasNoPaddingTop
        >
          <Switch
            id={"kc-use-kerberos-password-authentication"}
            isChecked={true}
            isDisabled={false}
            onChange={() => undefined as any}
            label={t("common:on")}
            labelOff={t("common:off")}
          />
        </FormGroup>

        <button type="submit">Test submit</button>
      </Form>
    </>
  );
};
