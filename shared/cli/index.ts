import { existsSync } from 'fs';
import { exec } from 'child_process';
import ora from 'ora';

export function isNodeDir() {
  if (existsSync('package.json')) return true;
  else return false;
}

export function run(command: string) {
  return new Promise<string>((resolve, reject) => {
    exec(command, (err, stout, sterr) => {
      if (err) {
        reject(sterr);
      } else {
        resolve(stout);
      }
    });
  });
}

export function install(...packages: string[]) {
  return run(`npm install ${packages.join(' ')}`);
}

export function installDev(...packages: string[]) {
  return run(`npm install ${packages.join(' ')} --save-dev`);
}

export async function step(name: string, callback: () => void) {
  const spinner = ora(name).start();

  try {
    await callback();
    spinner.succeed();
  } catch (e) {
    spinner.fail(e instanceof Error ? e.message : undefined);
    process.exit(1);
  }
}
