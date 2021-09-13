import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import BattleGrid from "./index";

export default {
  title: "BattleGrid",
  component: BattleGrid,
} as ComponentMeta<typeof BattleGrid>;

const Template: ComponentStory<typeof BattleGrid> = (args) => (
  <BattleGrid {...args} />
);

export const EmptyGrid = Template.bind({});
EmptyGrid.args = {
  hits: [],
  misses: [],
  handlePlayerMove: console.log,
};
