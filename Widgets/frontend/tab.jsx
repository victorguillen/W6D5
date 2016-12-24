import React from 'react';
import ReactDOM from 'react-dom';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.tabs = this.props.tabs;
  }

  updateIndex(index) {
    this.setState({ index });
    // console.log(this.state.index);
  }


  render() {
    const titles = this.tabs.map( (tab, idx) => (
        <li key={tab["title"] + 'idx'} className="tab">
          <h1 onClick={this.updateIndex.bind(this, idx)}>{tab["title"]}</h1>

        </li>
      )
    );

    const content = <article>{this.tabs[this.state.index].content}</article>;

    return (
      <div className="tabs">
        <ul className="tab-titles">
          {
            titles
          }
        </ul>
        <section className="content-box">
          <ul className="content">
            {
              content
            }
          </ul>
        </section>
      </div>
    );
  }
}

export default Tab;
