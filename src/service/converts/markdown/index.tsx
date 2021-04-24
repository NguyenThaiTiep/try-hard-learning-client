import React from 'react';
import MJ from 'react-mathjax-ts';

const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`;

export const Formula = () => (
  <div>
    <MJ.Context
      onLoad={() => console.log('Loaded MathJax script!')}
      onError={(MathJax: any, error: any) => {}}
      input="tex"
      script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MJ.js?config=AM_HTMLorMML">
      <div>
        This is an inline math formula: <MJ.Node inline>{tex}</MJ.Node>
      </div>
    </MJ.Context>
  </div>
);
