import { useState, useEffect } from 'react';
import { animationDelay } from '../../LoadingScreen';

// TODO make an API request here.
export const useHomePageData = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, animationDelay);
  }, []);
  return !loading;
};
