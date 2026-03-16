import DefaultPanel from "./DefaultPanel";
import ScannerPanel from "./ScannerPanel";
import WatchlistPanel from "./WatchlistPanel";
import ChartPanel from "./ChartPanel";
import NotesPanel from "./NotesPanel";
import AlertsPanel from "./AlertsPanel";
import ScannerUI from "../../../../view/scanner/ScannerUI";

export const panelRegistry = {
  default: DefaultPanel,
  scanner: ScannerUI,
  watchlist: WatchlistPanel,
  chart: ChartPanel,
  notes: NotesPanel,
  alerts: AlertsPanel
};// src/workspace/windows/panels/panelRegistry.js
