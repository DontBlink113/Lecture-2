import prompt from 'prompt';

import pascal from './problems/pascal';
import people from './problems/people';
import sort from './problems/sort';

export async function ask() {
  prompt.start();
  const { problem } = await prompt.get(['problem']);
  if (problem === '1' || problem === 'pascal') {
    pascal();
  } else if (problem === '2' || problem === 'people') {
    people();
  } else if (problem === '3' || problem === 'sort') {
    sort();
  } else {
    console.log('Invalid problem number');
  }
}
