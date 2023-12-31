/**
 * IMPORTS
 */
import { type IApprovalstate, NAME } from "./interface";

/**
 * Approval request interface.
 */
export interface IApprovalRequest {
	id: string | number;
	status: string;
	coil_number: string;
	trip_number: string;
	type: string;
	driver_name: string;
	placa: string;
	group_name: string;
	created_at: string;
	created_at_formatted: string;
}

export interface Data {
	token: string;
	page?: number;
	groupId?: number;
	tipo?: string;
	status?: string;
	coilNumber?: string | any;
	driverId?: number;
	truckId?: number;
	tripNumber: string | any;
}

/**
 * Approval response interface.
 */
export type IApprovalResponse = IApprovalstate;

/**
 * Approval action types.
 */
export const types = {
	GET_ALL_APPROVAL: `${NAME}/get-all-approval`,
	GET_ALL_APPROVALS_WITH_APPROVED_STATUS: `${NAME}/fetch-all-approvals-with-approved-status`,
};
