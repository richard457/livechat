import React, { Requireable } from 'react';
import * as ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import reactToWebComponent from 'react-to-webcomponent';
import { isChecklistItemType } from './types/Config';
import LiveChat from './components/livechat/LiveChat';

class WebComponentWrapper extends React.Component<{ configs: string }, {}> {
  static propTypes: {
    configs: Requireable<string>;
  };

  render() {
    let configs;
    try {
      configs = this.props.configs ? JSON.parse(this.props.configs) : undefined;
      if (!Array.isArray(configs)) {
        configs = undefined;
      } else if (configs.length === 0) {
        configs = undefined;
      } else if (configs?.some(item => !isChecklistItemType(item))) {
        configs = undefined;
      }
    } catch {
      configs = undefined
    }

    return <LiveChat configs={configs} />;
  }
}

WebComponentWrapper.propTypes = {
  configs: PropTypes.string,
}

const flipperLiveChat = reactToWebComponent(WebComponentWrapper, React, ReactDOM, { dashStyleAttributes: true });
const wcChecklistShadow = reactToWebComponent(WebComponentWrapper, React, ReactDOM, { dashStyleAttributes: true, shadow: true });

customElements.define("flipper-livechat", flipperLiveChat);
customElements.define("flipper-livechat-shadow", wcChecklistShadow);

// How to use:
// <script defer="defer" src="https://rjspencer.github.io/flipper-livechat/static/js/main.js"></script> 
// <flipper-livechat configs='[{"label":"First Thing","isChecked":false}]' />
