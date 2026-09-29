import React, { useState } from 'react';

import PageHeading from '../components/PageHeading.jsx';

const defaultNotifications = [
  'Solo Leveling archive received a new update.',
  'A new gaming dossier was added to the live index.',
  'Upcoming release calendar has been synchronized.'
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(defaultNotifications);

  return (
    <>
      <PageHeading
        title="Notifications"
        description="Recent FanHub Plus alerts and updates."
      />

      <div className="panel">
        {notifications.length === 0 ? (
          <p>No unread notifications.</p>
        ) : (
          <>
            {notifications.map((item) => (
              <p key={item}>• {item}</p>
            ))}

            <button className="primary" onClick={() => setNotifications([])}>
              Mark all read
            </button>
          </>
        )}
      </div>
    </>
  );
}
