export const width = '1000px';
export const height = '180px';
export const chartType = 'Calendar'
export const data=[
    [{ type: 'date', id: 'Date' }, { type: 'number', id: 'high risk and low socre' }],
    [new Date(2021, 1, 13), 0.6784],
    [new Date(2021, 1, 14), 0.7785],
    [new Date(2021, 1, 15), 0.5714],
    [new Date(2021, 1, 16), 0.7794],
    [new Date(2021, 3, 17), 0.9704],
    [new Date(2021, 3, 13), 0.6784],
    [new Date(2021, 3, 14), 0.7785],
    [new Date(2021, 3, 15), 0.5714],
    [new Date(2021, 4, 16), 0.7794],
    [new Date(2021, 4, 17), 0.9704],
    [new Date(2021, 4, 13), 0.6784],
    [new Date(2021, 4, 14), 0.7785],
    [new Date(2021, 5, 15), 0.5714],
    [new Date(2021, 5, 16), 0.7794],
    [new Date(2021, 5, 17), 0.9704],
    [new Date(2021, 6, 13), 0.6784],
    [new Date(2021, 6, 14), 0.7785],
    [new Date(2021, 6, 15), 0.5714],
    [new Date(2021, 7, 16), 0.7794],
    [new Date(2021, 7, 17), 0.9704],
    [new Date(2021, 7, 13), 0.6784],
    [new Date(2021, 8, 14), 0.7785],
    [new Date(2021, 8, 15), 0.5714],
    [new Date(2021, 8, 16), 0.7794],
    [new Date(2021, 8, 17), 0.9704],
    [new Date(2021, 9, 13), 0.6784],
    [new Date(2021, 9, 14), 0.7785],
    [new Date(2021, 9, 15), 0.5714],
    [new Date(2021, 10, 16), 0.7794],
    [new Date(2021, 10, 17), 0.9704],
  ]

export const options = {
    title: 'Pique C# Project Scores',
    calendar: {
        cellColor: {
          stroke: 'grey',      // Color the border of the squares.
          strokeOpacity: 0.5, // Make the borders half transparent.
          strokeWidth: 2      // ...and two pixels thick.

        },
        cellSize: '15',
        dayOfWeekLabel: {
            fontName: 'Times-Roman',
            fontSize: 12,
            color: 'black',
            bold: false,
            italic: true
        },
        focusedCellColor: {
            stroke: 'red',
            strokeOpacity: 0.8,
            strokeWidth: 3
          },
          monthOutlineColor: {
            stroke: '#226192',
            strokeOpacity: 0.8,
            strokeWidth: 2
          }
      },
    colorAxis: {colors:['#ff6150','#38b24d']}
}

export const showButton = false;
