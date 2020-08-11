import React from "react";
import { format } from "date-fns";
import { Link as GatsbyLink } from "gatsby";
import {
  Flex,
  Box,
  Badge,
  Link,
  Card,
  Heading,
  Text,
  Divider,
  Button,
} from "theme-ui";
import { mix } from "@theme-ui/color";

export const PostCard = ({
  title,
  // featuredImageUrl,
  tags,
  date,
  excerpt,
  slug,
  pinned,
  timeToRead,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        mb: 3,
        width: "100%",
      }}
    >
      <Link
        as={GatsbyLink}
        to={slug}
        sx={{
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          m: (theme) => `0px ${theme.space[2]}px`,
          minHeight: "1px",
          textDecoration: "none",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            minHeight: "1px",
            p: 3,
          }}
        >
          <Flex
            sx={{
              justifyContent: "space-between",
            }}
          >
            {pinned ? (
              <span role="img" aria-labelledby="A thumbtack (drawing pin),">
                📌
              </span>
            ) : (
              <span />
            )}

            <Box
              sx={{
                display: "inline-flex",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <Text sx={{ color: "muted" }}>
                {format(new Date(date), "d-MMM-u")}
              </Text>

              <Text sx={{ color: "muted" }}>{`${timeToRead} min read`}</Text>
            </Box>
          </Flex>
          <Divider />
          <Heading as="h3" variant="styles.h3" sx={{ color: "text" }}>
            {title}
          </Heading>
          <Text sx={{ color: "text", wordBreak: "break-word" }}>{excerpt}</Text>
          <Divider />
          <Box
            sx={{
              ml: "2px",
            }}
          >
            {tags.map((tag, index) => {
              return (
                <Badge
                  key={index}
                  variant="primary"
                  sx={{
                    mr: 2,
                    mb: 2,
                    color: mix("muted", "primary", `${index / tags.length}`),
                    borderColor: mix(
                      "muted",
                      "primary",
                      `${index / tags.length}`
                    ),
                  }}
                >
                  {tag}
                </Badge>
              );
            })}
          </Box>
          <Divider />
          <Button as="span" variant="ghost" sx={{ pointerEvents: "none" }}>
            Read article {/* eslint-disable */}
            <Box as="span" role="img" aria-label="pencil">
              ✏️
            </Box>
          </Button>
        </Card>
      </Link>
    </Box>
  );
};
