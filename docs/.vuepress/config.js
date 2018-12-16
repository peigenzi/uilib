module.exports = {
    title: 'ui',
    description: 'ui',
  
    themeConfig: {
      nav: [{
          text: '首页',
          link: '/'
        },
        {
          text: '关于',
          link: '/'
        }
        // {
        //   text: 'Languages',
        //   items: [{
        //       text: 'Chinese',
        //       link: '/language/chinese'
        //     },
        //     {
        //       text: 'Japanese',
        //       link: '/language/japanese'
        //     }
        //   ]
        // }
      ],
  
      sidebar: [
        {
          title: '指南',
          collapsable: false,
          children: [
            '/doc/css规范.md',
            '/doc/栅格布局.md',
            '/doc/常见布局.md',
            '/doc/表格.md',
            '/doc/表单.md', 
            '/doc/工具类.md',
            '/doc/动画.md'
          ]
        },
      ]
    }
  }