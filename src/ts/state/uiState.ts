type ActiveComponent = {
    name: string;
    close: () => void;
    needOverlay: boolean;
    dismissibleOverlay: boolean;
}

let activeComponent: ActiveComponent | null = null;

const listeners = new Set<(state: ActiveComponent | null) => void>();

function notify(): void {
    for (const listener of listeners) {
        listener(activeComponent);
    }
}
export function activeState(name: string, closeFunction: () => void, needOverlay: boolean, dismissibleOverlay: boolean): void {
    if (activeComponent && activeComponent.name !== name) {
        activeComponent.close();
    }

    activeComponent = {
        name,
        close: closeFunction,
        needOverlay,
        dismissibleOverlay
    }

    notify();
}

export function closeState(name: string): void {
    if (activeComponent?.name === name) {
        activeComponent = null;
        notify();
    }
}

export function subscribe(listener: (state: ActiveComponent | null) => void): () => void {
    listener(activeComponent);
    listeners.add(listener);

    return () => {
        listeners.delete(listener);
    }
}

export function getState(): ActiveComponent | null {
    return activeComponent;
}