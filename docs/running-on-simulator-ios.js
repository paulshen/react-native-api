/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
## Starting the simulator

Once you have your React Native project initialized, you can run \`react-native run-ios\` inside the newly created project directory. If everything is set up correctly, you should see your new app running in the iOS Simulator shortly.

## Specifying a device

You can specify the device the simulator should run with the \`--simulator\` flag, followed by the device name as a string. The default is \`"iPhone 6"\`. If you wish to run your app on an iPhone 4s, just run \`react-native run-ios --simulator="iPhone 4s"\`.

The device names correspond to the list of devices available in Xcode. You can check your available devices by running \`xcrun simctl list devices\` from the console.
`;
var Post = React.createClass({
  statics: { content: content },
  render: function() {
    return (
      <Layout metadata={{"id":"running-on-simulator-ios","title":"Running On Simulator","layout":"docs","category":"Guides (iOS)","permalink":"docs/running-on-simulator-ios.html","next":"communication-ios","previous":"linking-libraries-ios","filename":"RunningOnSimulatorIOS.md"}}>
        {content}
      </Layout>
    );
  }
});
module.exports = Post;