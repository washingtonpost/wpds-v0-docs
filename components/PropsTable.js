import { Box, Icon, theme } from "@washingtonpost/wpds-ui-kit";
import Success from "@washingtonpost/wpds-assets/asset/success";

export const PropsTable = ({ props }) => {
  return (
    <Box
      as="table"
      css={{
        borderCollapse: "collapse",
        borderSpacing: "0",
        width: "100%",
        marginBottom: "calc($050 / 2)",

        // highlight row on hover
        // "& tr:hover": {
        //   backgroundColor: theme.colors.gray400,
        // },

        "& th": {
          textAlign: "left",
          fontWeight: "$light",
          borderBottom: "1px solid $subtle",
          fontSize: "$100",
          color: "$accessible",
          py: "$100",
        },
        "& td": {
          borderBottom: "1px solid $subtle",
          fontSize: "$100",
          color: "$accessible",
          py: "$100",
        },
        // style the first column of the table
        "& td:first-child": {
          fontWeight: "$bold",
          color: "$primary",
        },
      }}
    >
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        {props.map(({ name, type, rawType = "", required, defaultValue }) => (
          <Box
            as="tr"
            key={name}
            css={{
              verticalAlign: type === "enum" ? "top" : "middle",
            }}
          >
            <td>{name}</td>
            <Box as="td">
              <Box
                css={
                  type === "enum" && {
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "$050",
                  }
                }
              >
                <span>{type}</span>
                <Box
                  css={{
                    fontFamily: "$meta",
                    fontSize: "$087",
                    fontWeight: "$light",
                    lineHeight: "$110",
                    fontStyle: "italic",
                  }}
                >
                  {type === "enum" ? rawType : ""}
                </Box>
              </Box>
            </Box>
            <td>{defaultValue}</td>
            <td>
              {required === "true" ? (
                <Box
                  css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    columnGap: "calc($050 / 2)",
                  }}
                >
                  <Icon size="16">
                    <Success fill={theme.colors.success} />
                  </Icon>
                  True
                </Box>
              ) : (
                "False"
              )}
            </td>
          </Box>
        ))}
      </tbody>
    </Box>
  );
};
