import { Content } from 'react-bootstrap/lib/Tab';
import mock from './mock';

// const createTableX = () => {
//   const journeyTitle = mock.journeys.map((journey) => {
//     console.log([{ text: journey.journeyTitle, style: 'subheader' }]);
//   });
//   return journeyTitle;

//   // const journeyEvents = mock.journeys.map((journey) => {
//   //  zerar lista aqui
//   //   const journeyEvent = journey.eventos.map((evento) => {
//   //     return [
//   //       { text: evento.title, alignment: 'start' },
//   //       { text: evento.start, alignment: 'center' },
//   //       { text: evento.end, alignment: 'center' },
//   //       { text: evento.total, alignment: 'center' },
//   //     ];
//   //   });
//   // Adicionar
//   // });
// };

// STATIC
// const createHeaderTable = () => {
//   return [
//     { text: 'Title', style: 'tableHeader', alignment: 'start' },
//     { text: 'Start', style: 'tableHeader', alignment: 'center' },
//     { text: 'End', style: 'tableHeader', alignment: 'center' },
//     { text: 'Total', style: 'tableHeader', alignment: 'center' },
//   ];
// };

const createHeaderTable = () => {
  let headerTable = [
    { text: 'Title', style: 'tableHeader', alignment: 'start' },
    { text: 'Start', style: 'tableHeader', alignment: 'center' },
    { text: 'End', style: 'tableHeader', alignment: 'center' },
    { text: 'Total', style: 'tableHeader', alignment: 'center' },
  ];
  return headerTable;
};

const createTable = () => {
  const table = mock.journeys[0].eventos.map((evento) => {
    return [
      { text: evento.title, alignment: 'start' },
      { text: evento.start, alignment: 'center' },
      { text: evento.end, alignment: 'center' },
      { text: evento.total, alignment: 'center' },
    ];
  });
  return table;
};

const createFullTable = () => {
  const header = createHeaderTable();
  const table = createTable();

  let content = [header, ...table];
  console.log(content);
  return content;
};

var temp = createFullTable();

var dd = {
  pageSize: 'A4',
  pageOrientation: 'portrait',
  header: [{ text: 'Empresa', style: 'headerlogo' }],
  content: [
    { text: mock.name, style: 'header' },
    { text: 'Teste 1', style: 'subheader' },
    {
      style: 'tableExample',
      table: {
        widths: [80, 150, 150, 100],
        body: temp,
      },
    },
    //
    {
      text: 'Jornada Estática Teste ----------------------------',
      style: 'subheader',
    },
    {
      style: 'tableExample',
      table: {
        widths: [80, 150, 150, 100],
        body: [
          [
            { text: 'Title', style: 'tableHeader', alignment: 'start' },
            { text: 'Start', style: 'tableHeader', alignment: 'center' },
            { text: 'End', style: 'tableHeader', alignment: 'center' },
            { text: 'Total', style: 'tableHeader', alignment: 'center' },
          ],
          [
            { text: 'testee', alignment: 'start' },
            { text: '2021-01-18T15:13:06.223', alignment: 'center' },
            { text: '2021-01-19T17:13:11.453', alignment: 'center' },
            { text: '37min', alignment: 'center' },
          ],
          [
            { text: 'testee', alignment: 'start' },
            { text: '2021-01-18T15:13:06.223', alignment: 'center' },
            { text: '2021-01-19T17:13:11.453', alignment: 'center' },
            { text: '37min', alignment: 'center' },
          ],
        ],
      },
    },
    //
  ],

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
  },
  defaultStyle: {
    // alignment: 'justify'
  },
};

export default dd;
