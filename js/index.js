// 函数区域区域-----------------------------------------------------

//加载卡片函数
//获取卡片列表数据，接受加载分类的参数来加载对应的card
function loadCard(typeId) {
  
  //获取卡片列表节点
  //通过appendChild()向里面添加站点
  alert(`成功调用loadCard函数 ${typeId}`)
  const cardlist = document.getElementById('cardList');
  cardlist.innerHTML = ''

  //创建站点卡片
  //遍历所有siteInfoList的元素
  //通过innerHTML创建卡片并给cardList使用appendChild(站点卡片)添加进去
  siteInfoList.forEach(
    siteInfo => {
      if (typeId == siteInfo.typeId) {
        //在card中创建div标签并设置class为card
        alert("进入判断")

        const card = document.createElement('div')
        card.className = 'card'

        card.innerHTML = `
              <!-- 卡片信息层 -->
              <div class="card-block">
                <div class="card-block-favicon">
                  <img id="favicon" src="./img/logo-icon.png" alt="favicon">
                </div>
                <div class="card-block-title">
                  <h3>${siteInfo.name}</h3>
                  <p>${siteInfo.description}</p>
                </div>
              </div>
              <!-- 卡片信息层结束 -->

              <!-- 卡片按钮层 -->
              <div class="card-hover">
                <a href="${siteInfo.url}" class="card-a-goto" target="_blank">前往</a>
                <a class="card-a-setting" target="_blank">设置</a>
              </div>
              <!-- 卡片按钮层结束 -->
      `
        cardlist.appendChild(card)
      }
    }
  )
}


//加载分类函数
//加载typeInfoList的数据，通过调用loadCard()并传递typeId来加载对应card
function loadType() {
  //获取卡片类区域
  const typeList = document.getElementById('webCards')
  typeList.innerHTML = ''

  typeInfoList.forEach(
    typeInfo => {
      const section = document.createElement('section')

      section.innerHTML = `
          <!-- 分类图标与标题 -->
          <div class="card-title">
            <span class="iconfont">&#xe634;</span>
            <h2>${typeInfo.name}</h2>
          </div>
          <!-- 分类图标与标题结束 -->

          <!-- 卡片列表 -->
          <div class="card-list" id="cardList">

          </div>
          <!-- 卡片列表结束 -->
          `
      typeList.appendChild(section)
      loadCard(typeInfo.typeId)
    }
  )
}


//时间刷新函数
//获取事件，输入标签，直接插入时间
function updateTime(ElementId) {
  let getTimeElement = document.getElementById(ElementId)
  let now = new Date()
  let hours = String(now.getHours()).padStart(2, "0")
  let minutes = String(now.getMinutes()).padStart(2, "0")
  let miao = String(now.getSeconds()).padStart(2, "0")
  let time = `${hours}:${minutes}:${miao}`
  // console.log(time)
  getTimeElement.innerText = time
}

//关闭设置框函数
//直接调用，通过修改display隐藏设置框
function closeModule() {
  document.getElementById('settingsModal').style.display = 'none';
}


// 数据区域-----------------------------------------------------

// 分类列表
let typeInfoList = [
  {
    name: '个人主页',
    typeId: 1,
    iconId: 1
  },
  {
    name: '前端网页',
    typeId: 2,
    iconId: 2
  }
]

// 网站列表
let siteInfoList = [
  {
    cardId: 1,
    typeId: 1,
    name: 'B站',
    url: 'https://bilibili.com',
    description: '这是一个示例网站描述',
    iconUrl: null
  },
  {
    cardId: 2,
    typeId: 1,
    name: '示例网站2',
    url: 'https://example2.com',
    description: '这是一个示例网站描述',
    iconUrl: null
  },
  {
    cardId: 3,
    typeId: 1,
    name: '示例网站3',
    url: 'https://example2.com',
    description: '这是一个示例网站描述',
    iconUrl: null
  },
  {
    cardId: 4,
    typeId: 1,
    name: '示例网站4',
    url: 'https://example2.com',
    description: '这是一个示例网站描述',
    iconUrl: null
  },
  {
    cardId: 5,
    typeId: 1,
    name: '示例网站5',
    url: 'https://example2.com',
    description: '这是一个示例网站描述',
    iconUrl: null
  }
]

// 执行区域-----------------------------------------------------

updateTime("header-time")
setInterval(() => { updateTime("header-time") }, 1000);
loadType()