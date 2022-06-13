import React from "react";
import Counter from "./Counter";
import { connect } from "react-redux";

const App = ({ value, add, sub }) => {

    const handleSub = () => {
        if(value > 0) sub(1)
    }

    const handleAdd = () => {
        if(value < 20) add(1)
    }

    return (
        <div>
            <Counter data={value} />
            <div>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleSub}>Sub</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ value }) => {
    return { value }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (value) => dispatch({ type: "add", payload: value }),
        sub: (value) => dispatch({ type: "sub", payload: value })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);