import { Chevron } from '@/components/icons/Chevron';
import '@/styles/components/dropdown.scss';
import { useState } from 'react';

export const Dropdown = ({ title, content, contentList }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`dropdown ${isOpen && 'open'}`}>
      <div className='dropdown-header'>
        {title && <p>{title}</p>}
        <button onClick={() => setIsOpen(!isOpen)}>
          <Chevron />
        </button>
      </div>
      <div className='dropdown-content'>{content && <p>{content}</p>}</div>
      <div className='dropdown-content'>
        {contentList && (
          <ul>
            {contentList.map((element) => (
              <li key={element}>{element}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
