import React from 'react';
import { HeaderWrapper } from './Header.styled';
export default function Header() {


  // Note: the reason why the link enclosing the img logo is a direct <a> and not a <Link> is because we want clicking the logo to refresh the app completely (i.e. load new cocktails, and (I think?) clear state) - i.e. as if the user clicks the refresh button in the browser.  Therefore <a> will do this instead of just changing the url with <Link>

  return (
    <HeaderWrapper>
      <h1> EZ Cocktails</h1>
    </HeaderWrapper>
  );
}
