import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { switchTab,navigateTo } from '@tarojs/taro'
import './index.less'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {

    return (
      <View className='index'>
        <Text>我是非tab页</Text>
        <View className='rout-click' onClick={()=>{switchTab({url:'pages/tab1/index'})}}>回到tab页</View>
      </View>
    )
  }
}
