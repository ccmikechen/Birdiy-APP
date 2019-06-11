export default {
  general: {
    login: '登入',
    logout: '登出',
    more: '更多',
    confirm: '確定',
    ok: 'OK',
    cancel: '取消',
    save: '儲存',
    goBack: '返回',
    bracket: '（%{text}）',
    selectAll: '全選',
    clear: '清除',
    delete: '刪除',
  },
  post: {
    create: {
      title: '新增貼文',
    },
    edit: {
      title: '編輯貼文',
      message: {
        title: '訊息',
        placeholder: '輸入貼文訊息',
      },
      relatedProject: {
        title: '關聯專案',
        custom: {
          placeholder: '輸入自訂專案名稱',
        },
      },
      photos: {
        title: '照片',
      },
    },
    delete: {
      title: '刪除貼文',
    },
  },
  project: {
    create: {
      title: '新增專案',
      projectName: {
        title: '專案名稱',
        placeholder: '輸入你的專案名稱',
      },
      topic: {
        title: '主題',
        placeholder: '選擇你的專案主題',
      },
      submit: '儲存並繼續編輯',
    },
    edit: {
      title: '編輯專案',
      tabs: {
        intro: '簡介',
        image: '主圖',
        materials: '材料',
        files: '檔案資料',
        methods: '作法',
        tip: '小技巧',
      },
      projectName: {
        title: '專案名稱',
        placeholder: '輸入你的專案名稱',
      },
      topic: {
        title: '主題',
        placeholder: '選擇你的專案主題',
      },
      intro: {
        title: '介紹',
        placeholder: '介紹你的專案',
      },
      video: {
        title: '影片',
        placeholder: '（可選）Youtube / Vimeo 影片連結',
      },
      image: {
        title: '主圖',
      },
      materials: {
        title: '材料',
        name: '材料名稱',
        amountUnit: '數量',
        link: '（可選）商店或購買連結',
        add: '加材料',
      },
      files: {
        title: '檔案資料',
        name: '檔案名稱',
        url: '檔案下載連結',
        addLink: '加檔案連結',
        upload: '上傳檔案',
      },
      methods: {
        title: '作法',
        stepTitle: '（可選）步驟標題',
        description: '輸入詳細的步驟說明',
        step: '步驟 %{step}',
        add: '加步驟',
      },
      tip: {
        title: '小技巧',
        placeholder: '（可選）分享跟著做的一些小技巧及需要注意的地方',
      },
      publish: '公開',
      unpublish: '取消公開',
      saveAndPublish: '儲存並公開',
    },
    delete: {
      title: '刪除專案',
    },
    status: {
      published: '公開',
      draft: '草稿',
    },
    statistics: {
      viewed: '看過',
      liked: '喜歡',
      favorited: '收藏',
      followed: '跟著做',
    },
    author: {
      projects: '專案',
      followers: '關注',
    },
    options: {
      favorite: '收藏專案',
      cancelFavorite: '取消收藏',
      share: '分享',
      follow: '跟著做',
    },
    sections: {
      intro: '介紹',
      materials: '材料',
      files: '檔案資料',
      methods: {
        title: '作法',
        step: '步驟 %{step}',
        stepWithTitle: '步驟 %{step}: %{title}',
      },
      tip: '小技巧',
      followingPosts: '跟著做',
    },
  },
  home: {
    title: '首頁',
    categories: '分類',
    newestProjects: '最新專案',
  },
  timeline: {
    title: '動態',
    tabs: {
      all: '所有人',
      following: '關注中',
    },
    emptyMessage: '沒有相關投稿動態',
  },
  projects: {
    title: '搜尋',
    tabs: {
      newest: '最新',
      hotest: '最熱門',
    },
    emptyMessage: '找不到相關專案',
  },
  posts: {
    emptyMessage: '用戶尚未發布任何貼文',
  },
  profile: {
    title: '我的工作坊',
    following: '關注中',
    follower: '關注者',
    tabs: {
      projects: '專案',
      posts: '貼文',
      favorites: '收藏',
    },
    emptyMessage: {
      projects: '尚未建立任何專案',
      posts: '尚未發布任何貼文',
      favorites: '沒有收藏專案',
    },
  },
  followingUsers: {
    emptyMessage: '尚無關注中',
  },
  followers: {
    emptyMessage: '尚無關注者',
  },
  categories: {
    Craft: '手工藝',
    Workshop: '工作坊',
    Electronics: '電子',
    Living: '生活',
    Outside: '戶外',
    Science: '科學',
  },
  topics: {
    // Craft
    Art: '藝術',
    Books: '書本',
    Cardboard: '紙箱',
    Card: '卡片',
    Clay: '黏土',
    Puppet: '布偶',
    'Gift Wrapping': '禮物包裝',
    'Miniature Art': '袖珍藝術',
    Embroidery: '刺繡',
    Groceries: '雜貨',
    Toys: '玩具',
    Stamps: '印章',
    'Wood Carving': '木雕',
    Origami: '摺紙',
    Papercraft: '紙雕',
    Knitting: '編織',
    Tailoring: '裁縫',
    Accessories: '飾品',
    Patchwork: '拼布',
    Leather: '皮革',
    Props: '道具',
    'Floral Design': '花藝',
    'Handmade Soap': '手工皂',
    Candles: '蠟燭',
    Models: '模型',

    // Workshop
    '3D Printing': '3D列印',
    Woodworking: '木工',
    Furnitures: '家具',
    Cars: '汽車',
    Motorcycles: '機車',
    CNC: 'CNC',
    Energy: '能源',
    'Home Improvement': '屋宅修繕',
    Knives: '刀具',
    Metalworking: '金屬',
    'Laser Cutting': '雷射切割',
    Lighting: '照明',
    Repair: '修理',
    Solar: '太陽能',
    Tools: '工具',

    // Electronics
    Computers: '電腦',
    Robots: '機器人',
    Cameras: '相機',
    Arduino: 'Arduino',
    'Raspberry Pi': 'Raspberry Pi',
    Clocks: '時鐘',
    'Electric Circuits': '電子電路',
    Gadgets: '裝置',
    LED: 'LED',
    Mobile: '移動裝置',
    Smartphones: '手機',
    Speakers: '音響',
    Software: '軟體',
    Wearables: '穿戴式裝置',
    Wireless: '無線通訊',
    'Digital Art': '數位藝術',

    // Living
    Cleaning: '清潔',
    Organizing: '室內整理',
    Storage: '收納',
    Hairdressing: '美髮',
    Festival: '節日',
    Decorating: '裝飾',
    Education: '教育',
    Gardening: '園藝',
    Health: '健康',
    'Hiding Places': '藏東西',
    Holiday: '假日',
    Kitchen: '廚房',
    'Life Hacks': '生活技巧',
    Music: '音樂',
    Pets: '寵物',
    Travel: '旅行',

    // Outside
    Beach: '海灘',
    Bikes: '自行車',
    Camping: '露營',
    Climbing: '攀岩',
    Fishing: '釣魚',
    Kites: '風箏',
    Knots: '結繩',
    Launchers: '發射器',
    Rockets: '火箭',
    Skateboarding: '滑板',
    Sports: '運動',
    Survival: '生存',

    // Science
    Chemistry: '化學',
    Electricity: '電學',
    Electromagnetism: '電磁學',
    Bubble: '泡泡',
    Thermology: '熱學',
    Air: '空氣',
    Optics: '光學',
    Sound: '聲音',
    Mechanics: '力學',
    Water: '水',
    Paper: '紙',
  },
  allTopics: {
    title: '所有主題',
  },
  selectTopic: {
    title: '選擇主題',
  },
  cart: {
    title: '採買清單',
    section: {
      materials: {
        title: '材料',
      },
    },
  },
  recentViewed: {
    title: '近期瀏覽',
  },
  about: {
    title: '關於Birdiy',
  },
  feedback: {
    title: '意見回饋',
    type: {
      feature: '功能希望與建議',
      bug: '錯誤回報',
    },
    placeholder: '留下您的寶貴建議，幫助我們持續改善。',
    submit: '提交意見',
  },
  settings: {
    title: '設定',
    profile: {
      title: '編輯個人檔案',
      avatar: '大頭貼照',
      name: {
        title: '名稱',
        placeholder: '輸入你的名稱',
      },
    },
    account: {
      title: '編輯帳戶',
    },
    display: {
      title: '顯示設定',
      language: {
        title: '語言',
        interface: {
          title: '介面語言',
        },
        displayProjects: {
          title: '顯示專案語言',
        },
      },
    },
    notification: {
      title: '通知設定',
    },
  },
  login: {
    button: '透過 %{type} 登入',
    loginRequiredMessage: '尚未登入',
  },
  searchBar: {
    placeholder: '找專案',
  },
  postButton: {
    title: '建立專案 / 貼文',
  },
  followUserActions: {
    follow: '關注',
    unfollow: '取消關注',
  },
  loginActions: {
    title: '需要登入',
    defaultMessage: '使用此功能前必須先登入',
    likeProjectMessage: '喜歡專案之前必須先登入',
    favoriteProjectMessage: '收藏專案之前必須先登入',
    creatingFollowingPostMessage: '發布跟著做投稿之前必須先登入',
    followingMessage: '關注用戶之前必須先登入',
    unfollowingMessage: '取消關注用戶之前必須先登入',
    creatingProjectMessage: '新增專案之前必須先登入',
  },
  imageUploadActions: {
    upload: '從相簿挑選',
    camera: '拍攝照片',
  },
  alert: {
    login: '請先登入',
    loginFailed: '登入失敗',
    saveProjectSuccess: '專案儲存成功',
    saveProjectFailed: '專案儲存失敗',
    publishProjectSuccess: '專案已設為公開',
    unpublishProjectSuccess: '專案已設為不公開',
    setProjectStatusFailed: '專案狀態設定失敗',
    deleteProject: {
      title: '刪除專案',
      message: '專案一旦刪除則無法手動復原，確定要刪除專案嗎？',
    },
    deleteProjectSuccess: '專案已成功刪除，若要復原請聯繫客服人員。',
    deleteProjectFailed: '專案刪除失敗',
    createPostSuccess: '貼文發佈成功',
    createPostFailed: '貼文發佈失敗',
    editPostSuccess: '貼文編輯成功',
    editPostFailed: '貼文編輯失敗',
    deletePostSuccess: '貼文已成功刪除，若要復原請聯繫客服人員。',
    deletePostFailed: '貼文刪除失敗',
    editProfileFailed: '編輯個人檔案失敗',
    goBack: '確定要返回嗎？',
    unsavedGoBack: '確定要放棄編輯嗎？',
    deleteCartProject: {
      title: '刪除採買清單',
      message: '將 %{projectName} 從採買清單中刪除？',
    },
    sendFeedbackSuccess: '您的意見已成功送出',
  },
  errors: {
    required: '必須',
    photos: {
      min: '至少%{min}張照片',
    },
    methods: {
      notEmpty: '至少1個步驟',
    },
    video: '不正確的影片連結',
  },
};
