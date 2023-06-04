import './controlBar.scss';

import { IconSquareRoundedArrowRight } from '@tabler/icons-react';

function ControlBar() {
  return (
    <div className='control-bar'>
      <div className="controls">
        <div className="controls-header">
          <h2 className='controls-header-title'>Global News Settings</h2>
          <button className="btn btn-icon btn-close">
            <IconSquareRoundedArrowRight size={28} />
          </button>
        </div>

        <div className="controls-body">
          {/* control the global news category */}
          <div className="form-control">
            <fieldset>
              <legend>News categorys</legend>
              <ul className='controls-list'>
                <li className="controls-list-item active" value="business">Business</li>
                <li className="controls-list-item" value="entertainment">Entertainment</li>
                <li className="controls-list-item" value="general">General</li>
                <li className="controls-list-item" value="health">Health</li>
                <li className="controls-list-item" value="science">Science</li>
                <li className="controls-list-item" value="sports">Sports</li>
                <li className="controls-list-item" value="technology">Technology</li>
              </ul>
            </fieldset>
            <p className="help-block">Select The Global News Category</p>
          </div>
          
          {/* control The Global News location */}
          <div className="form-control">
            <fieldset>
              <legend>News Location</legend>
              <ul className='controls-list'>
                <li className='controls-list-item active' value="US">United States</li>
                <li className='controls-list-item' value="UK">United Kingdom</li>
                <li className='controls-list-item' value="CA">Canada</li>
                <li className='controls-list-item' value="AU">Australia</li>
                <li className='controls-list-item' value="DE">Germany</li>
                <li className='controls-list-item' value="FR">France</li>
                <li className='controls-list-item' value="IT">Italy</li>
                <li className='controls-list-item' value="ES">Spain</li>
                <li className='controls-list-item' value="NL">Netherlands</li>
                <li className='controls-list-item' value="BE">Belgium</li>
                <li className='controls-list-item' value="CH">Switzerland</li>
                <li className='controls-list-item' value="SE">Sweden</li>
                <li className='controls-list-item' value="NO">Norway</li>
                <li className='controls-list-item' value="DK">Denmark</li>
                <li className='controls-list-item' value="IE">Ireland</li>
                <li className='controls-list-item' value="IN">India</li>
                <li className='controls-list-item' value="CN">China</li>
                <li className='controls-list-item' value="JP">Japan</li>
                <li className='controls-list-item' value="KR">South Korea</li>
                <li className='controls-list-item' value="BR">Brazil</li>
              </ul>
            </fieldset>
            <p className="help-block">Select The Global News Location</p>
          </div>

          {/* control The Global News language */}
          <div className="form-control">
            <fieldset>
              <legend>News language</legend>
              <ul className='controls-list'>
                <li className="controls-list-item active" value="en">English</li>
                <li className="controls-list-item" value="es">Spanish</li>
                <li className="controls-list-item" value="fr">French</li>
                <li className="controls-list-item" value="de">German</li>
                <li className="controls-list-item" value="it">Italian</li>
                <li className="controls-list-item" value="nl">Dutch</li>
                <li className="controls-list-item" value="pt">Portuguese</li>
                <li className="controls-list-item" value="ru">Russian</li>
                <li className="controls-list-item" value="ja">Japanese</li>
                <li className="controls-list-item" value="ko">Korean</li>
                <li className="controls-list-item" value="zh">Chinese</li>
                <li className="controls-list-item" value="ar">Arabic</li>
                <li className="controls-list-item" value="hi">Hindi</li>
                <li className="controls-list-item" value="sv">Swedish</li>
                <li className="controls-list-item" value="no">Norwegian</li>
                <li className="controls-list-item" value="fi">Finnish</li>
                <li className="controls-list-item" value="da">Danish</li>
                <li className="controls-list-item" value="pl">Polish</li>
                <li className="controls-list-item" value="cs">Czech</li>
                <li className="controls-list-item" value="tr">Turkish</li>
              </ul>
            </fieldset>
            <p className="help-block">Select The Global News Language</p>
          </div>
        </div>


        <div className="controls-footer">
          <button className='btn btn-primary'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default ControlBar