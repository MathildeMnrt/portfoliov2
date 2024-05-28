/* 'use client'

import Link from "next/link";

export default function LanguageSwitcher() {
  return (
    <div className="text-gray-800 rounded-md bg-white flex w-fit p-2">
      <Link href="/en" locale="en">
        <h2>Anglais</h2>
      </Link>
      <Link href="/fr" locale="fr">
        <h2>Français</h2>
      </Link>
      <select>
        <option value='en'>
          <Link href="/en" locale="en">
            <h2>Anglais</h2>
          </Link>
        </option>


        <option value='fr'>
          <Link href="/fr" locale="fr">
            <h2>Français</h2>
          </Link>
        </option>
      </select>
    </div>
  );
} */
'use client'
import { useRouter } from 'next/navigation';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const asPath = router.asPath;
  const pathname = usePathname();

  // const [pathname, searchParams] = asPath.split('?');

  const currentLanguage = pathname.split('/')[1];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const changeLanguage = (locale) => {
    // Extract the current language from the pathname
    const currentLanguage = pathname.split('/')[1];

    // Replace the current language with the selected locale
    const newPath = pathname.replace(`/${currentLanguage}`, `/${locale}`);

    // Construct the new URL with the updated path and query parameters
    const newUrl = `${newPath}`;

    // Push the new URL to navigate to the updated language version
    router.push(newUrl);
  };

  if (!isMounted) return null;

  return (
    <div className='flex items-center'>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 rounded-l ${currentLanguage === 'en' ? 'bg-primary-400 text-white' : 'bg-gray-200 text-gray-600'
          }`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-4 py-2 rounded-r ${currentLanguage === 'fr' ? 'bg-primary-400 text-white' : 'bg-gray-200 text-gray-600'
          }`}
      >
        Français
      </button>
    </div>
  );
};

export default LanguageSwitcher;