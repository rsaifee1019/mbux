import React from 'react';
import { useSearchParams } from 'next/navigation';

function SearchParamsWrapper({ children }) {
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject');

  return (
    <>
      {React.Children.map(children, child => {
        return React.cloneElement(child, { subject });
      })}
    </>
  );
}

export default SearchParamsWrapper;
