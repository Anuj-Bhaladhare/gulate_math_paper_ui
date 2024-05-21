import React from 'react';
import { Button } from 'primereact/button';    
import { ColorPicker } from 'primereact/colorpicker';
import Navbar from '../../components/Navbar';
import PdfViewer from '../../components/PdfViewer';
import PrintComponent from '../../components/PrintComponent';



const Papers = () => {

  class PrintButton extends React.Component {
    handlePrint = () => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<div style="margin:20px;">');
        printWindow.document.write(this.props.contentToPrint());
        printWindow.document.write('</div></body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    render() {
        return (
            <button onClick={this.handlePrint}>Print</button>
        );
    }
}

  return (
    <div>
        <div>
           <Navbar />
        </div>
        {/* <PdfViewer /> */}
        <PrintComponent />

        <PrintButton contentToPrint={() => <PrintComponent />} />

    </div>
  )
}

export default Papers;