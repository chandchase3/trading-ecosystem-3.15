import { createSlice } from "@reduxjs/toolkit";

function createViewTabs() {
  return {
    activeTab: "default",
    tabs: {
      default: {
        panel: "scanner",
        data: {}
      }
    }
  };
}

const initialState = {

  activeWorkspace: 1,
  activeWorkspaceTab: "main",

  workspaces: {

    1: {

      workspaceTabs: {

        main: {

          columns: [1,2,3],

          views: {

            101:{type:"primaryView", column:1},
            102:{type:"overlayView", column:1},

            201:{type:"primaryView", column:2},
            202:{type:"overlayView", column:2},

            301:{type:"primaryView", column:3},
            302:{type:"overlayView", column:3}

          },

          viewTabs: {

            101:createViewTabs(),
            102:createViewTabs(),

            201:createViewTabs(),
            202:createViewTabs(),

            301:createViewTabs(),
            302:createViewTabs()

          }

        }

      }

    }

  }

};

const viewSlice = createSlice({
  name: "views",
  initialState,
  reducers: {

    setActiveViewTab(state, action) {

      const {workspaceId, workspaceTabId, viewId, tabId} = action.payload;

      state.workspaces[workspaceId]
        .workspaceTabs[workspaceTabId]
        .viewTabs[viewId]
        .activeTab = tabId;

    }

  }
});

export const { setActiveViewTab } = viewSlice.actions;

export default viewSlice.reducer;