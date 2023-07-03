/**
 * IMPORTS
 */
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { createAxiosInstance } from "../../infra/services/http/axios/api";
import axios from "axios";
import { types, type IFilterResponse } from "./actions-types";

const BASE_URL = "http://grupofigueiredo.com.br:1111/figged";

interface Data {
	token: string;
	regionName?: string;
	page?: number;
}

const fetchAllgroups = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_GROUPS,

	// request fetch groups
	async ({ token }: Data) =>
		await axios.get(`${BASE_URL}/autocomplete/grupos`, {
			headers: {
				Authorization: `Token ${token}`,
			},
		})
);

const fetchAllTypes = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_TYPES,

	// request fetch tipos
	async ({ token }: Data) =>
		await axios.get(`${BASE_URL}/autocomplete/tipo`, {
			headers: {
				Authorization: `Token ${token}`,
			},
		})
);

const fetchAllStatus = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_TYPES,

	// request fetch status
	async ({ token }: Data) =>
		await axios.get(`${BASE_URL}/autocomplete/status`, {
			headers: {
				Authorization: `Token ${token}`,
			},
		})
);

const fetchAllCoils = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_COILS,

	// request fetch coils
	async ({ token, page }: Data) =>
		await axios.get(
			`${BASE_URL}/autocomplete/numero_bobina?page=${Number(page)}`,
			{
				headers: {
					Authorization: `Token ${token}`,
				},
			}
		)
);

const fetchAllDrivers = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_DRIVERS,

	// request fetch drivers
	async ({ token, page }: Data) =>
		await axios.get(`${BASE_URL}/autocomplete/motorista?page=${Number(page)}`, {
			headers: {
				Authorization: `Token ${token}`,
			},
		})
);

const fetchAllPlates = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_PLATES,

	// request fetch plates
	async ({ token, page }: Data) =>
		await axios.get(`${BASE_URL}/autocomplete/placa?page=${Number(page)}`, {
			headers: {
				Authorization: `Token ${token}`,
			},
		})
);

const fetchAllTripNumber = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_TRIP_NUMBER,

	// request fetch trip number
	async ({ token, page }: Data) =>
		await axios.get(
			`${BASE_URL}/autocomplete/numero_viagem?page=${Number(page)}`,
			{
				headers: {
					Authorization: `Token ${token}`,
				},
			}
		)
);

/**
 * EXPORTS
 */
export {
	fetchAllgroups,
	fetchAllTypes,
	fetchAllStatus,
	fetchAllCoils,
	fetchAllDrivers,
	fetchAllPlates,
	fetchAllTripNumber,
};