import { SuccessFetchAnswer } from '../interfaces/types';

export default async function fetchResults(inputText: string): Promise<SuccessFetchAnswer | 'bad'> {
  if (inputText) {
    try {
      const result = await fetch(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d50b74cc2abc8ca99a668840bd5db3e4&tags=${inputText}&extras=url_l&format=json&nojsoncallback=1&per_page=20&page=1`,
      );
      if (result.ok) {
        const answer = await result.json();
        return answer;
      } else return 'bad';
    } catch {
      console.log('result was caught');
    }
  }
}
