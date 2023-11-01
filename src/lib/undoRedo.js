let history = [];
let undoHistory = [];

export function undo() {
    if (history.length === 0) return;
    let lastAction = history.pop();
    undoHistory.push(lastAction);
    return lastAction;
}

export function redo() {
    if (undoHistory.length === 0) return;
    let lastUndoneAction = undoHistory.pop();
    history.push(lastUndoneAction);
    return lastUndoneAction;
}

export function recordAction(action) {
    history.push(action);
    undoHistory = [];
}
