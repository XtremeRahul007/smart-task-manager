let activeComponent = null;

const listeners = new Set();

function notify() {
    for (const listener of listeners) {
        listener(activeComponent);
    }
}
export function activeState(name, closeFunction, needOverlay) {
    if (activeComponent && activeComponent.name !== name) {
        activeComponent.close();
    }

    activeComponent = {
        name,
        close: closeFunction,
        needOverlay
    }

    notify();
}

export function closeState(name) {
    if (activeComponent?.name === name) {
        activeComponent = null;
        notify();
    }
}

export function subscribe(listener) {
    listener(activeComponent);
    listeners.add(listener);

    return () => {
        listeners.delete(listener);
    }
}

export function getState() {
    return activeComponent;
}