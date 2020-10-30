import {
  Form,
  FormGroup,
  Select,
  SelectOption,
  Switch,
  TextInput,
} from "@patternfly/react-core";
import { useTranslation } from "react-i18next";
import React from "react";
import { HelpItem } from "../components/help-enabler/HelpItem";

export const LdapSettingsConnection = () => {
  const { t } = useTranslation("user-federation");
  const helpText = useTranslation("user-federation-help").t;

  return (
    <>
      {/* Cache settings */}
      <Form isHorizontal>
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
            // value={value1}
            // onChange={this.handleTextInputChange1}
          />
        </FormGroup>

        <FormGroup
          label={t("enableStartTLS")}
          labelIcon={
            <HelpItem
              helpText={helpText("enableStartTlsHelp")}
              forLabel={t("enableStartTLS")}
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
          label={t("useTruststoreSPI")}
          labelIcon={
            <HelpItem
              helpText={helpText("useTruststoreSpiHelp")}
              forLabel={t("useTruststoreSPI")}
              forID="kc-use-truststore-spi"
            />
          }
          fieldId="kc-use-truststore-spi"
        >
          <Select
            toggleId="kc-use-truststore-spi"
            // isOpen={openType}
            onToggle={() => {}}
            // variant={SelectVariant.single}
            // value={selected}
            // selections={selected}
            // onSelect={(_, value) => {
            //   setSelected(value as string);
            //   setOpenType(false);
            // }}
            aria-label="Only for LDAPS" // TODO
          >
            {/* {configFormats.map((configFormat) => ( */}
            <SelectOption
              key={"key"}
              value={"value"}
              // isSelected={selected === configFormat.id}
            >
              {"display name"}
            </SelectOption>
            {/* ))} */}
          </Select>
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
            // value={value1}
            // onChange={this.handleTextInputChange1}
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
          <Select
            toggleId="kc-bind-type"
            // isOpen={openType}
            onToggle={() => {}}
            // variant={SelectVariant.single}
            // value={selected}
            // selections={selected}
            // onSelect={(_, value) => {
            //   setSelected(value as string);
            //   setOpenType(false);
            // }}
            aria-label="simple" // TODO
          >
            {/* {configFormats.map((configFormat) => ( */}
            <SelectOption
              key={"key"}
              value={"value"}
              // isSelected={selected === configFormat.id}
            >
              {"display name"}
            </SelectOption>
            {/* ))} */}
          </Select>
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
            // value={value1}
            // onChange={this.handleTextInputChange1}
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
          <TextInput // TODO: Make password field
            isRequired
            type="text"
            id="kc-console-bind-credentials"
            name="kc-console-bind-credentials"
            // value={value1}
            // onChange={this.handleTextInputChange1}
          />
        </FormGroup>
      </Form>
    </>
  );
};
