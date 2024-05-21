import {createTheme} from '@mantine/core';
import {Lora, Source_Code_Pro} from 'next/font/google';

const lora = Lora({subsets: ['latin']});
const sourceCodePro = Source_Code_Pro({subsets: ['latin']});

export const theme = createTheme({
  fontFamily: sourceCodePro.style.fontFamily,
  defaultRadius: 'md',
  headings: {fontFamily: lora.style.fontFamily},
});
