import { useState } from 'react';

const useLogic = (mouseEnterCallback, defaultActive = false) => {
    const [ isActive, setActive ] = useState(defaultActive);

    const mouseEnterHandler = () => {
        setActive(true);
        mouseEnterCallback();
    }

    return { mouseEnterHandler, isActive };
}

const Block1 = ({ mouseEnterCallback, imgSrc, imgAlt }) => {
    const { mouseEnterHandler, isActive } = useLogic(mouseEnterCallback);

    return (
      <div onMouseEnter={mouseEnterHandler} className={ isActive ? 'active': '' }>
          <img src={imgSrc} alt={imgAlt} />
      </div>
    );
}

const Block2 = ({ mouseEnterCallback, content }) => {
    const { mouseEnterHandler, isActive } = useLogic(mouseEnterCallback);

    return (
      <div onMouseEnter={mouseEnterHandler} className={ isActive ? 'active': '' }>
          <p>BLock2 content: {content}</p>
      </div>
    );
}