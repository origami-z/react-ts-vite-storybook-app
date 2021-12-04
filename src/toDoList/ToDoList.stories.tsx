import React from "react";
import { expect } from "@storybook/jest";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, fireEvent, findByRole } from "@storybook/testing-library";

import { ToDoList } from "./ToDoList";

export default {
  title: "To Do/To Do List",
  component: ToDoList,
} as ComponentMeta<typeof ToDoList>;

const Template: ComponentStory<typeof ToDoList> = (args) => (
  <ToDoList {...args} />
);

export const Example1 = Template.bind({});
Example1.args = {};
Example1.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const firstTask = await canvas.findByRole("checkbox", { name: "First todo" });
  await fireEvent.click(firstTask);
};
