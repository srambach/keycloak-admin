import {
  Form,
  FormGroup,
  Select,
  SelectOption,
  SelectVariant,
  TextInput,
} from "@patternfly/react-core";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { HelpItem } from "../components/help-enabler/HelpItem";
import { useForm, Controller } from "react-hook-form";
import { UserFederationLdapGeneralRepresentation } from "./models/user-federation";

export const LdapSettingsGeneral = () => {
  const { t } = useTranslation("user-federation");
  const helpText = useTranslation("user-federation-help").t;

  const [open, isOpen] = useState(false);
  const { register, handleSubmit, control } = useForm<
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
          <Controller
            render={({ onChange, value }) => (
              <Select
                toggleId="kc-vendor"
                onToggle={() => isOpen(!open)}
                variant={SelectVariant.single}
                selections={value}
                onSelect={(_, value) => {
                  onChange(value as string);
                  isOpen(false);
                }}
                aria-label="Other"
                // isDisabled
              >
                <SelectOption key={0} value="Choose..." isPlaceholder />
                <SelectOption key={1} value="Mr" />
                <SelectOption key={2} value="Miss" />
                <SelectOption key={3} value="Mrs" />
                <SelectOption key={4} value="Ms" />
              </Select>
            )}
            control={control}
            name="vendor"
            defaultValue="1"
          ></Controller>
        </FormGroup>
        <button type="submit">Test submit</button>
      </Form>
    </>
  );
};
