import { stringify } from 'node:querystring';
import { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { TemplateKatex } from '../../../service/converts/markdown';
import { KatexConst } from '../../../settings/staticData/katex_const';

// tham khảo https://katex.org/docs/supported.html

const HomePage = () => {
  const [text, setText] = useState('');
  const [html, setHtml] = useState('');
  const [KatexArray, setKatexArray] = useState(KatexConst[0].data as any[]);
  const renderKetex = () => {
    return KatexArray.map((item, index) => {
      return (
        <div key={index}>
          <div>
            <TemplateKatex element={{ Type: 'block', Content: item }} /> ||
            <span>{item}</span>
          </div>
        </div>
      );
    });
  };
  const emitChange = (e: any) => {
    // console.log(e.target.value);
    let textE = e.target.value;
    textE = textE
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&nbsp;/g, ' ')
      .replace(/&quot;/g, '"')
      .replace(/<div>|<br>/g, '$\\newline$')
      .replace(/<\/div>/g, '')
      .replace(/&#039;/g, "'")
      .replace(/(\\[ubi]{1,3})\{([^])\}/g, (text: string, type = '', value = '') => {
        let valueText = value;
        let types = [] as string[];
        types = type.split('');
        types.shift();
        types.forEach((item) => {
          valueText = `<${item}>${valueText}</${item}>`;
        });
        return valueText;
      });
    setHtml(e.target.value);
    // console.log(e.target.value);

    // console.log(textE);

    setText(textE);
  };

  const renderDivInput = () => {
    return <ContentEditable html={html} onChange={emitChange} tagName="article" spellCheck={false}></ContentEditable>;
  };
  const renderAnswerInput = () => {
    let Answertext = [] as any[];
    text.replace(/\{\{([^]*?)\}\}?/g, (match, answers) => {
      Answertext = [answers];
      return match;
    });
    return <div>{Answertext.toString()}</div>;
  };
  return (
    <>
      <div> {renderDivInput()}</div>
      <TemplateKatex element={{ Type: 'block', Content: text }} />
      <div> {renderAnswerInput()}</div>
    </>
  );
};

export default HomePage;
