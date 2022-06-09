import { useReducer } from "react";

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

const Increment = (props: any) => {
    const [state, dispatch] = useReducer(reducer, props.state);
    return (
        <>
            State from Increment: {props.state.count}
            <button onClick={() => props.dispatch({type: 'increment'})}>+</button>
        </>
    )
}

const Decrement = (props: any) => {
    const [state, dispatch] = useReducer(reducer, props.state);
    return (
        <>
            State from Decrement: {props.state.count}
            <button onClick={() => props.dispatch({type: 'decrement'})}>-</button>
        </>
    )
}

const initialState = {count: 0};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Count: {state.count}
            <Increment state={state} dispatch={dispatch} />
            <Decrement state={state} dispatch={dispatch} />
        </>
    )
}

export default Counter;