export default defineAppConfig({
  pages: [
    'pages/tab1/index',
    'pages/tab2/index',
    'testPage/test1/index',
    'testPage/test2/index',
  ],

  tabBar: {
    color: '#333',
    selectedColor: '#FF1A34',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/tab1/index',
        iconPath: './assets/tab-bar/home.png',
        selectedIconPath: './assets/tab-bar/home-active.png',
        text: '第一个'
      },
      {
        pagePath: 'pages/tab2/index',
        iconPath: './assets/tab-bar/cate.png',
        selectedIconPath: './assets/tab-bar/cate-active.png',
        text: '第二个'
      },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
