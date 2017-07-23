"use strict";

import React from "react";
import { array, object } from "prop-types"; // ES6

convertToReactFormsAST = form => {};

class FormWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        const { engine } = props;
        this.state = {
            engine
        };
    }

    componentWillMount() {
        convertToReactFormsAST(this.props.children).bind(this);
        // convert children to AST then to react-forms format
    }

    formChange() {}

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

FormWrapper.proptypes = {
    engine: object
};

export default FormWrapper;
