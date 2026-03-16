import DefaultPanel from "../views/panels/DefaultPanel";
import WatchlistPanel from "../views/panels/WatchlistPanel";
import ChartPanel from "../views/panels/ChartPanel";
import NotesPanel from "../views/panels/NotesPanel";
import AlertsPanel from "../views/panels/AlertsPanel";
import ScannerUI from "../../view/scanner/ScannerUI";

export const panelRegistry = {
  default: DefaultPanel,
  scanner: ScannerUI,
  watchlist: WatchlistPanel,
  chart: ChartPanel,
  notes: NotesPanel,
  alerts: AlertsPanel
};// src/workspace/windows/panels/panelRegistry.js
