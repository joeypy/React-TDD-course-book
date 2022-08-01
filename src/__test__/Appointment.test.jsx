import { render, screen } from "@testing-library/react";
import { Appointment } from "../components/Appointment";

describe.only("Appointment", () => {
  it("Render the costumer first name", () => {
    const customer = { firstName: "Ashley" };
    const component = <Appointment customer={customer} />;
    const container = document.createElement("div");
    document.body.appendChild(container);

    render(component, container);

    expect(document.body.textContent).toMatch("Ashley");
  });

  it("Render another costumer name", () => {
    const customer = { firstName: "Jordan" };
    const component = <Appointment customer={customer} />;
    const container = document.createElement("div");
    document.body.appendChild(container);

    render(component, container);

    expect(document.body.textContent).toMatch("Jordan");
  });
});
