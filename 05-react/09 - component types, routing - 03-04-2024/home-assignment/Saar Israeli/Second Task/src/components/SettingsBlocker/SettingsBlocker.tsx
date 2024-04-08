import style from './SettingsBlocker.module.scss';

interface SettingsBlockerProps {
    blocker :any,
}

function SettingsBlocker({blocker,}: SettingsBlockerProps) {


  return (
    <div className={style.settingsBlockedMessage}>
      <p>Leaving would result in data loss</p>
      <button onClick={() => blocker.proceed()}>I understand</button>
      <button onClick={() => blocker.reset()}>No</button>
    </div>
  );
}

export default SettingsBlocker;
