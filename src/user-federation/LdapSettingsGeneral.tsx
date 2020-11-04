import { Form, FormGroup, Select, TextInput } from "@patternfly/react-core";
import { useTranslation } from "react-i18next";
import React from "react";
import { HelpItem } from "../components/help-enabler/HelpItem";
import { useForm } from "react-hook-form";
import { UserFederationLdapGeneralRepresentation } from "./models/user-federation";

export const LdapSettingsGeneral = () => {
  const { t } = useTranslation("user-federation");
  const helpText = useTranslation("user-federation-help").t;

  const { register, handleSubmit } = useForm<
    UserFederationLdapGeneralRepresentation
  >();
  const onSubmit = (data: UserFederationLdapGeneralRepresentation) => {
    console.log(data);
  };

  return (
    <>
      {/* Cache settings */}
      <Form isHorizontal onSubmit={handleSubmit(onSubmit)}>
        <FormGroup
          label={t("consoleDisplayName")}
          labelIcon={
            <HelpItem
              helpText={helpText("consoleDisplayNameHelp")}
              forLabel={t("consoleDisplayName")}
              forID="kc-console-display-name"
            />
          }
          fieldId="kc-console-display-name"
          isRequired
        >
          <TextInput
            isRequired
            type="text"
            id="kc-console-display-name"
            name="kc-console-display-name"
            ref={register}
          />
        </FormGroup>

        <FormGroup
          label={t("vendor")}
          labelIcon={
            <HelpItem
              helpText={helpText("vendorHelp")}
              forLabel={t("vendor")}
              forID="kc-vendor"
            />
          }
          fieldId="kc-vendor"
          isRequired
        >
          <Select
            toggleId="kc-vendor"
            // isOpen={openType}
            onToggle={() => {}}
            // variant={SelectVariant.single}
            // value={selected}
            // selections={selected}
            // onSelect={(_, value) => {
            //   setSelected(value as string);
            //   setOpenType(false);
            // }}
            aria-label="Other"
            isDisabled
          ></Select>
        </FormGroup>
        <button type="submit">Test submit</button>
      </Form>
    </>
  );
};
