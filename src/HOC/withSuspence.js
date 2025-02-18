import React from 'react'
import Preloader from '../users/preloader'
export const withSuspense = (Component) => {
  return (props) => {
    return (
      <React.Suspense fallback={<Preloader />}>
        <Component {...props} />
      </React.Suspense>
    )
  }
}
