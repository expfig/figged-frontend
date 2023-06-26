/**
 * IMPORTS
 */
import styled from "styled-components";

const WrapperHeader = styled.div`
	width: 100%;
	height: 2.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const WrapperMain = styled.div`
	width: 100%;
	height: 100%;
	border-top: 1px solid ${({ theme }) => theme.colors.gray_350};
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray_350};
`;

const WrapperHeaderTitle = styled.div`
	width: 70%;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
`;

const ButtonClosed = styled.button`
	width: 3.12rem;
	height: 3.12rem;
	border-radius: 1.62rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const WrapperTextDescriptionModal = styled.div`
	width: 100%;
	height: 4.38rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: auto;
`;

const Label = styled.label`
	display: block;
`;

const TextArea = styled.textarea`
	margin: 15px 0;
	width: 100%;
	height: 100px;
	color: ${({ theme }) => theme.colors.gray_500};
	font-size: 1rem;
	padding: 16px;
`;

const WrapperButtonModal = styled.div`
	width: 100%;
	height: 4.38rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 2rem;
`;

/**
 * EXPORTS
 */
export {
	WrapperHeader,
	WrapperMain,
	WrapperHeaderTitle,
	ButtonClosed,
	WrapperTextDescriptionModal,
	Label,
	TextArea,
	WrapperButtonModal,
};
