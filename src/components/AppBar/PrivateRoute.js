import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../../redux/auth";

export default function PrivateRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

//  render={(props) =>
//         isLoggedIn ? <Component {...props} /> : <Redirect to={redirectTo} />
//       }

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);
