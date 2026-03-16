// src/features/viewTabs/viewTabsSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {

  viewTabs: {

    1: { activeTab:"t1", tabs:["t1","t2"] },
    2: { activeTab:"t3", tabs:["t3"] },
    3: { activeTab:"t4", tabs:["t4"] },

    101:{ activeTab:"t5", tabs:["t5"] },
    102:{ activeTab:"t6", tabs:["t6"] },
    103:{ activeTab:"t7", tabs:["t7"] }

  },

  tabs: {

    t1:{
      id:"t1",
      viewType:"scanner",
      name:"Large Cap",
      data:{ scannerName:"largeCapCrypto" }
    },

    t2:{
      id:"t2",
      viewType:"scanner",
      name:"Altcoins",
      data:{ scannerName:"topAltcoins" }
    },

    t3:{
      id:"t3",
      viewType:"scanner",
      name:"Watchlist",
      data:{ scannerName:"watchlist" }
    },

    t4:{
      id:"t4",
      viewType:"scanner",
      name:"RightTop",
      data:{ scannerName:"topAltcoins" }
    },

    t5:{
      id:"t5",
      viewType:"scanner",
      name:"LeftBottom",
      data:{ scannerName:"defiLeaders" }
    },

    t6:{
      id:"t6",
      viewType:"scanner",
      name:"MidBottom",
      data:{ scannerName:"topFiveCrypto" }
    },

    t7:{
      id:"t7",
      viewType:"scanner",
      name:"RightBottom",
      data:{ scannerName:"alerts" }
    }

  }

};

const viewTabsSlice = createSlice({
  name: "viewTabs",
  initialState,
  reducers: {

    setActiveTab(state, action) {

      const { viewId, tabId } = action.payload;

      state.viewTabs[viewId].activeTab = tabId;

    },

    addTab(state, action) {

      const { viewId, viewType="scanner", name="New Tab", data={} } = action.payload;

      const id = nanoid();

      state.tabs[id] = {
        id,
        viewType,
        name,
        data
      };

      state.viewTabs[viewId].tabs.push(id);

      state.viewTabs[viewId].activeTab = id;

    },

    closeTab(state, action) {

      const { viewId, tabId } = action.payload;

      const tabList = state.viewTabs[viewId];

      tabList.tabs = tabList.tabs.filter(t => t !== tabId);

      delete state.tabs[tabId];

      if(tabList.activeTab === tabId){

        tabList.activeTab = tabList.tabs[0] || null;

      }

    },

    moveTab(state, action){

      const { tabId, fromView, toView } = action.payload;

      state.viewTabs[fromView].tabs =
        state.viewTabs[fromView].tabs.filter(t => t !== tabId);

      state.viewTabs[toView].tabs.push(tabId);

      state.viewTabs[toView].activeTab = tabId;

    },

    updateTabData(state, action){

      const { tabId, data } = action.payload;

      state.tabs[tabId].data = {
        ...state.tabs[tabId].data,
        ...data
      };

    }

  }
});

export const {
  setActiveTab,
  addTab,
  closeTab,
  moveTab,
  updateTabData
} = viewTabsSlice.actions;

export default viewTabsSlice.reducer;