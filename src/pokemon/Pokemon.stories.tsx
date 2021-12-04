import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { rest } from "msw";

import { Pokemon } from "./Pokemon";

export default {
  title: "Pokemon/Pokemon",
  component: Pokemon,
} as ComponentMeta<typeof Pokemon>;

const Template: ComponentStory<typeof Pokemon> = (args) => (
  <Pokemon {...args} />
);

export const PokemonData = Template.bind({});
PokemonData.args = {
  name: "ditto",
};
