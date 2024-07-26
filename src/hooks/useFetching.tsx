import { useState } from 'react';
import { NumberPair } from '../interfaces/types';

export default function useFetching(
  callback: (limit: number, page: number) => Promise<void>,
): [(limit: number, page: number) => Promise<void>, boolean, string] {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetching(...args: NumberPair) {
    try {
      setIsLoading(true);
      await callback(...args);
      if (error !== '') {
        setError('');
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  }
  return [fetching, isLoading, error];
}
