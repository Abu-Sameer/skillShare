import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Movie({ save }) {
  const [select, setSelect] = useState();

  function handle() {
    setSelect(!select);
  }
  return (
    <div>
      <div className="movie">
        <div className="year">
          <p>{save.Year}</p>
        </div>
        <div>
          <div className="poster">
            <motion.img
              onClick={handle}
              animate={{
                scale: select ? ['150%'] : [],
                rotate: select ? 360 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 80,
              }}
              src={
                save.Poster !== 'N/A'
                  ? save.Poster
                  : 'https://via.placeholder.com/400'
              }
              alt="movie pic"
            />
          </div>
          <div className="text">
            <span>{save.Type}</span>
            <h3>{save.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
