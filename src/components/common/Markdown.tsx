import * as React from 'react';
import MarkdownToJsx from 'markdown-to-jsx';
import styles from './Markdown.module.css';

export type Props = { content: string; className?: string };

const Markdown: React.FC<Props> = ({ content, className }) => {
  return (
    <MarkdownToJsx className={[styles.markdown, className].join(' ')} options={{ forceWrapper: true }}>
      {content}
    </MarkdownToJsx>
  );
};

export default Markdown;
