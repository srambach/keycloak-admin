import React, { ReactElement, useContext, useState } from "react";
import {
  Text,
  PageSection,
  TextContent,
  Divider,
  Level,
  LevelItem,
  Switch,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Badge,
  Select,
  ButtonProps,
  Dropdown,
  DropdownToggle,
  DropdownPosition,
} from "@patternfly/react-core";
import { HelpContext } from "../help-enabler/HelpHeader";
import { useTranslation } from "react-i18next";
import { PageBreadCrumbs } from "../bread-crumb/PageBreadCrumbs";
import { ExternalLink } from "../external-link/ExternalLink";
import { isRowExpanded } from "@patternfly/react-table";

export type ViewHeaderProps = {
  titleKey: string;
  badge?: string;
  subKey: string;
  subKeyLinkProps?: ButtonProps;
  dropdownItems?: ReactElement[];
  isEnabled?: boolean;
  onSelect?: (value: string) => void;
  onToggle?: (value: boolean) => void;
};

export const ViewHeader = ({
  titleKey,
  badge,
  subKey,
  subKeyLinkProps,
  dropdownItems,
  isEnabled = true,
  onSelect,
  onToggle,
}: ViewHeaderProps) => {
  const { t } = useTranslation();
  const { enabled } = useContext(HelpContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const onDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <PageSection variant="light">
        <Level hasGutter>
          <LevelItem>
            <Level>
              <LevelItem>
                <TextContent className="pf-u-mr-sm">
                  <Text component="h1">{t(titleKey)}</Text>
                </TextContent>
              </LevelItem>
              {badge && (
                <LevelItem>
                  <Badge>{badge}</Badge>
                </LevelItem>
              )}
            </Level>
          </LevelItem>
          <LevelItem></LevelItem>
          {dropdownItems && (
            <LevelItem>
              <Toolbar>
                <ToolbarContent>
                  <ToolbarItem>
                    <Switch
                      id={`${titleKey}-switch`}
                      label={t("common:enabled")}
                      labelOff={t("common:disabled")}
                      className="pf-u-mr-lg"
                      isChecked={isEnabled}
                      onChange={(value) => {
                        if (onToggle) {
                          onToggle(value);
                        }
                      }}
                    />
                  </ToolbarItem>
                  <ToolbarItem>
                    {/* This is the dropdown to replace the select.  It operates but does not initiate the actions. See it by going to Clients and click on a client. All 3 menu actions should work but don't. */}
                    <Dropdown
                      position={DropdownPosition.right}
                      toggle={
                        <DropdownToggle onToggle={onDropdownToggle}>
                          {t("common:action")}
                        </DropdownToggle>
                      }
                      isOpen={isDropdownOpen}
                      dropdownItems={dropdownItems}
                      onSelect={(value) => {
                        if (onSelect) {
                          onSelect((value as unknown) as string);
                        }
                        setDropdownOpen(false);
                      }}
                    />
                    {/* This is the old select to be replaced by a dropdown */}
                    {/* <Select
                      placeholderText={t("common:action")}
                      isOpen={open}
                      onToggle={() => setOpen(!open)}
                      onSelect={(_, value) => {
                        if (onSelect) {
                          onSelect(value as string);
                        }
                        setOpen(false);
                      }}
                    >
                      {selectItems}
                    </Select> */}
                  </ToolbarItem>
                </ToolbarContent>
              </Toolbar>
            </LevelItem>
          )}
        </Level>
        {enabled && (
          <TextContent>
            <Text>
              {t(subKey)}
              {subKeyLinkProps && (
                <ExternalLink
                  {...subKeyLinkProps}
                  isInline
                  className="pf-u-ml-md"
                />
              )}
            </Text>
          </TextContent>
        )}
      </PageSection>
      <Divider />
    </>
  );
};
