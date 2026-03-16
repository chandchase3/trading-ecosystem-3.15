export const defaultTabs = {

  Default: {
    name: "Default",
    viewType: "default",
    icon: "grid",
    tabColor: "#4f46e5",
    data: {}
  },

  Scanner: {
    name: "Scanner",
    viewType: "scanner",
    icon: "search",
    tabColor: "#4f46e5",
    data: {
      scannerName: "topAltcoins",
      filters: {},
      sort: null
    }
  },

  Watchlist: {
    name: "Watchlist",
    viewType: "watchlist",
    icon: "list",
    tabColor: "#22c55e",
    data: {
      symbols: []
    }
  },

  Chart: {
    name: "Chart",
    viewType: "chart",
    icon: "chart",
    tabColor: "#f59e0b",
    data: {
      symbol: "BTCUSD",
      timeframe: "1h"
    }
  },

  Notes: {
    name: "Notes",
    viewType: "notes",
    icon: "note",
    tabColor: "#8b5cf6",
    data: {
      text: ""
    }
  },

  Alerts: {
    name: "Alerts",
    viewType: "alerts",
    icon: "bell",
    tabColor: "#ef4444",
    data: {
      alerts: []
    }
  }

};