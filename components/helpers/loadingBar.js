import React from 'react'
import Loading from 'react-loading-bar';


export default class LoadingBar extends React.Component{
    constructor(props)
    {
        super(props);

    }

  render()
  {
      let loading = this.props.isLoading
      return  <Loading show={ loading } showSpinner={false} color="green" />
  }
}
