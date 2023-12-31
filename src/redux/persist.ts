/**
 * IMPORTS
 */
import {
	persistReducer,
	persistStore,
	type PersistConfig,
} from "redux-persist";

import storage from "redux-persist/lib/storage/session";

// features
import { user } from "../features/user";
import { filter } from "../features/filter";
import { approval } from "../features/approval";
import { document } from "../features/document";

/**
 * Eu configuro um armazenamento redux persistente.
 */
const persistConfig: PersistConfig<unknown> = {
	key: "figged-frontend",
	storage,
	whitelist: [user.name, filter.name, approval.name, document.name],
};

/**
 * EXPORTS
 */
export { persistConfig, persistReducer, persistStore };
