import { createContext, Dispatch, useContext, useReducer } from "react";

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

const Increment = () => {
    const {state, dispatch} = useContext(StoreContext);

    return (
        <>
            State from Increment: {state.count}
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    )
}

const Decrement = () => {
    const {state, dispatch} = useContext(StoreContext);

    return (
        <>
            State from Decrement: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </>
    )
}

const initialState = {count: 0};

export const Counter = () => {
    const {state} = useContext(StoreContext);

    return (
        <>
            Count: {state.count}
            <Increment />
            <Decrement />
        </>
    )
}

export const CounterWithProvider = () => {
    return (
        <StoreProvider>
            <Counter />
        </StoreProvider>
    )
}

const StoreContext = createContext<{
    state: {count: number},
    dispatch: Dispatch<any>
}>({
    state: initialState,
    dispatch: () => null
});

const StoreProvider = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default CounterWithProvider;