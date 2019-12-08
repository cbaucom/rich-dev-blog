import React from "react"

class IconElectronics extends React.Component {
  static defaultProps = {
    width: "50",
    height: "50",
    borderColor: "#000000",
    labelColor: "#000000",
  }

  render() {
    let image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 876.22 876.22" width="'.concat(
      this.props.width,
      '" height="',
      this.props.height,
      '"><title>battery_category_icon</title><g id="Battery"><path d="M450.45,784.65H635.92c17.93,0,34.58-11.29,34.58-36V290.09c0-24.71-16.65-36-34.58-36H557.78c0-31.71-16.94-46.53-36.85-46.53H483.07c-19.9,0-36.85,14.82-36.85,46.53H368.08c-17.93,0-34.58,11.3-34.58,36V748.65c0,24.71,16.65,36,34.58,36H553.55" transform="translate(-61.89 -61.89)" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:24px"/><rect x="325.44" y="602.92" width="229.35" height="64.97" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><rect x="325.44" y="497.02" width="229.35" height="64.97" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><line x1="325.44" y1="254.53" x2="325.44" y2="353.54" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:12px"/><line x1="325.44" y1="372.29" x2="325.44" y2="379.17" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:12px"/></g><g id="Border_Circle" data-name="Border Circle"><circle cx="438.11" cy="438.11" r="411.11" style="fill:none;stroke:',
      this.props.borderColor,
      ';stroke-miterlimit:10;stroke-width:54px"/></g></svg>'
    )
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: image,
        }}
      />
    )
  }
}

export default IconElectronics
