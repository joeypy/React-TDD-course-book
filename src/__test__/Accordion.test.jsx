import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect } from "vitest";
import Accordion from "../components/Accordion";

describe("Accordion test", () => {
  beforeEach(() => {
    render(
      <Accordion title="Testing">
        <h4>Content</h4>
      </Accordion>
    );
  });

  test("Should show title", () => {
    expect(screen.getByText(/Testing/i)).toBeDefined();
  });

  test("Should not show the content at the start", () => {
    expect(screen.queryByText(/Content/i)).toBeNull();
  });

  test("Should show the content on accordion when click the button", async () => {
    const title = screen.getByText(/Show/i);
    fireEvent.click(title);
    expect(await screen.findByText(/Content/i)).toBeDefined();
  });
});
