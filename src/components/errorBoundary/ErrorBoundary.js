import { Component } from "react";
import ErrorMessage from "../UI/ErrorMessage";

export default class ErrorBoundary extends Component {

    state = {
        error: false
    }

    componentDidCatch = (error, errorInfo) => {
        this.setState({
            error: true
        })

        console.log(error, errorInfo)
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        return this.props.children
    }
}