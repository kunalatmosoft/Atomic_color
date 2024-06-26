// index.js
/*
MIT License

Copyright (c) 2024 KUNAL SINGH ATMOSOFT&trade;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/ 
import chalk from 'chalk';

// Text Colors
export const red = (message) => chalk.red(message);
export const green = (message) => chalk.green(message);
export const blue = (message) => chalk.blue(message);
export const yellow = (message) => chalk.yellow(message);
export const cyan = (message) => chalk.cyan(message);
export const magenta = (message) => chalk.magenta(message);
export const white = (message) => chalk.white(message);
export const gray = (message) => chalk.gray(message);
export const black = (message) => chalk.black(message);

// Background Colors
export const bgRed = (message) => chalk.bgRed(message);
export const bgGreen = (message) => chalk.bgGreen(message);
export const bgBlue = (message) => chalk.bgBlue(message);
export const bgYellow = (message) => chalk.bgYellow(message);
export const bgCyan = (message) => chalk.bgCyan(message);
export const bgMagenta = (message) => chalk.bgMagenta(message);
export const bgWhite = (message) => chalk.bgWhite(message);
export const bgBlack = (message) => chalk.bgBlack(message);

// Text Styles
export const bold = (message) => chalk.bold(message);
export const dim = (message) => chalk.dim(message);
export const italic = (message) => chalk.italic(message);
export const underline = (message) => chalk.underline(message);
export const inverse = (message) => chalk.inverse(message);
export const strikethrough = (message) => chalk.strikethrough(message);

// Combined Functions
export const success = (message) => chalk.green.bold(message);
export const error = (message) => chalk.red.bold(message);
export const warning = (message) => chalk.yellow.bold(message);
export const info = (message) => chalk.blue.bold(message);

// Rainbow Colors (custom)
export const rainbow = (message) => {
    const colors = [chalk.red, chalk.yellow, chalk.green, chalk.cyan, chalk.blue, chalk.magenta];
    return message.split('').map((char, i) => colors[i % colors.length](char)).join('');
};

// Example usage function
export const exampleUsage = () => {
    console.log(success('Success: Operation completed successfully!'));
    console.log(error('Error: An error occurred!'));
    console.log(warning('Warning: This is a warning!'));
    console.log(info('Info: This is an informational message.'));
    console.log(red('This is red text.'));
    console.log(bgGreen('This is text with a green background.'));
    console.log(italic('This is italic text.'));
    console.log(rainbow('This is rainbow text.'));
};
