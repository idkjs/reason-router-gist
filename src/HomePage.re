let component = ReasonReact.statelessComponent("Home");

let make = (_children) => {
  ...component,
  render: _self => <div> (ReasonReact.string("Home Page! ")) </div>,
};