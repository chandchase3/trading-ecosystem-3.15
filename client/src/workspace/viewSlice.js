// src/features/workspace/workspaceSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Simple view factory
function createView(viewId, viewType = "scanner", name = "", data = {}) {
  return { viewId, name, viewType, data };
}

// Simple tab factory
function createTab(viewId, tabOffset = 1, name = "Default Tab", data = {}) {
  const tabId = viewId * 1000 + tabOffset; // e.g., view 1 -> 1001, 1002
  return { id: tabId, name, data };
}

// Default two workspaces
const initialState = {
  workspaces: {
    10001: { 
      id: 10001,
      name: "Workspace One",
      views: [1,2,3],
      activeView: 1,
    },
    10002: { 
      id: 10002,
      name: "Workspace Two",
      views: [101,102,103],
      activeView: 101,
    }
  },
  views: {
    // Top row
    1: createView(1, "scanner", "LeftTop", { scannerName: "largeCapCrypto" }),
    2: createView(2, "scanner", "MidTop", { scannerName: "topAltcoins" }),
    3: createView(3, "scanner", "RightTop", { scannerName: "watchlist" }),
    // Bottom row
    101: createView(101, "scanner", "LeftBottom", { scannerName: "defiLeaders" }),
    102: createView(102, "scanner", "MidBottom", { scannerName: "topFiveCrypto" }),
    103: createView(103, "scanner", "RightBottom", { scannerName: "alerts" }),
  },
  viewTabs: {
    1: { activeTab: 1001, tabs: [ createTab(1,1), createTab(1,2) ] },
    2: { activeTab: 2001, tabs: [ createTab(2,1), createTab(2,2) ] },
    3: { activeTab: 3001, tabs: [ createTab(3,1), createTab(3,2) ] },
    101: { activeTab: 101001, tabs: [ createTab(101,1), createTab(101,2) ] },
    102: { activeTab: 102001, tabs: [ createTab(102,1), createTab(102,2) ] },
    103: { activeTab: 103001, tabs: [ createTab(103,1), createTab(103,2) ] },
  }
};

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    // Add new workspace dynamically
    addWorkspace(state, action) {
      const { id, name, views } = action.payload;
      state.workspaces[id] = { id, name, views, activeView: views[0] };
    },
    // Update workspace (rename, activeView, add/remove views)
    updateWorkspace(state, action) {
      const { id, name, activeView, views } = action.payload;
      const ws = state.workspaces[id];
      if (!ws) return;
      if (name !== undefined) ws.name = name;
      if (activeView !== undefined) ws.activeView = activeView;
      if (views !== undefined) ws.views = views;
    },
    // Add a tab to a view
    addViewTab(state, action) {
      const { viewId, name, data } = action.payload;
      const tabList = state.viewTabs[viewId]?.tabs || [];
      const nextOffset = tabList.length + 1;
      const tab = createTab(viewId, nextOffset, name, data);
      if (!state.viewTabs[viewId]) state.viewTabs[viewId] = { activeTab: tab.id, tabs: [tab] };
      else state.viewTabs[viewId].tabs.push(tab);
    },
    // Switch active tab
    setActiveTab(state, action) {
      const { viewId, tabId } = action.payload;
      if (state.viewTabs[viewId]) state.viewTabs[viewId].activeTab = tabId;
    },
    // Update tab data
    updateTabData(state, action) {
      const { viewId, tabId, data } = action.payload;
      const tabs = state.viewTabs[viewId]?.tabs;
      if (!tabs) return;
      const tab = tabs.find(t => t.id === tabId);
      if (!tab) return;
      tab.data = { ...tab.data, ...data };
    }
  }
});

export const { addWorkspace, updateWorkspace, addViewTab, setActiveTab, updateTabData } = workspaceSlice.actions;
export default workspaceSlice.reducer;