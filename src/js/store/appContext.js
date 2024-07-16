import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Initialize context
export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        // Initialize state
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions }
                    })
            })
        );

        useEffect(() => {
            // You can load initial data here if needed
            state.actions.loadSomeData();
        }, []);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
