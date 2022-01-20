import * as Checkbox from "@radix-ui/react-checkbox";
import Check from "@washingtonpost/wpds-assets/asset/check";
import {
	Icon,
	theme,
	styled,
	VisuallyHidden,
} from "@washingtonpost/wpds-ui-kit";
import { useId } from "@react-aria/utils";

const StyledCheckbox = styled(Checkbox.Root, {
	all: "unset",
	backgroundColor: "$secondary",
	width: "$100",
	height: "$100",
	flex: "0 0 var(--base)",
	borderRadius: "$012",
	border: "1px solid $subtle",
	verticalAlign: "middle",
	display: "block",

	"&[aria-checked='true']": {
		backgroundColor: "$primary",
		borderColor: "transparent",
	},
});

const StyledIndicator = styled(Checkbox.Indicator, {
	color: theme.colors.onPrimary,
	flex: "0 0 16px",
	lineHeight: "0",
	width: "$100",
	height: "$100",
});

const StyledCheck = styled(Check, {
	flex: "0 0 16px",
	variants: {
		checked: {
			true: {
				visibility: "visible",
			},
			false: {
				visibility: "hidden",
			},
		},
	},

	defaultVariant: {
		checked: false,
	},
});

export const InputCheckbox = (props) => {
	const elementId = useId();

	return (
		<StyledCheckbox {...props} id={props.id || elementId}>
			<StyledIndicator>
				<Icon size="16">
					<StyledCheck
						fill={theme.colors.onPrimary}
						checked={props.checked}
					/>
				</Icon>
			</StyledIndicator>
			<VisuallyHidden htmlFor={props.id || elementId}>
				{props.checked ? "checked" : "not checked"}
			</VisuallyHidden>
		</StyledCheckbox>
	);
};
