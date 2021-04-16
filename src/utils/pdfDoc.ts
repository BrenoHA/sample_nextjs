import { Content } from 'react-bootstrap/lib/Tab';
import mock from './mock';

const createContent = () => {
  const content = mock.journeys.map((journey) => {
    var tempTable = [
      [
        { text: 'Title', style: 'tableHeader', alignment: 'start' },
        { text: 'Start', style: 'tableHeader', alignment: 'center' },
        { text: 'End', style: 'tableHeader', alignment: 'center' },
        { text: 'Total', style: 'tableHeader', alignment: 'center' },
      ],
    ];

    journey.eventos.map((evento) => {
      tempTable.push([
        { text: evento.title, style: 'tableContent', alignment: 'start' },
        { text: evento.start, style: 'tableContent', alignment: 'center' },
        { text: evento.end, style: 'tableContent', alignment: 'center' },
        { text: evento.total, style: 'tableContent', alignment: 'center' },
      ]);
    });

    var journeyTitle = [
      {
        text: journey.journeyTitle,
        style: 'subheader',
      },
      {
        style: 'tableExample',
        table: {
          widths: [80, 150, 150, 100],
          body: tempTable,
        },
      },
    ];

    return journeyTitle;
  });

  return content;
};

var dd = {
  pageSize: 'A4',
  pageOrientation: 'portrait',
  header: [{ text: 'Empresa', style: 'headerlogo' }],
  content: [createContent()],

  styles: {
    headerlogo: {
      fontSize: 18,
      margin: [10, 10, 0, 0],
    },
    header: {
      fontSize: 18,
      bold: true,
      margin: [0, 10, 0, 10],
    },
    subheader: {
      fontSize: 16,
      bold: true,
      margin: [0, 10, 0, 5],
    },
    tableStyle: {
      margin: [0, 5, 0, 15],
    },
    tableHeader: {
      bold: true,
      fontSize: 13,
      color: 'black',
    },
    tableContent: {
      color: 'black',
    },
  },
  defaultStyle: {
    // alignment: 'justify'
  },
};

export default dd;
