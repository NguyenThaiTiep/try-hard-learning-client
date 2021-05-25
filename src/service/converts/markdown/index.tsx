import React from 'react';

import './index.scss';
import Latex from 'react-latex-next';
interface Props {
  element: {
    Type: string;
    Content: string;
  };
}

export const TemplateKatex: React.FC<Props> = ({ element }) => {
  return (
    <Latex
      delimiters={[
        { left: '$$', right: '$$', display: true },
        { left: '\\(', right: '\\)', display: false },
        { left: '$', right: '$', display: false },
        { left: '\\[', right: '\\]', display: true },
      ]}>
      {element.Content}
    </Latex>
  );
};
