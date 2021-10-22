import { shallow } from "enzyme";
import { TimestampRaw } from "../Timestamp.component";

const setup = (value = "", floatToRight = true) => {
  return shallow(<TimestampRaw value={value} floatToRight={floatToRight} />);
};

describe("Timestamp component", () => {
  it("renders without crashing", () => {
    const component = setup();

    expect(component).not.toBe(null);
  });

  it("should be able to render properly value passed as prop", () => {
    let component = setup();

    expect(component.text()).toBe("");
    component = setup("11:22");
    expect(component.text()).toBe("11:22");
  });
});
