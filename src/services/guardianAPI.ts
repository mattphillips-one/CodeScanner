/*
  Problems:
  - Needs more sophisticated filtering on article search
*/

// Needs EXPO_PUBLIC_GUARDIAN_KEY set in .env file

import Guardian from 'guardian-js';

const apiKey = `${process.env.EXPO_PUBLIC_GUARDIAN_KEY}`;

const guardian = new Guardian(apiKey, false);

export const searchContent = async (search: string) => {
  try {
    const resp = await guardian.content.search(search);
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  }
};