import React, { useState, useRef, useEffect } from "react";
import { Flex } from "theme-ui";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Resume = ({ file }) => {
  let pdfWrapper = useRef(null);
  const windowWidth = useWindowWidth();
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState();

  useEffect(() => {
    setPageWidth(
      pdfWrapper.current?.getBoundingClientRect().width || undefined
    );
  }, [windowWidth]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Flex sx={{ justifyContent: "center" }} ref={pdfWrapper}>
      {console.log(pdfWrapper)}
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={pageWidth}
          />
        ))}
      </Document>
    </Flex>
  );
};

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
}
