import React from "react"

class IconPhotography extends React.Component {
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
      '"><title>camera_category_icon</title><g id="Camera"><path d="M503.83,671.14H727c18.53,0,33-12.1,33-30.45V376.83c0-18.36-14.44-30.46-33-30.46H621c0-58.75-13.15-79.51-52-79.51H433.55c-38.88,0-52,20.76-52,79.51h-106c-18.54,0-33,12.1-33,30.46V505.29h0v135.4c0,18.35,14.44,30.45,33,30.45H515.35" transform="translate(-61.89 -61.89)" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:24px"/><circle cx="437.12" cy="425.39" r="140.72" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><path d="M411.66,441.56a112.17,112.17,0,0,1,50.43-46.62" transform="translate(-61.89 -61.89)" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:12px"/><path d="M400.7,469.05c.76-3,1.65-6,2.65-9" transform="translate(-61.89 -61.89)" style="fill:none;stroke:',
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

export default IconPhotography
