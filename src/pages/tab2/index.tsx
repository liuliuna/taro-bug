import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { switchTab,navigateTo,getCurrentPages } from '@tarojs/taro'

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
        <Text>tab页2</Text>
        <View className='rout-click' onClick={()=>{navigateTo({url:'testPage/test1/index'})}}>点我跳转test1</View>
      </View>
    )
  }
}
