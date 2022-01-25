import * as React from "react";
import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/react";
import * as stories from "./GitHubUser.stories";

const { DefaultBehavior } = composeStories(stories);

it("Should empty the field when clicking the cross", () => {
  // and mount the story using @cypress/react library
  mount(<DefaultBehavior />);

  // then run our tests
  cy.get("hamilton");
});
