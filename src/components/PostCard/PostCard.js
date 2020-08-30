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
  Image,
  Text,
  Divider,
  Button,
} from "theme-ui";
import { mix } from "@theme-ui/color";

export const PostCard = ({
  title,
  cardImage,
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
          }}
        >
          <Box sx={{ minHeight: "1px" }}>
            {cardImage && <Image src={cardImage} />}
          </Box>

          <Box
            sx={{
              p: 3,
            }}
          >
            <Flex
              sx={{
                justifyContent: "space-between",
              }}
            >
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
              {pinned ? (
                <span role="img" aria-labelledby="A thumbtack (drawing pin),">
                  📌 {' '}
                </span>
              ) : (
                <span />
              )}
              {title}
            </Heading>
            <Text sx={{ color: "text", wordBreak: "break-word" }}>
              {excerpt}
            </Text>
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
            <Button as="span" variant="ghost" sx={{ pointerEvents: "none", width: "100%" }}>
              Read article {/* eslint-disable */}
              <Box as="span" role="img" aria-label="pencil">
                ✏️
              </Box>
            </Button>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};
