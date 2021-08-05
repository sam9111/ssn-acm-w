import React from 'react';
import Layout from '../components/Layout';
import NotFoundPage from './404';

export function wrapPages({ element }) {
  return <Layout>{element}</Layout>;
}

export default NotFoundPage;
