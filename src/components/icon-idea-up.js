import React from "react"

class IconIdeaUp extends React.Component {
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
      '"><title>idea_up_icon</title><g id="Idea_Up" data-name="Idea Up"><path d="M500.27,283c11.44,0,19.5,7,26.81,15.56S707.37,499.16,713.59,505.8c21.21,22.59,2.18,43-10.26,43H628.2c-11.72,0-19.36,3.13-19.36,20.61s-.12,29.69-.12,46.83-13.9,22.81-21.42,22.81H412.75c-7.52,0-21.41-5.67-21.41-22.81s.13-29.34.13-46.83-7.64-20.61-19.36-20.61H297c-12.44,0-31.47-20.43-10.26-43,6.22-6.64,179.19-198.69,186.51-207.26S488.6,283,500,283" transform="translate(-61.89 -61.89)" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:24px"/><path d="M593.37,760.45c0,17.14-12,22.81-18.42,22.81H424.76c-6.47,0-18.42-5.67-18.42-22.81" transform="translate(-61.89 -61.89)" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:24px"/><path d="M593.43,689.72c0,17.14-12,22.81-18.43,22.81H424.82c-6.47,0-18.43-5.67-18.43-22.81" transform="translate(-61.89 -61.89)" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:24px"/><line x1="418.87" y1="290.32" x2="339.37" y2="378.33" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:12px"/><line x1="327.2" y1="390.97" x2="323.37" y2="395.32" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:12px"/><line x1="438.27" y1="170.53" x2="438.27" y2="123" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><line x1="593.33" y1="239.27" x2="623.88" y2="202.87" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><line x1="685.6" y1="386.16" x2="732.41" y2="377.9" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><line x1="667.43" y1="554.15" x2="708.58" y2="577.91" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><line x1="283.34" y1="239.27" x2="252.79" y2="202.87" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><line x1="191.07" y1="386.16" x2="144.27" y2="377.9" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><line x1="209.25" y1="554.15" x2="168.09" y2="577.91" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/></g><g id="Border_Circle" data-name="Border Circle"><circle cx="438.11" cy="438.11" r="411.11" style="fill:none;stroke:',
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

export default IconIdeaUp
