// src/workspace/w/panelRegistry.js
import DefaultPanel from "./DefaultPanel";
import WatchlistPanel from "./WatchlistPanel";
import ChartPanel from "./ChartPanel";
import NotesPanel from "./NotesPanel";
import AlertsPanel from "./AlertsPanel";
import ScannerUI from "../../../view/scanner/ScannerUI.jsx";

export const panelRegistry = {
  default: DefaultPanel,
  scanner: ScannerUI,
  watchlist: WatchlistPanel,
  chart: ChartPanel,
  notes: NotesPanel,
  alerts: AlertsPanel
}