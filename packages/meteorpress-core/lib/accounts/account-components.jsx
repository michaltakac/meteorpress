IncludeTemplate = React.createClass({
  componentDidMount() {
    var componentRoot, options, parentNode, ref;
    componentRoot = React.findDOMNode(this);
    parentNode = componentRoot.parentNode;
    parentNode.removeChild(componentRoot);
    options = (ref = this.props.options) != null ? ref : {};
    return this.blazeElement = Blaze.renderWithData(this.props.template, options, parentNode);
  },
  render(template) {
    <div />
  }
});

UserAccountsFormComponent_signIn = React.createClass({
  render() {
    options = {state : 'signIn'}
    return (
      <div>
        <IncludeTemplate template={Template.atForm} options={options} />
      </div>
    );
  }
});

UserAccountsFormComponent_signUp = React.createClass({
  render() {
    options = {state : 'signUp'}
    return (
      <div>
        <IncludeTemplate template={Template.atForm} options={options} />
      </div>
    );
  }
});

UserAccountsFormComponent_forgotPwd = React.createClass({
  render() {
    options = {state : 'forgotPwd'}
    return (
      <div>
        <IncludeTemplate template={Template.atForm} options={options} />
      </div>
    )
  }
});
