import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route path='/home' component={Main} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = null

const mapDispatch = null

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {

}
