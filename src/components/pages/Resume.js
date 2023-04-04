import React from 'react';
import pdfFile from './Lydias_Full_Stack_Resume.pdf'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
const url = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
pdfjs.GlobalWorkerOptions.workerSrc = url

export default function Resume() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Lydias_Full_Stack_Resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Lydias_Full_Stack_Resume.pdf';
        alink.click();
      })
    })
  }
  return (
    <div id="resume" className='col vw-100 bg-dark'>
      <h1>Resume</h1>
      <h3>Click button below to download.</h3>
        <Document file={pdfFile}>
          <Page pageNumber={1} />
        </Document>
        <button onClick={onButtonClick}>
          Download PDF
        </button>
    </div>
  );
}
