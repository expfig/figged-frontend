/**
 * IMPORTS
 */
import { FiLoader } from "react-icons/fi";
import { useTheme } from "styled-components";

// typings
import { type LoadingProps } from "./interface";

// styles
import { ContainerLoading, WrapperIcon } from "./styles";

const Loading = ({ color = "#0d6efd", size = 34 }: LoadingProps) => {
	const theme = useTheme();
	return (
		<ContainerLoading>
			<WrapperIcon>
				<FiLoader size={size} color={color} />
				<p style={{ marginTop: 12 }}>
					<strong style={{ color: theme.colors.black_100 }}>
						Carregando, por favor, aguade.
					</strong>
				</p>
			</WrapperIcon>
		</ContainerLoading>
	);
};

/**
 * EXPORTS
 */
export { Loading };
