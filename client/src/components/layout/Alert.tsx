import React from 'react';

import { useTypedSelector } from '../../reducers';
import { AlertState } from '../../reducers/alert/alert.interface';

function Alert() {
  const alerts: AlertState[] = useTypedSelector((state) => state.alert);

  if (!alerts.length) {
    return null;
  }

  return <>
    {alerts.map((alert: any) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ))}
  </>
}

export default Alert;