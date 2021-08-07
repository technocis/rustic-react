import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { CISCheckbox, CISCheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: CISCheckbox,
} as Meta;

export const Checkbox: Story<CISCheckboxProps> = (args) => <CISCheckbox {...args} />;

Checkbox.args = { label: "I Agree to the Terms and Conditions" };
