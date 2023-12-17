import 'dotenv/config';

import OpenAI from "openai";
import { readFile, readdir, writeFile, lstat, access, constants } from 'fs/promises'
import { mapLimit } from 'async';
import { extname } from "path";

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });

async function checkFileExists(file) {
  try {
    await access(file, constants.F_OK);
    return true;
  } catch(error) {
    console.log('Error', error)
    return false
  }
}

const PSEUDO_CODE_GENERATION_PROMPT = `You are a helpful assistant designed to output MD containing problem statement &example input with the programming language indepedent pseduo code for the c++ code given to you. Write the code in pseudo code format`;
const EXPLAIN_THE_KEY_CONCEPT_PROMPT = `You are a helpful assistant designed to output MD containing the key points required to solve the probkem. And How can a interviewer follow-up on this psuedo code. Write TimeComplexity and Space Complexity of the problem as well`;

async function main() {
  let directories = await readdir('./');
  const regexExp = /^\d{2}.*$/

  directories = directories.slice(0, 20)
  console.log(directories);
  // process.exit()
  await mapLimit(directories, 1, async (directory) => {
    if (!regexExp.test(directory)) return;

    const files = await readdir(`./${directory}/`);
    await mapLimit(files, 5, async (file) => {
      const fileStat = await lstat(`./${directory}/${file}`);
      console.log(file, fileStat.isFile())

      // Check if file is a .DS_Store
      // Check if it is a file
      // Check if it is not a cpp file
      if (file === '.DS_Store' || !fileStat.isFile() || extname(file) !== '.cpp') return;

      // This was there to avoid re-generation of MD. You know it costs money
      // const ifMdExists = await checkFileExists(`./${directory}/${file}`.replace('cpp', 'md'));
      // if (ifMdExists) {
      //   return;
      // }

      // Read Cpp File Data
      const data = await readFile(`./${directory}/${file}`, 'utf-8');
      
      console.log(`Starting pseudo code generation using AI for program: ->`, file);
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: EXPLAIN_THE_KEY_CONCEPT_PROMPT
          },
          { role: "user", content: data },
        ],
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "text" },
      });

      const result = completion.choices[0].message.content

      await writeFile(`./${directory}/${file.split('.cpp')[0]}-Key-Points.md`, result,  'utf-8')
      console.log(`Finished pseudo code generation using AI for program: ->`, file);
    })
  })
}

main();