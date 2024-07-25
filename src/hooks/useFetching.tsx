import { useState } from 'react';

export default function useFetching(
  callback: () => Promise<void>,
): [() => Promise<void>, boolean, string] {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetching() {
    try {
      setIsLoading(true);
      await callback();
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
