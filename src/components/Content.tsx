import React from 'react';

interface ContentProps {
  isActive: boolean;
  content: string;
}

const Content = (prop: ContentProps) => {
  return (
    <div>
      {prop.isActive ? <p>{prop.content}</p> : <p>Content is not available.</p>}
    </div>
  );
};

export default Content;

