import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Component from "./Component";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders", () => {
  act(() => {
    render(<Component />, container);
  });

  expect(container.textContent).toBe("Test!Button");
});
