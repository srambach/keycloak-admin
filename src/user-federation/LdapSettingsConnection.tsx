import {
  Button,
  Form,
  FormGroup,
  InputGroup,
  Select,
  SelectOption,
  SelectVariant,
  Switch,
  TextInput,
} from "@patternfly/react-core";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { HelpItem } from "../components/help-enabler/HelpItem";
import { Controller, useForm } from "react-hook-form";
import { UserFederationLdapConnectionRepresentation } from "./models/user-federation";
import { EyeIcon } from "@patternfly/react-icons";

export const LdapSettingsConnection = () => {
  const { t } = useTranslation("user-federation");
  const helpText = useTranslation("user-federation-help").t;

  const [isSPIDropdownOpen, setIsSPIDropdownOpen] = useState(false);
  const [isBindTypeDropdownOpen, setIsBindTypeDropdownOpen] = useState(false);
  const { register, handleSubmit, control } = useForm<
    UserFederationLdapConnectionRepresentation
  >();
  const onSubmit = (data: UserFederationLdapConnectionRepresentation) => {
    console.log(data);
  };

  return (
    <>
      {/* Cache settings */}
      <Form isHorizontal onSubmit={handleSubmit(onSubmit)}>
        <FormGroup
          label={t("connectionURL")}
          labelIcon={
            <HelpItem
              helpText={helpText("consoleDisplayConnectionUrlHelp")}
              forLabel={t("connectionURL")}
              forID="kc-console-connection-url"
            />
          }
          fieldId="kc-console-connection-url"
          isRequired
        >
          <TextInput
            isRequired
            type="text"
            id="kc-console-connection-url"
            name="kc-console-connection-url"
            ref={register}
          />
        </FormGroup>

        <FormGroup
          label={t("enableStarttls")}
          labelIcon={
            <HelpItem
              helpText={helpText("enableStarttlsHelp")}
              forLabel={t("enableStarttls")}
              forID="kc-enable-start-tls"
            />
          }
          fieldId="kc-enable-start-tls"
          hasNoPaddingTop
        >
          <Switch
            id={"kc-enable-start-tls"}
            isChecked={true}
            isDisabled={false}
            onChange={() => undefined as any}
            label={t("common:on")}
            labelOff={t("common:off")}
          />
        </FormGroup>

        <FormGroup
          label={t("useTruststoreSpi")}
          labelIcon={
            <HelpItem
              helpText={helpText("useTruststoreSpiHelp")}
              forLabel={t("useTruststoreSpi")}
              forID="kc-use-truststore-spi"
            />
          }
          fieldId="kc-use-truststore-spi"
        >
          <Controller
            name="useTruststoreSpi"
            defaultValue="foo"
            control={control}
            render={({ onChange, value }) => (
              <Select
                toggleId="kc-use-truststore-spi"
                onToggle={() => setIsSPIDropdownOpen(!isSPIDropdownOpen)}
                isOpen={isSPIDropdownOpen}
                onSelect={(_, value) => {
                  onChange(value as string);
                  setIsSPIDropdownOpen(false);
                }}
                selections={value}
                variant={SelectVariant.single}
                // aria-label="Other"
                // isDisabled
              >
                <SelectOption
                  key={0}
                  value="LDAP connection URL"
                  isPlaceholder
                />
                <SelectOption key={1} value="something else" />
              </Select>
            )}
          ></Controller>
        </FormGroup>

        <FormGroup
          label={t("connectionPooling")}
          labelIcon={
            <HelpItem
              helpText={helpText("connectionPoolingHelp")}
              forLabel={t("connectionPooling")}
              forID="kc-connection-pooling"
            />
          }
          fieldId="kc-connection-pooling"
          hasNoPaddingTop
        >
          <Switch
            id={"kc-connection-pooling"}
            isChecked={true}
            isDisabled={false}
            onChange={() => undefined as any}
            label={t("common:on")}
            labelOff={t("common:off")}
          />
        </FormGroup>

        <FormGroup
          label={t("connectionTimeout")}
          labelIcon={
            <HelpItem
              helpText={helpText("connectionTimeoutHelp")}
              forLabel={t("connectionTimeout")}
              forID="kc-console-connection-timeout"
            />
          }
          fieldId="kc-console-connection-timeout"
        >
          <TextInput
            type="text"
            id="kc-console-connection-timeout"
            name="kc-console-connection-timeout"
            ref={register}
          />
        </FormGroup>

        <FormGroup
          label={t("bindType")}
          labelIcon={
            <HelpItem
              helpText={helpText("bindTypeHelp")}
              forLabel={t("bindType")}
              forID="kc-bind-type"
            />
          }
          fieldId="kc-bind-type"
          isRequired
        >
          <Controller
            name="bindType"
            defaultValue=""
            control={control}
            render={({ onChange, value }) => (
              <Select
                toggleId="kc-bind-type"
                required
                onToggle={() => setIsBindTypeDropdownOpen(!isBindTypeDropdownOpen)}
                isOpen={isBindTypeDropdownOpen}
                onSelect={(_, value) => {
                  onChange(value as string);
                  setIsBindTypeDropdownOpen(false);
                }}
                selections={value}
                variant={SelectVariant.single}
                // aria-label="simple" // TODO
              >
                <SelectOption
                  key={3}
                  value="Connection timeout"
                  isPlaceholder
                />
                <SelectOption key={4} value="something" />
              </Select>
            )}
          ></Controller>
        </FormGroup>

        <FormGroup
          label={t("bindDn")}
          labelIcon={
            <HelpItem
              helpText={helpText("bindDnHelp")}
              forLabel={t("bindDn")}
              forID="kc-console-bind-dn"
            />
          }
          fieldId="kc-console-bind-dn"
        >
          <TextInput
            type="text"
            id="kc-console-bind-dn"
            name="kc-console-bind-dn"
            ref={register}
          />
        </FormGroup>

        <FormGroup
          label={t("bindCredentials")}
          labelIcon={
            <HelpItem
              helpText={helpText("bindCredentialsHelp")}
              forLabel={t("bindCredentials")}
              forID="kc-console-bind-credentials"
            />
          }
          fieldId="kc-console-bind-credentials"
          isRequired
        >
          <InputGroup>
            <TextInput // TODO: Make password field
              isRequired
              type="text"
              id="kc-console-bind-credentials"
              name="kc-console-bind-credentials"
              ref={register}
            />
            <Button
              variant="control"
              aria-label="show password button for bind credentials"
            >
              <EyeIcon />
            </Button>
          </InputGroup>
        </FormGroup>

        <button type="submit">Test Submit</button>
      </Form>
    </>
  );
};
