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
        <View className='rout-click' onClick={()=>{navigateTo({url:'testPage/test2/index'})}}>跳转test2,由tab回退到此页面跳转会白屏</View>
      </View>
    )
  }
}
