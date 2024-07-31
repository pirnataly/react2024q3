import { useState } from 'react';

export default function useFetching<T>(
  callback: (...args: Array<T>) => Promise<void>,
): [(...args: Array<T>) => Promise<void>, boolean, string] {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetching(...args: Array<T>) {
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
