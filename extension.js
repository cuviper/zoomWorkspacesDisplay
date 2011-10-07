const Overview = imports.ui.main.overview;
const WorkspacesView = imports.ui.workspacesView;

function init(metadata) {}

let _saved_updateAlwaysZoom;

function enable() {
    let p = WorkspacesView.WorkspacesDisplay.prototype;
    _saved_updateAlwaysZoom = p._updateAlwaysZoom;
    p._updateAlwaysZoom = function() {
        this._alwaysZoomOut = true;
    };
    Overview._workspacesDisplay._alwaysZoomOut = true;
}

function disable() {
    let p = WorkspacesView.WorkspacesDisplay.prototype;
    p._updateAlwaysZoom = _saved_updateAlwaysZoom;
    Overview._workspacesDisplay._alwaysZoomOut = false;
    Overview._workspacesDisplay._updateAlwaysZoom();
}
