import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { CISInput, CISInputProps } from "./Input";

export default {
  title: "Components/Input",
  component: CISInput,
} as Meta;

const Template: Story<CISInputProps> = (args) => <CISInput {...args} />;

export const Light = Template.bind({});
Light.args = { label: "CISInput", size: "default", placeholder: "Enter E-Mail" };

export const Dark = Template.bind({});
Dark.args = { ...Light.args, theme: 'dark', label: "Age", placeholder: "Enter Age", type: "number" };

export const Suffix = Template.bind({});
Suffix.args = { ...Light.args, theme: 'dark', label: "Search", placeholder: "Search", suffix: <button>Search</button> };

export const Prefix = Template.bind({});
Prefix.args = { ...Light.args, label: "Password", placeholder: "Enter Password", prefix: <i>
<svg stroke="currentColor" fill="none" stroke-width="2"
  viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
  height="1em" width="1em">
  <line x1="12" y1="5" x2="12" y2="19"></line>
  <line x1="5" y1="12" x2="19" y2="12"></line>
</svg>
</i> };