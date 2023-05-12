'use client';

import { Highlight, themes } from 'prism-react-renderer';
import React, { ReactElement, Suspense } from 'react';
import styles from './styles.module.css';

export function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <Suspense fallback={<p>Loading code...</p>}>
      <Highlight theme={themes.vsLight} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }): ReactElement => (
          <pre className={styles.line} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className={styles.lineNumber}>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Suspense>
  );
}
