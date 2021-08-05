import React from 'react';
import Layout from '../components/Layout';

export function wrapPages({ element }) {
  return <Layout>{element}</Layout>;
}
