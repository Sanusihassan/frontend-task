import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../app.vue";

describe("App Test", () => {
  it("should render App", () => {
    const wrapper = mount(App);
    expect(wrapper.find("h1").exists()).toBeTruthy();
  });
});
