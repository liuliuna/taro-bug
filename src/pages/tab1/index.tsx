import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { getCurrentPages } from '@tarojs/taro'

import './index.less'

export default class Index extends Component<PropsWithChildren,any> {
  constructor(props) {
    super(props)
    this.state = {
      route:[]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { 
    let route = getCurrentPages().map((val,i)=>(val.route))
    this.setState({
      route
    })
   }

  componentDidHide () { }

  render () {
    let {route} = this.state
    
    return (
      <View className='index'>
        <Text>tab页1</Text>
        {route.length==1&&<View className='tip'>点第二个tab页</View>}
        {route.length>2&&<View className='tip'>去点浏览器回退按钮</View>}
        
        <View>route
          <br />
          {route.map((val,i)=>(val+'\n'))}
        </View>
        <br />
        <br />

        <View >猜测: TAB页面在回退的时候不该被删除的,或者在使用switTab进行跳转时非tab应该卸载而不是隐藏</View>
      </View>
    )
  }
}
