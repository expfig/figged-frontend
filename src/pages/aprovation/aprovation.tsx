/* eslint-disable @typescript-eslint/no-misused-promises */
/**
 * IMPORTS
 */

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useParams } from "react-router-dom";

// axios
import { useDispatch } from "react-redux";

// components
import { ImageCustom } from "../../components/image";
import { Text } from "../../components/text";
import { Table } from "../../components/table";
import { Loading } from "../../components/loading";

// screen-specific-component
import { ModalAprovation } from "./components/modal-aprovation/modal-aprovation";
import { ModalCancelAprovation } from "./components/modal-cancel-aprovation";

// typings
import {
	type IDataPagesProps,
	type IDocumentDataResponse,
	type IDataTable,
} from "./interface";

// functions
import { handleGetAllDocuments } from "./functions/functions-aprovation";
import { handleReturnText } from "./functions/functions-handle-return-text";
import { handleOnClickPagination } from "./functions/functions-handle-on-click-pagination";
import { handleGetCurrentData } from "../../utils/get-current-data";

// styles
import {
	ContainerMain,
	WrapperImage,
	WrapperTitle,
	WrapperImageNotFoundData,
	ImageNotFoundData,
} from "./styles";
import { handleDocomentApprovalOne } from "./functions/functions-document-aprovation";

const Aprovation = () => {
	const theme = useTheme();
	const token = "ec4c56361ddbb8c058be23575e8bb7cff585c2c9";

	const { idAprovacao, idDriveName } = useParams();

	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);

	const [loadingAprovation, setLoadingAprovation] = useState(false);

	const [isModal, setIsModal] = useState(false);
	const [isModalReproach, setIsModalReproach] = useState(false);

	const [documents, setDocuments] = useState<IDocumentDataResponse>({
		code: 0,
		data: [],
		aprovacao: {} as any,
	});

	const [dataTable, setDataTable] = useState<IDataTable[]>([]);
	const [pagesData, setPagesData] = useState<IDataPagesProps[]>([]);

	const [countPage, setCountPage] = useState(1);
	const [idImage, setImageID] = useState<any>();

	// função que busca o document de um morista especifico
	const onHandleGetAllDocuments = async () => {
		if (idAprovacao && idDriveName) {
			await handleGetAllDocuments({
				setLoading,
				dispatch,
				token,
				idAprovacao,
				countPage,
				idDriveName,
				setDocuments,
				setDataTable,
				setPagesData,
			});
		}
	};

	// função levar usuário pra poxima paganina ou para a anterior
	const handleOnclickPageNextOrPreview = useCallback(
		(netxOrPreview: string, pageNumber: any) => {
			handleOnClickPagination({
				netxOrPreview,
				pageNumber,
				setCountPage,
				countPage,
			});
		},
		[countPage]
	);

	useEffect(() => {
		onHandleGetAllDocuments();
	}, [countPage, idAprovacao]);

	return (
		<>
			{loading ? (
				<Loading color={theme.colors.blue_100} size={34} />
			) : (
				<>
					{isModal && (
						<ModalAprovation
							isModalOpen={isModal}
							isLoading={loadingAprovation}
							onOpenAndClosedClick={() => {
								setIsModal(!isModal);
							}}
							onAprovationDocumentAndCoil={() => {
								handleDocomentApprovalOne({
									setLoadingAprovation,
									setIsModal,
									setImageID,
									setLoading,
									token,
									dispatch,
									handleGetCurrentData,
									idImage,
									onHandleGetAllDocuments,
								});
							}}
						/>
					)}
					{isModalReproach && (
						<ModalCancelAprovation
							isModalOpen={isModalReproach}
							onOpenAndClosedClick={() => {
								setIsModalReproach(!isModalReproach);
							}}
							onAprovationDocumentAndCoil={() => {}}
						/>
					)}
					<ContainerMain>
						<WrapperTitle>
							<Text
								width={"100%"}
								marginTop={18}
								text={handleReturnText({
									document: documents?.aprovacao,
									numberDocument: Number(idAprovacao),
								})}
								align="left"
								letterHeight={24}
								letterSpacing={0.5}
								color={theme.colors.black_200}
								size={24}
								weight="600"
								marginBottom={16}
							/>
						</WrapperTitle>
						<>
							{documents.data.length ? (
								<WrapperImage>
									{documents.data.map((doc: any, index) => (
										<ImageCustom
											key={String(index)}
											type={documents.aprovacao.status}
											username={doc.user}
											approvalDate={doc?.formatted_updated_at}
											imageUri={doc?.file_url}
											onClickApproved={() => {
												setImageID(doc.id);
												setIsModal(!isModal);
											}}
											onClickDisapproved={() => {
												setIsModalReproach(!isModalReproach);
											}}
										/>
									))}
								</WrapperImage>
							) : (
								<WrapperImageNotFoundData>
									<ImageNotFoundData
										src="https://img.myloview.com.br/posters/icone-da-pagina-do-arquivo-do-documento-do-prazo-do-horario-400-112384520.jpg"
										alt="not-found"
									/>
									<Text
										width={"100%"}
										marginTop={18}
										text={`Nenhuma foto de bobina ou comprovante encontrada...`}
										align="center"
										letterHeight={18}
										letterSpacing={0.5}
										color={theme.colors.black_200}
										size={24}
										weight="600"
									/>
								</WrapperImageNotFoundData>
							)}
						</>

						{/** COMPONENTE DE TABELA */}
						<Table
							data={dataTable}
							pages={pagesData}
							onClickNext={(pageCount: any) => {
								handleOnclickPageNextOrPreview("next", Number(pageCount));
							}}
							onClickPreview={(pageCount: any) => {
								handleOnclickPageNextOrPreview("preview", Number(pageCount));
							}}
						/>
					</ContainerMain>
				</>
			)}
		</>
	);
};

/**
 * EXPORTS
 */
export { Aprovation };
