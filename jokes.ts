import oneLinerJoke from "one-liner-joke";
import fs from "fs";
import { config } from "dotenv";
config();
interface Joke {
  body: string;
  tags: string[];
}
const jokes = (): void => {
  let rawJokeAmount: string | undefined = process.env.JOKE_AMOUNT;
  const jokeAmount: number | undefined = Number(rawJokeAmount);
  if (!rawJokeAmount) {
    rawJokeAmount = "50";
  }
  if (isNaN(jokeAmount) || jokeAmount < 50) {
    console.error("The number must be greater than 50.");
    return;
  }
  const jokes: Joke[] = oneLinerJoke.getAllJokesWithTag(
    process.env.JOKE_SUBJECT,
  );
  if (!jokes || jokes.length === 0) {
    console.error("No jokes found for the specified subject.");
    return;
  }
  const finalJokes: Joke[] = jokes.slice(0, jokeAmount);
  const content = JSON.stringify(finalJokes, null, 2);
  fs.writeFileSync("jokes.json", content);
  return;
};
jokes();
