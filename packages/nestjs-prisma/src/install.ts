#!/usr/bin/env node

import { install, installDev, run, isNodeDir, step } from 'cli';

async function init() {
  await step('Detecting package.json', () => {
    if (!isNodeDir()) throw new Error('package.json not found');
  });

  await step('Installing dependencies', async () => {
    await installDev('prisma');
    await install('@prisma/client');
  });

  await step('Initializing Prisma', async () => {
    await run('npx prisma init');
  });
}

init();
