import {FC, useState} from 'react';

const MessageText: FC<{text: string}> = ({text}) => {

  return (
    <p>
      {
        text.split(' ').map((word, index) => {
          if (word[0] === '@') {

            const [info, setInfo] = useState<boolean>(false)

            return (
              <span style={{position: 'relative'}}>
                <a
                  onMouseEnter={() => setInfo(true)}
                  onMouseLeave={() => setInfo(false)}
                  className="message__member" href="https://github.com/glebgubckin">{ word + ' ' }
                </a>
                <div style={{display: info ? 'block' : 'none'}} className="message__member__info">
                  {word}
                </div>
              </span>
            )
          }
          return word + ' '
        })
      }
    </p>
  );
};

export default MessageText;