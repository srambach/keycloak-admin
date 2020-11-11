import {
  Form,
  FormGroup,
  Select,
  SelectOption,
  SelectVariant,
} from "@patternfly/react-core";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { HelpItem } from "../components/help-enabler/HelpItem";
import { useForm, Controller } from "react-hook-form";
import { UserFederationLdapCacheRepresentation } from "./models/user-federation";

export const LdapSettingsCache = () => {
  const { t } = useTranslation("user-federation");
  const helpText = useTranslation("user-federation-help").t;

  const [isCachePolicyDropdownOpen, setIsCachePolicyDropdownOpen] = useState(
    false
  );

  const { handleSubmit, control } = useForm<
    UserFederationLdapCacheRepresentation
  >();
  const onSubmit = (data: UserFederationLdapCacheRepresentation) => {
    console.log(data);
  };

  return (
    <>
      {/* Cache settings */}
      <Form isHorizontal onSubmit={handleSubmit(onSubmit)}>
        <FormGroup
          label={t("cachePolicy")}
          labelIcon={
            <HelpItem
              helpText={helpText("cachePolicyHelp")}
              forLabel={t("cachePolicy")}
              forID="kc-cache-policy"
            />
          }
          fieldId="kc-cache-policy"
        >
          <Controller
            name="cachePolicy"
            defaultValue=""
            control={control}
            render={({ onChange, value }) => (
              <Select
                toggleId="kc-cache-policy"
                required
                onToggle={() =>
                  setIsCachePolicyDropdownOpen(!isCachePolicyDropdownOpen)
                }
                isOpen={isCachePolicyDropdownOpen}
                onSelect={(_, value) => {
                  onChange(value as string);
                  setIsCachePolicyDropdownOpen(false);
                }}
                selections={value}
                variant={SelectVariant.single}
                // aria-label="Other"
                // isDisabled
              >
                <SelectOption key={0} value="Choose..." isPlaceholder />
                <SelectOption key={1} value="DEFAULT" />
                <SelectOption key={2} value="EVICT_DAILY" />
                <SelectOption key={3} value="EVICT_WEEKLY" />
                <SelectOption key={4} value="MAX_LIFESPAN" />
                <SelectOption key={5} value="NO_CACHE" />
              </Select>
            )}
          ></Controller>
        </FormGroup>

        <button type="submit">Test submit</button>
      </Form>
    </>
  );
};
