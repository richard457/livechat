import React, { Requireable } from 'react';
import * as ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import reactToWebComponent from 'react-to-webcomponent';
import { isChecklistItemType } from './types/checklistItem';
import LiveChat from './components/livechat/LiveChat';

class WebComponentWrapper extends React.Component<{ items: string }, {}> {
  static propTypes: {
    items: Requireable<string>;
  };

  render() {
    let items;
    try {
      items = this.props.items ? JSON.parse(this.props.items) : undefined;
      if (!Array.isArray(items)) {
        items = undefined;
      } else if (items.length === 0) {
        items = undefined;
      } else if (items?.some(item => !isChecklistItemType(item))) {
        items = undefined;
      }
    } catch {
      items = undefined
    }

    return <LiveChat items={items} />;
  }
}

WebComponentWrapper.propTypes = {
  items: PropTypes.string,
}

const wcChecklist = reactToWebComponent(WebComponentWrapper, React, ReactDOM, { dashStyleAttributes: true });
const wcChecklistShadow = reactToWebComponent(WebComponentWrapper, React, ReactDOM, { dashStyleAttributes: true, shadow: true });

customElements.define("flipper-livechat", wcChecklist);
customElements.define("flipper-livechat-shadow", wcChecklistShadow);

// How to use:
// <script defer="defer" src="https://rjspencer.github.io/flipper-livechat/static/js/main.js"></script> 
// <flipper-livechat items='[{"label":"First Thing","isChecked":false}]' />
