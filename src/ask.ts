import prompt from 'prompt';

export async function ask() {
  prompt.start();
  const { name } = await prompt.get(['name']);
  console.log(`Name: ${name}`);
}
