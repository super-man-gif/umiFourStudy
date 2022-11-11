import React, { useEffect } from 'react';
import { history } from 'umi';

const Home: React.FC = () => {
  useEffect(() => {
    console.log('process.env', process.env);
  }, []);

  return (
    <div
      onClick={() => {
        history.push('/dog');
      }}
    >
      1111111111
    </div>
  );
};

export default Home;
