import React, { useEffect, useId } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Menu, MenuTrigger, MenuContent } from '../Menu';
import { GlobeIcon } from './icons';
import LanguageOptions from './LanguageOptions';
import messages from '../Header.messages';

/**
 * Globe button and language list, shown on wide screens (the burger menu covers
 * narrow ones). `Menu` handles open/close behaviour and a11y wiring.
 */
const LanguageMenu = () => {
  const intl = useIntl();

  // The language list is unmounted until the menu opens, so this face would
  // otherwise start downloading on the first click.
  useEffect(() => {
    document.fonts?.load('500 1em "Noto Serif Tibetan"', 'བོད་ཡིག');
  }, []);
  const triggerId = useId();
  const label = intl.formatMessage(messages['header.label.language.menu']);
  return /*#__PURE__*/React.createElement(Menu, {
    className: "nav-locale-wrap",
    transitionClassName: "nav-menu-anim",
    transitionTimeout: 160
  }, /*#__PURE__*/React.createElement(MenuTrigger, {
    tag: "button",
    type: "button",
    id: triggerId,
    className: "nav-locale",
    "aria-label": label,
    title: label
  }, /*#__PURE__*/React.createElement(GlobeIcon, null)), /*#__PURE__*/React.createElement(MenuContent, {
    className: "nav-menu nav-menu-lang",
    role: "menu",
    "aria-labelledby": triggerId
  }, /*#__PURE__*/React.createElement(LanguageOptions, null)));
};
export default LanguageMenu;
//# sourceMappingURL=LanguageMenu.js.map