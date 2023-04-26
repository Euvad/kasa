import React from 'react'
import './accordion.scss'
import arrow from '../../assets/arrow.png'
import { useState, useEffect, useRef } from 'react'
export default function Accordion(props) {
  const [toggle, setToggle] = useState(false);

  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && props.toggle === props.dataid) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [props.toggle, props.dataid]);

  return (
    <div className='wrapper'>
      <div className="accordion" >
        <div className='item' key={props.dataid}>
          <h3 className='title' onClick={() => (props.dataid === undefined ? setToggle(!toggle) : props.activate(props.dataid))}>
            {props.title}
            <img
              className={(props.toggle === undefined ? toggle : props.toggle === props.dataid) ? 'arrow arrow_up' : 'arrow arrow_down'}
              src={arrow}
              alt="show content"
            />
          </h3>
          <div className={(props.toggle === undefined ? toggle : props.toggle === props.dataid) ? 'content show' : 'content'}
            style={{ maxHeight: `${(props.toggle === undefined ? toggle : props.toggle === props.dataid) ? height + 30 +'px' : '0'}` }}
          >
            <div ref={contentRef} className='test'>
              {Array.isArray(props.content) ? props.content.map((item, index) => {
                return (
                  <p key={index}>{item}</p>
                )

              }) : props.content
              }
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

  //props.activate(props.dataid)