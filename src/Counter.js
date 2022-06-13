import Value from "./Value";

const Counter = ({data}) => {

    return (
        <div>
            <p>Counter {data}</p>
            Counter: <Value />
        </div>
    )
}

export default Counter;