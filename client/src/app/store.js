import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';
import watchlistsReducer from '../features/watchlists/watchlistsSlice';
import cryptoReducer from '../features/crypto/cryptoSlice';
import workspaceReducer from '../workspace/workspaceSlice';
import viewReducer from '../workspace/viewSlice';
import scannerReducer from '../features/scanner/scannerSlice';
import krakenReducer from '../features/kraken/krakenSlice';
import viewTabsReducer from "../workspace/viewTabsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    watchlists: watchlistsReducer,
    workspace: workspaceReducer,
    crypto: cryptoReducer,
    views: viewReducer,
    scanner: scannerReducer,
    kraken: krakenReducer,

    viewTabs: viewTabsReducer
  }
});
