const React = require("react");
const ReactSlider = require("react-slider");
const Curves = require("./Curves.jsx");
const SelectiveColors = require("./SelectiveColors.jsx");
const HSL = require("./HSL.jsx");

class Controls extends React.Component {
  static propTypes = {
    frame: React.PropTypes.object,
    actions: React.PropTypes.object.isRequired,
    settings: React.PropTypes.object,
  };

  handleChange(key, value) {
    const actions = this.props.actions;

    if (value.length) {
      actions.onControlChange(key + "min", value[0] / 100);
      actions.onControlChange(key + "max", value[1] / 100);
    } else {
      actions.onControlChange(key, value / 100);
    }
  }

  render() {
    const { frame, actions, settings } = this.props;

    if (!frame) {
      return null;
    }

    var s = settings;
    var p = s.PROPS;
    return (
      <div id="controls" className="no-buffer">
        <div className="controls-section">
          <h1>general</h1>

          <div className="slider-layout">
            <p>brightness</p>
            <div className="slider-container centering-parent">
              <ReactSlider
                onChange={this.handleChange.bind(this, "brightness")}
                min={0}
                max={200}
                value={s.brightness * 100}
              />
            </div>
          </div>

          <div className="slider-layout">
            <p>contrast</p>
            <div className="slider-container centering-parent">
              <ReactSlider
                onChange={this.handleChange.bind(this, "contrast")}
                min={0}
                max={300}
                value={s.contrast * 100}
              />
            </div>
          </div>
        </div>

        <div className="controls-section">
          <h1>levels</h1>
          <h2>rgb</h2>
          <div className="slider-layout">
            <p>in</p>
            <div className="slider-container centering-parent">
              <ReactSlider
                onChange={this.handleChange.bind(this, "rgb_in_")}
                min={0}
                max={100}
                value={[s.rgb_in_min * 100, s.rgb_in_max * 100]}
              />
            </div>
          </div>
          <div className="slider-layout">
            <p>out</p>
            <div className="slider-container centering-parent">
              <ReactSlider
                onChange={this.handleChange.bind(this, "rgb_out_")}
                min={0}
                max={100}
                value={[s.rgb_out_min * 100, s.rgb_out_max * 100]}
              />
            </div>
          </div>
          <div className="slider-layout">
            <p>gamma</p>
            <div className="slider-container centering-parent">
              <ReactSlider
                onChange={this.handleChange.bind(this, "rgb_gamma")}
                min={0}
                max={1000}
                value={s.rgb_gamma * 100}
              />
            </div>
          </div>

          <h2>red</h2>
          <div className="slider-layout">
            <p>in</p>
            <div className="slider-container centering-parent">
              <ReactSlider
                className="slider red"
                onChange={this.handleChange.bind(this, "r_in_")}
                min={0}
                max={100}
                value={[s.r_in_min * 100, s.r_in_max * 100]}
              />
            </div>
          </div>
          <div className="slider-layout">
            <p>out</p>
            <div className="slider-container centering-parent">
              <ReactSlider
                className="slider red"
                onChange={this.handleChange.bind(this, "r_out_")}
                min={0}
                max={100}
                value={[s.r_out_min * 100, s.r_out_max * 100]}
              />
            </div>
          </div>
          <div className="slider-layout">
            <p>gamma</p>
            <div className="slider-container centering-parent">
              <ReactSlider
                className="slider red"
                onChange={this.handleChange.bind(this, "r_gamma")}
                min={0}
                max={1000}
                value={s.r_gamma * 100}
              />
            </div>
          </div>

          <h2>green</h2>
          <div className="green slider-layout">
            <p>in</p>
            <div className="slider-container centering-parent">
              <ReactSlider
                className="slider green"
                onChange={this.handleChange.bind(this, "g_in_")}
                min={0}
                max={100}
                value={[s.g_in_min * 100, s.g_in_max * 100]}
              />
            </div>
          </div>
          <div className="green slider-layout">
            <p>out</p>
            <div className="slider-container centering-parent">
              <ReactSlider
                className="slider green"
                onChange={this.handleChange.bind(this, "g_out_")}
                min={0}
                max={100}
                value={[s.g_out_min * 100, s.g_out_max * 100]}
              />
            </div>
          </div>
          <div className="green slider-layout">
            <p>gamma</p>
            <div className="slider-container centering-parent">
              <ReactSlider
                className="slider green"
                onChange={this.handleChange.bind(this, "g_gamma")}
                min={0}
                max={1000}
                value={s.g_gamma * 100}
              />
            </div>
          </div>

          <h2>blue</h2>
          <div className="slider-layout">
            <p>in</p>
            <div className="slider-container centering-parent">
              <ReactSlider
                className="slider blue"
                onChange={this.handleChange.bind(this, "b_in_")}
                min={0}
                max={100}
                value={[s.b_in_min * 100, s.b_in_max * 100]}
              />
            </div>
          </div>
          <div className="slider-layout">
            <p>out</p>
            <div className="slider-container centering-parent">
              <ReactSlider
                className="slider blue"
                onChange={this.handleChange.bind(this, "b_out_")}
                min={0}
                max={100}
                value={[s.b_out_min * 100, s.b_out_max * 100]}
              />
            </div>
          </div>
          <div className="slider-layout">
            <p>gamma</p>
            <div className="slider-container centering-parent">
              <ReactSlider
                className="slider blue"
                onChange={this.handleChange.bind(this, "b_gamma")}
                min={0}
                max={1000}
                value={s.b_gamma * 100}
              />
            </div>
          </div>
        </div>

        <div className="controls-section">
          <h1>curves</h1>
          <h2>rgb</h2>
          <Curves actions={actions} settings={settings} color="rgb" />

          <h2>red</h2>
          <Curves actions={actions} settings={settings} color="r" />

          <h2>green</h2>
          <Curves actions={actions} settings={settings} color="g" />

          <h2>blue</h2>
          <Curves actions={actions} settings={settings} color="b" />
        </div>

        <HSL frame={frame} actions={actions} settings={settings} />

        <SelectiveColors frame={frame} actions={actions} settings={settings} />
      </div>
    );
  }
}

module.exports = Controls;
