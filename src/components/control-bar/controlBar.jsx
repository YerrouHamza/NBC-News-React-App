import { useContext, useState } from 'react';

import './controlBar.scss';
import { IconSquareRoundedArrowRight } from '@tabler/icons-react';

import { NewsContext } from '../../NewsContext'; // import the data from the context state


function ControlBar() {

  const {setCountry, globalSettings, setNewsDate, setGlobalSettings} = useContext(NewsContext);
  const [globalLocaction, setGlobalLocaction] = useState('US');
  const [globalNewsDate, setGlobalNewsDate] = useState(0);

  const handelCloseGlobalSettings = () => {
    setGlobalSettings(false)
  }

  // handel the news location select
  const handelNewsLocationSelect = (e) => {
    const locationShortValue = e.target.getAttribute("value");
    setGlobalLocaction(locationShortValue)
  }

  // handel the news location select
  const handelNewsDateSelect = (e) => {
    const newsDateValue = e.target.getAttribute("value");
    setGlobalNewsDate(newsDateValue);
  }

  // handel the save to set the new global settings
  const handelSetNewGlobalSettings = () => {
    setCountry(globalLocaction);
    setNewsDate(globalNewsDate);
  }



  return (
    <div className={globalSettings ? 'control-bar open' : 'control-bar'}>
      <div className="controls">
        <div className="controls-content">
          <div className="controls-header">
            <h2 className='controls-title'>Global Settings</h2>
            <button className="btn btn-icon btn-close" onClick={handelCloseGlobalSettings}>
              <IconSquareRoundedArrowRight size={28} />
            </button>
          </div>
          
          <h4 className='controls-subtitle'>News Settings</h4>
          {/* control the global news category */}
          {/* <div className="form-control">
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
          </div> */}
          
          {/* control The Global News location */}
          <div className="form-control">
            <fieldset>
              <legend>News Location</legend>
              <ul className='controls-list'>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'US' ? 'controls-list-item active' : 'controls-list-item' } value="US">United States</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'UK' ? 'controls-list-item active' : 'controls-list-item' } value="UK">United Kingdom</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'CA' ? 'controls-list-item active' : 'controls-list-item' } value="CA">Canada</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'AU' ? 'controls-list-item active' : 'controls-list-item' } value="AU">Australia</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'DE' ? 'controls-list-item active' : 'controls-list-item' } value="DE">Germany</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'FR' ? 'controls-list-item active' : 'controls-list-item' } value="FR">France</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'IT' ? 'controls-list-item active' : 'controls-list-item' } value="IT">Italy</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'ES' ? 'controls-list-item active' : 'controls-list-item' } value="ES">Spain</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'NL' ? 'controls-list-item active' : 'controls-list-item' } value="NL">Netherlands</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'BE' ? 'controls-list-item active' : 'controls-list-item' } value="BE">Belgium</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'CH' ? 'controls-list-item active' : 'controls-list-item' } value="CH">Switzerland</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'SE' ? 'controls-list-item active' : 'controls-list-item' } value="SE">Sweden</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'NO' ? 'controls-list-item active' : 'controls-list-item' } value="NO">Norway</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'DK' ? 'controls-list-item active' : 'controls-list-item' } value="DK">Denmark</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'IE' ? 'controls-list-item active' : 'controls-list-item' } value="IE">Ireland</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'IN' ? 'controls-list-item active' : 'controls-list-item' } value="IN">India</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'CN' ? 'controls-list-item active' : 'controls-list-item' } value="CN">China</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'JP' ? 'controls-list-item active' : 'controls-list-item' } value="JP">Japan</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'KR' ? 'controls-list-item active' : 'controls-list-item' } value="KR">South Korea</li>
                <li onClick={handelNewsLocationSelect} className={globalLocaction == 'BR' ? 'controls-list-item active' : 'controls-list-item' } value="BR">Brazil</li>
              </ul>
            </fieldset>
            <p className="help-block">Select The Global News Location</p>
          </div>

          {/* control The Global News language */}
          <div className="form-control">
            <fieldset>
              <legend>News Date</legend>
              <ul className='controls-list'>
                <li onClick={handelNewsDateSelect} className={globalNewsDate == '0' ? 'controls-list-item active' : 'controls-list-item' } value="0">Today</li>
                <li onClick={handelNewsDateSelect} className={globalNewsDate == '1' ? 'controls-list-item active' : 'controls-list-item' } value="1">Yesterday</li>
                <li onClick={handelNewsDateSelect} className={globalNewsDate == '3' ? 'controls-list-item active' : 'controls-list-item' } value="3">3 Days Ago</li>
                <li onClick={handelNewsDateSelect} className={globalNewsDate == '7' ? 'controls-list-item active' : 'controls-list-item' } value="7">This Week</li>
                <li onClick={handelNewsDateSelect} className={globalNewsDate == '14' ? 'controls-list-item active' : 'controls-list-item' } value="14">Last Week</li>
              </ul>
            </fieldset>
            <p className="help-block">Select The Global News Date</p>
          </div>
        </div>

        <div className="controls-footer">
          <button onClick={handelSetNewGlobalSettings} className='btn btn-primary'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default ControlBar