import { FC } from 'react';

const MessageText: FC<{text: string}> = ({text}) => {

  return (
    <p>
      {
        text.split(' ').map(word => {
          if (word[0] === '@') {
            return <a className="message__member" href="https://github.com/glebgubckin">{ word + ' ' }</a>
          }
          return word + ' '
        })
      }
    </p>
  );
};

export default MessageText;