/**
 * IMPORTS
 */

import { toast } from "react-toastify";

// actions-redux
import { actions as ActionsDocument } from "../../../features/document";

// typings
import { type IDocumentApprovalOneProps } from "./interface-functions";

/**
 * FUNÇÃO QUE APROVA O COMPROVANTE OU A BOBINA
 */
const handleDocumentApprovalOne = async ({
	setLoadingAprovationOrReproach,
	dispatch,
	handleGetCurrentData,
	idImage,
	setImageID,
	setIsLoading,
	setIsOpenModalAprotion,
	handlePendingApprovalSeeking,
}: IDocumentApprovalOneProps) => {
	try {
		setLoadingAprovationOrReproach(true);
		setIsLoading(true);

		const patchData = {
			status: "aprovado",
			status_reprovado_mensagem: null,
			sec_users_id: "sgt",
			data_atualizacao_usuario: handleGetCurrentData,
		};

		// response da aprovação
		const responseApprovedDocument = await dispatch(
			ActionsDocument.patchOneDocument({
				idDocument: idImage,
				dataOdUpdate: patchData,
			})
		);

		// caso der suceso vamos executar abaixo
		if (responseApprovedDocument.payload.data) {
			toast.success("Documento aprovado com sucesso.", {
				position: "top-right",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setImageID(null); // limpando estado do id da image

			await handlePendingApprovalSeeking();
		}
	} catch (error) {
		toast.success("Documento não foi aprovado.", {
			position: "top-right",
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		return error;
	} finally {
		setIsLoading(false);
		setIsOpenModalAprotion(false); // fechar modal da aprovação
		setLoadingAprovationOrReproach(false);
	}
};

/**
 * EXPORTS
 */
export { handleDocumentApprovalOne };
