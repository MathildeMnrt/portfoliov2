
'use client'

import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

export default function Home() {
 const { t } = useTranslation('common');
  //const { t, lang } = useTranslation('common')

  return (
    <div>
      <Head>
        <title>{t('metaTitle')}</title>
      </Head>
      <main>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
      </main>
    </div>
  );
}