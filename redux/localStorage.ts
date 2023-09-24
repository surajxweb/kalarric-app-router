// localStorageMiddleware.js
export const localStorageMiddleware =
  (store: any) => (next: any) => (action: any) => {
    const result = next(action);
    const stateToSave = store.getState();

    // Save the state to local storage
    localStorage.setItem("reduxState", JSON.stringify(stateToSave));

    return result;
  };
