import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from 'components/report/Invoice';
import invoice from 'assets/data/invoice';

function DownloadInvoice() {
  return (
    <>
      <PDFDownloadLink
        document={<Invoice invoice={invoice} />}
        fileName="fee_acceptance.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </>
  );
}

export default DownloadInvoice;
