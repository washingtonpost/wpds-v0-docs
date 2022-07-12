import { Header } from "~/components/Markdown/Components/headers";
import Link from "~/components/Markdown/Components/link";
import CustomLink from "~/components/Markdown/Components/link";

import { Box, Icon, theme, styled } from "@washingtonpost/wpds-ui-kit";
import ChevronRight from "@washingtonpost/wpds-assets/asset/chevron-right";

const SeeAll = styled(Header, {
  display: "flex",
  margin: "$100 0 $200",
  alignItems: "center",
  variants: {
    type: {
      New: { display: "none" },
      Workshops: {
        marginBottom: "0",
        "@notSm": {
          marginBottom: "-$300",
        },
      },
      Last: {
        marginBottom: "0",
        "@notSm": {
          marginBottom: "-$300",
        },
      },
    },
  },
});

const ChevronForLink = styled(ChevronRight, {
  fill: theme.colors.accessible,
});

export const SeeAllLink = (props) => {
  const name = props?.name?.toLowerCase() || "";
  return (
    <Link href={props.href}>
      <SeeAll as="h4" type={props.type}>
        <Box css={{ borderBottom: "1px solid $accessible" }}>
          See all {name}
        </Box>
        <Icon>
          <ChevronForLink />
        </Icon>
      </SeeAll>
    </Link>
  );
};

export const NewCustomLink = styled(Link, {
  variants: {
    type: {
      New: {
        pointerEvents: "none",
      },
    },
  },
});
