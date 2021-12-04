import { render } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as ToDoListStories from "./ToDoList.stories"; //👈  Our stories imported here

//👇 composeStories will process all information related to the component (e.g., args)
const { Example1 } = composeStories(ToDoListStories);

it("renders the list", () => {
  const { container } = render(<Example1 />);

  Example1.play({ canvasElement: container }); // what's the best way to share `play` in test?

  expect().not.toBe(null);
  // container.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]')
});
