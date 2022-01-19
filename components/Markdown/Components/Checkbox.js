import * as Checkbox from "@radix-ui/react-checkbox";
import Check from "@washingtonpost/wpds-assets/asset/check";
import {
	Icon,
	theme,
	styled,
	VisuallyHidden,
} from "@washingtonpost/wpds-ui-kit";

const StyledCheckbox = styled(Checkbox.Root, {
	all: "unset",
	backgroundColor: "$secondary",
	width: "$100",
	height: "$100",
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
	lineHeight: "0",
	width: "$100",
	height: "$100",
});

const StyledCheck = styled(Check, {
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
	return (
		<StyledCheckbox {...props} id="c1">
			{!props.checked && (
				<StyledCheck
					fill={theme.colors.onPrimary}
					checked={props.checked}
					css={{
						// i have no idea why this is necessary
						// in chrome latest version, the checkbox
						// renders smaller in width than it should
						width: "24px",
					}}
				/>
			)}
			<StyledIndicator>
				<Icon size="16">
					<StyledCheck
						fill={theme.colors.onPrimary}
						checked={props.checked}
					/>
				</Icon>
			</StyledIndicator>
			<VisuallyHidden htmlFor="c1">
				{props.checked ? "checked" : "not checked"}
			</VisuallyHidden>
		</StyledCheckbox>
	);
};
