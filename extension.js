const Overview = imports.ui.main.overview;
const WorkspacesView = imports.ui.workspacesView;

function main() {
    WorkspacesView.WorkspacesDisplay.prototype._updateAlwaysZoom = function() {
        this._alwaysZoomOut = true;
    };
    Overview._workspacesDisplay._alwaysZoomOut = true;
}
