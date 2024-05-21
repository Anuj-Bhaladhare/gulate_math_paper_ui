import React, { useRef, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';

pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.min.js';

function PdfViewer() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const loadingTask = pdfjsLib.getDocument('https://example.com/your-pdf-file.pdf');
        loadingTask.promise.then(pdf => {
            console.log('PDF loaded');
            
            // Fetch the first page
            pdf.getPage(1).then(page => {
                const scale = 1.5;
                const viewport = page.getViewport({ scale: scale });

                // Prepare canvas using PDF page dimensions
                const canvas = canvasRef.current;
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render PDF page into canvas context
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                const renderTask = page.render(renderContext);
                renderTask.promise.then(() => {
                    console.log('Page rendered');
                });
            });
        }, function (reason) {
            // PDF loading error
            console.error(reason);
        });
    }, []);

    const handlePrint = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            let win = window.open('', '_blank');
            win.document.write('<style>@page { size: auto; margin: 0mm; }</style>');
            win.document.write('<img src="' + canvas.toDataURL() + '"/>');
            win.document.write('<script>setTimeout(() => { window.print(); window.close(); }, 1000);<\/script>');
            win.document.close();
        }
    };

    return (
        <div>
            <canvas ref={canvasRef}></canvas>
            <button onClick={handlePrint}>Print PDF</button>
        </div>
    );
}

export default PdfViewer;
