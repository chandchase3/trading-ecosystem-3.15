import { createSlice } from "@reduxjs/toolkit";

/*
VIEW FACTORY
Creates a simple view object
*/
function createView(viewId, viewType = "scanner", name = "", data = {}) {
  return {
    viewId,
    name,
    viewType,
    data
  };
}

/*
INITIAL STATE
6 views total:
Top:    1   2   3
Bottom: 101 102 103
*/
const initialState = {
  views: {
    1: createView(1, "scanner", "LeftTop", { scannerName: "largeCapCrypto" }),
    2: createView(2, "scanner", "MidTop", { scannerName: "topAltcoins" }),
    3: createView(3, "scanner", "RightTop", { scannerName: "topAltcoins" }),

    101: createView(101, "scanner", "LeftBottom", { scannerName: "topAltcoins" }),
    102: createView(102, "scanner", "MidBottom", { scannerName: "topAltcoins" }),
    103: createView(103, "scanner", "RightBottom", { scannerName: "topAltcoins" }),
  }
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {

    /*
    Replace entire view
    */
    setView(state, action) {
      const { viewId, viewType, name, data } = action.payload;

      state.views[viewId] = {
        viewId,
        viewType,
        name,
        data
      };
    },

    /*
    Update only the data object
    */
    updateViewData(state, action) {
      const { viewId, data } = action.payload;

      if (state.views[viewId]) {
        state.views[viewId].data = {
          ...state.views[viewId].data,
          ...data
        };
      }
    }

  }
});

export const {
  setView,
  updateViewData
} = viewSlice.actions;

export default viewSlice.reducer;