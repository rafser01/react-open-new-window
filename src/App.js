import React, { Component } from 'react';
import NewWindow from 'react-new-window';

class Demo extends Component {
  state = { showPopout: false };
  closePopout = () => this.setState({ showPopout: false });
  renderChat = () => {
    return (
      <div>
        <h2>Header........</h2>
        <h3>conversion........</h3>
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.state.showPopout && (
          <NewWindow
            name={'testName'}
            title={'testTitle'}
            onUnload={() => this.closePopout()}
            features={{ height: window.innerHeight, width: 400 }}
          >
            {this.renderChat()}
          </NewWindow>
        )}
        <button onClick={() => this.setState({ showPopout: true })}>
          Open popup
        </button>
      </div>
    );
  }
}

export default Demo;
