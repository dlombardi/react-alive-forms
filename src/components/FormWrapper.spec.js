import React from "react";
import FormWrapper from "./FormWrapper";
import renderer from "react-test-renderer";

test("Link changes the class when hovered", () => {
    const component = renderer.create(<FormWrapper page="{name: 'Darien'}" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
