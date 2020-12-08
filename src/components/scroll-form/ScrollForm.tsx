import React, { Children, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Grid,
  GridItem,
  JumpLinks,
  JumpLinksItem,
  PageSection,
} from "@patternfly/react-core";

import { FormPanel } from "./FormPanel";
import style from "./scroll-form.module.css";

type ScrollFormProps = {
  sections: string[];
  children: React.ReactNode;
};

// This must match the page id created in App.tsx unless another page section has been given hasScrollableContent
const mainPageContentId = "#main-content-page-container";

export const ScrollForm = ({ sections, children }: ScrollFormProps) => {
  const { t } = useTranslation("common");

  const Nav = () => (
    <PageSection className={style.sticky}>
      <JumpLinks
        isVertical
        // scrollableSelector has to point to the id of the element whose scrollTop changes
        // to scroll the entire main section, it has to be the pf-c-page__main
        scrollableSelector={mainPageContentId}
        label={t("jumpToSection")}
      >
        {sections.map((cat) => (
          // note that JumpLinks currently does not work with spaces in the href
          <JumpLinksItem href={`#${cat.replace(/\s+/g, "-")}`}>
            {cat}
          </JumpLinksItem>
        ))}
      </JumpLinks>
    </PageSection>
  );

  const nodes = Children.toArray(children);
  return (
    <Grid hasGutter>
      <GridItem span={8}>
        {sections.map((cat, index) => (
          <FormPanel id={cat.replace(/\s+/g, "-")} key={cat} title={cat}>
            {nodes[index]}
          </FormPanel>
        ))}
      </GridItem>
      <GridItem span={4}>
        <Nav />
      </GridItem>
    </Grid>
  );
};
