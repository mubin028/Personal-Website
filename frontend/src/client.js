import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "jdjkyip5",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skhjTjzV7F7qTuWVADEjMKcEq0ZOB0cw0dSKQjmbB9hFO4D0DFIu4cFHYdXhRfi7VgQwvtiHov5H3DetGrzcqo6mUxGgqH0aDxnCNNDEXJyPVPtqM1PHlFmZHr1a0uVKWItBnkYdal5zEMODgIRJnCwdPEmmAKxpDKU0hVpF4Y2B66dVDPQ6",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);