const fs = require('fs');
const lineReader = require('line-reader');

const start = (start, end, inputFile, colName) => {
    let index = 0;
    let colIndex = 0;
    const outputFile = 'output.txt';

    if ((start === 0 && index === end) || start > end) {
        console.log('Укажите корректный диапазон');
        return;
    }

    if (!inputFile) {
        console.log('Укажите название файла');
        return;
    }

    fs.open(outputFile,  'w', (error) => {
        if(error) throw error;
    });

    const writeStream = fs.createWriteStream(outputFile, { flags: 'a' });

    lineReader.eachLine(inputFile, (line, endLine, cb) => {
        if (index < 1 && colName) {
            const lineArray = line.toLocaleLowerCase().split(',');
            colIndex = lineArray.indexOf(colName.toLocaleLowerCase());
            if (colIndex === -1) {
                writeStream.end();
                console.log('Укажите корректное название колонки');
                cb(false);
                return;
            }
        }

        if (index >= start && index <= end) {
            const lineArray = line.split(',');
            const value = colIndex !== 0 ? lineArray[colIndex] : line;
            if (index === start) {
                writeStream.write(`{"${value}",`);
            } else if (index === end || endLine) {
                writeStream.write(`"${value}"}`);
            } else {
                writeStream.write(`"${value}",`);
            }
        }

        index++;

        if (endLine || index === end+1) {
            writeStream.end();
            console.log('Файл успешно обработан');
            cb(false);
        } else {
            cb();
        }

    });

};

start(
    Number(process.argv[2]) || 0,
    Number(process.argv[3]) || 0,
    process.argv[4] || null,
    process.argv[5] || null,
);