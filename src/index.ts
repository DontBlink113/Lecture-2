import { ask } from './ask';
import { hello } from './hello';

async function main() {
  hello();
  await ask();
}

main();
