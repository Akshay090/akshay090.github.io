import React from "react";
import { Box, Link, Card, Heading, Text, Image } from "theme-ui";
import { format } from "date-fns";

export const ProjectCard = ({ title, misc, date, slug, index }) => {
  console.log(misc, "misc");
  return (
    <Box
      key={index}
      sx={{
        mb: 3,
        maxWidth: ["100%", "50%", "33.333%"],
        width: ["100%", "50%", "33.333%"],
      }}
    >
      <Link href={slug} sx={{ textDecoration: "none" }}>
        <Card
          sx={{
            ml: 2,
            mr: 2,
          }}
        >
          <Box sx={{ minHeight: "1px" }}>{misc && <Image src={misc} />}</Box>
          <Box sx={{ p: 3 }}>
            <Text sx={{ fontSize: 0, color: "muted" }}>
              {format(new Date(date), "d-MMM-u")}
            </Text>
            <Heading variant="styles.h4" sx={{ color: "text" }}>
              {title}
            </Heading>
            <Text sx={{ textDecoration: "underline" }}>View project</Text>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};