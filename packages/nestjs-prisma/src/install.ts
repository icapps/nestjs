#!/usr/bin/env node

import { install, installDev, run, isNodeDir, step } from 'cli';
import self from '../package.json';

async function init() {
  await step('Detecting package.json', () => {
    if (!isNodeDir()) throw new Error('package.json not found');
  });

  await step('Installing dependencies', async () => {
    await install(self.name, '@prisma/client');
    await installDev('prisma');
  });

  await step('Initializing Prisma', async () => {
    await run('npx prisma init');
  });
}

init();
