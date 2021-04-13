import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfDoc from './pdfDoc';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PdfPageComponent = () => {
  const handleShowPdf = () => {
    pdfMake.createPdf(pdfDoc).open({}, window);
  };

  return (
    <div className={styles.container}>
      <Button onClick={handleShowPdf}>Gerar Pdf</Button>
    </div>
  );
};

export default PdfPageComponent;
