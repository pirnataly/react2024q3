import axios from 'axios';
import { SuccessFetchAnswer } from '../interfaces/types';

let counter = 0;

export default async function fetchResults(
  inputText: string | null,
): Promise<SuccessFetchAnswer | 'bad' | undefined> {
  if (inputText) {
    try {
      const result = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d50b74cc2abc8ca99a668840bd5db3e4&tags=${inputText}&extras=url_l&format=json&nojsoncallback=1&per_page=20&page=1&content_types=0&privacy_filter=1`,
      );
      if (result.status === 200) {
        return result.data;
      }
      return 'bad';
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.name === 'TypeError') {
          if (counter < 3) {
            counter += 1;
            return fetchResults(inputText);
          }
        }
        return 'bad';
      }
    }
  }
  return 'bad';
}
