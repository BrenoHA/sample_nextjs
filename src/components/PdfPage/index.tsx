import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfDoc from '../../utils/pdfDoc';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PdfPageComponent = () => {
  const buildPdf = () => {
    //map passing name, journeys[] {title, start, final, observation }
  };

  const handleShowPdf = () => {
    // Calls built pdf
    pdfMake.createPdf(pdfDoc).open({}, window.open('', '_blank'));
  };

  return (
    <div className={styles.container}>
      <Button onClick={handleShowPdf}>Gerar Pdf</Button>
    </div>
  );
};

export default PdfPageComponent;
