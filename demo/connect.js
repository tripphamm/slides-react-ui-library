/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */

/*
 * Demonstrate how react-redux works by implementing connect
 */
import React from 'react';

export function connect(mapStateToProps, mapDispatchToProps) {
  return (ReactComponent) => {
    return class ConnectedComponent extends React.Component {
      componentDidMount() {
        // the <Provider/> component accepts the store and makes it available
        // via React Context. We can get the store from React's context here as
        // long as this is a decendant of <Provider />
        const store = React.Context.getStore();

        store.subscribe(() => {
          const stateSnapshot = store.getState();

          const reduxStateProps = mapStateToProps(stateSnapshot);
          const actionDispatcherProps = mapDispatchToProps(store.dispatch);

          this.setState({
            propsToInject: {
              ...reduxStateProps,
              ...actionDispatcherProps,
            },
          });
        });
      }

      render() {
        return (
          <ReactComponent
            {...this.props} // the props directly placed on the component by its parent
            {...this.state.propsToInject} // the props that we're injecting
          />
        );
      }
    };
  };
}
