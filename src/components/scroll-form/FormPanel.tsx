import React from "react";
import { Title } from "@patternfly/react-core";

import style from "./form-panel.module.css";

interface FormPanelProps extends React.HTMLProps<HTMLFormElement> {
  title: string;
  scrollId: string;
}

export const FormPanel = (props: FormPanelProps) => {
  const { title, children, scrollId, ...rest } = props;
  return (
    <section {...rest} className={style.panel}>
      <Title headingLevel="h4" size="xl" className={style.title} id={scrollId}>
        {title}
      </Title>
      {children}
    </section>
  );
};
