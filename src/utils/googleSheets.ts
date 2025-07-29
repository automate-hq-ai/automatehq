import { FormData } from '../types';

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzboL_9aMzlo9U3oMYP6rpXd2B-p5HD0NKHHvzD8lQYrbGmluVm1ELB1sEgP8ZhYr2-EQ/exec';

export const submitToGoogleSheets = async (formData: FormData): Promise<boolean> => {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors', // Important for CORS handling
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    return true; // With no-cors, we can't actually check response.ok
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
};



