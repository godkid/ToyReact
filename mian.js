import { createElement, Component, render } from "./toy-react"
class MyComponent extends Component {
    constructor() {
        super()
    }
    render() {
        return (<div>
            <h1>component</h1>
            {this.children}
        </div>)
    }
}



const div = (<MyComponent id="testid" class="classnames">
    <div class="11">12</div>
    <div class="22">uyu</div>
    <div class="33"></div>
    <div class="44"></div>
    <div class="55"></div>
</MyComponent>);

render(div, document.body);