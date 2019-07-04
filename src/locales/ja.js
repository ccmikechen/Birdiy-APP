export default {
  general: {
    login: 'ログイン',
    logout: 'ログアウト',
    more: 'もっと見る',
    confirm: '確認',
    ok: 'はい',
    cancel: 'キャンセル',
    save: '保存',
    goBack: '戻る',
    bracket: '（%{text}）',
    selectAll: '全部選択',
    clear: 'クリア',
    delete: '削除',
    download: 'ダウンロード',
  },
  post: {
    create: {
      title: '投稿を書く',
    },
    edit: {
      title: '投稿を編集',
      message: {
        title: 'メッセージ',
        placeholder: '投稿のメッセージを入力',
      },
      relatedProject: {
        title: '関連プロジェクト',
        custom: {
          placeholder: '関連プロジェクト名を入力',
        },
      },
      photos: {
        title: '写真',
      },
    },
    delete: {
      title: '投稿を削除',
    },
  },
  project: {
    create: {
      title: 'プロジェクトを作成',
      projectName: {
        title: 'プロジェクト名',
        placeholder: 'プロジェクト名を入力',
      },
      topic: {
        title: 'テーマ',
        placeholder: 'テーマを選ぶ',
      },
      submit: '保存して編集に進む',
    },
    edit: {
      title: 'プロジェクトを編集',
      tabs: {
        intro: '紹介',
        image: '写真',
        materials: '材料',
        files: 'ファイル',
        methods: '作り方',
        tip: 'コツ',
      },
      projectName: {
        title: 'プロジェクト名',
        placeholder: 'プロジェクト名を入力',
      },
      topic: {
        title: 'テーマ',
        placeholder: 'テーマを選ぶ',
      },
      intro: {
        title: '紹介',
        placeholder: 'プロジェクトの紹介を書く',
      },
      video: {
        title: '動画',
        placeholder: '（任意）Youtube / Vimeo 動画リンク',
      },
      image: {
        title: '写真',
      },
      materials: {
        title: '材料',
        name: '材料名',
        amountUnit: '分量',
        link: '（任意）店舗や購入リンク',
        add: '材料を追加',
      },
      files: {
        title: 'ファイル',
        name: 'ファイル名',
        url: 'ファイルダウンロードリンク',
        addLink: 'リンクを追加',
        upload: 'ファイルをアップロード',
      },
      methods: {
        title: '作り方',
        stepTitle: '（任意）タイトル',
        description: '説明を入力',
        step: 'ステップ %{step}',
        add: '作り方を追加',
      },
      tip: {
        title: 'コツ',
        placeholder: '（任意）使えるコツや注意すべきポイント',
      },
      publish: '公開',
      unpublish: '非公開',
      saveAndPublish: '保存して公開',
    },
    delete: {
      title: 'プロジェクトを削除',
    },
    status: {
      published: '公開',
      draft: '下書き',
    },
    statistics: {
      viewed: '見た',
      liked: 'すき',
      favorited: '保存',
      followed: 'フォロー',
    },
    author: {
      projects: 'プロジェクト',
      followers: 'フォロワー',
    },
    options: {
      favorite: 'プロジェクトを保存',
      cancelFavorite: 'プロジェクトを削除',
      share: 'シェア',
      follow: 'フォロー',
    },
    sections: {
      intro: '紹介',
      materials: '材料',
      files: 'ファイル',
      methods: {
        title: '作り方',
        step: 'ステップ %{step}',
        stepWithTitle: 'ステップ %{step}: %{title}',
      },
      tip: 'コツ',
      followingPosts: 'フォローした投稿',
    },
    deletedMessage: 'このプロジェクトは公開されていないか削除されています',
  },
  home: {
    title: 'ホーム',
    categories: 'カテゴリー',
    newestProjects: '新着プロジェクト',
  },
  timeline: {
    title: 'タイムライン',
    tabs: {
      all: 'すべてのユーザー',
      following: 'フォローユーザー',
    },
    emptyMessage: 'アクティビティがありません',
  },
  projects: {
    title: '検索',
    tabs: {
      newest: '新着順',
      hotest: '人気順',
    },
    emptyMessage: '関連するプロジェクトが見つかりません',
  },
  posts: {
    emptyMessage: '投稿がありません',
  },
  profile: {
    title: 'MY工房',
    following: 'フォロー',
    follower: 'フォロワー',
    tabs: {
      projects: 'プロジェクト',
      posts: '投稿',
      favorites: '気に入り',
    },
    emptyMessage: {
      projects: 'プロジェクトがありません',
      posts: '投稿がありません',
      favorites: '保存したプロジェクトがありません',
    },
  },
  followingUsers: {
    emptyMessage: 'フォローしたユーザーがいません',
  },
  followers: {
    emptyMessage: 'まだフォローされていません',
  },
  categories: {
    Craft: '工芸',
    Workshop: '工房',
    Electronics: '電子',
    Living: '生活',
    Outside: '屋外',
    Science: '科学',
  },
  topics: {
    // Craft
    Art: '芸術',
    Books: '本',
    Cardboard: 'ダンボール',
    Card: 'カード',
    Clay: '粘土',
    Puppet: '人形',
    'Gift Wrapping': 'ギフト包装',
    'Miniature Art': 'ミニチュアアート',
    Embroidery: '刺繍',
    Groceries: '雑貨',
    Toys: '玩具',
    Stamps: 'スタンプ',
    'Wood Carving': '木彫り',
    Origami: '折り紙',
    Papercraft: 'ペーパークラフト',
    Knitting: '編み物',
    Tailoring: '裁縫',
    Accessories: 'アクセサリー',
    Patchwork: 'パッチワーク',
    Leather: '皮革',
    Props: '道具',
    'Floral Design': '花模様',
    'Handmade Soap': '石鹸',
    Candles: 'キャンドル',
    Models: 'モデル',

    // Workshop
    '3D Printing': '3Dプリント',
    Woodworking: '木工',
    Fornitures: '家具',
    Cars: '車',
    Motorcycles: 'バイク',
    CNC: 'CNC',
    Energy: 'エナジー',
    'Home Improvement': '家の修繕',
    Knives: 'ナイフ',
    Metalworking: '金属',
    'Laser Cutting': 'レーザカット',
    Lighting: '照明',
    Repair: '修復',
    Solar: 'ソーラー',
    Tools: 'ツール',

    // Electronics
    Computers: 'コンピュータ',
    Robots: 'ロボット',
    Cameras: 'カメラ',
    Arduino: 'Arduino',
    'Raspberry Pi': 'Raspberry Pi',
    Clocks: '時計',
    'Electric Circuits': '電気回路',
    Gadgets: 'ガジェット',
    LED: 'LED',
    Mobile: 'モバイル',
    Smartphones: 'スマホ',
    Speakers: 'スピーカー',
    Software: 'ソフトウェア',
    Wearables: 'ウェアラブル',
    Wireless: '無線通信',
    'Digital Art': 'デジタルアート',

    // Living
    Cleaning: '掃除',
    Organizing: '室内整理',
    Storage: '収納',
    Hairdressing: '理髪',
    Festival: '祝日',
    Decorating: '飾り',
    Education: '教育',
    Gardening: '園芸',
    Health: '健康',
    'Hiding Places': '隠れ場所',
    Holiday: '休日',
    Kitchen: 'キッチン',
    'Life Hacks': 'ライフハック',
    Music: '音楽',
    Pets: 'ペット',
    Travel: '旅行',

    // Outside
    Beach: 'ビーチ',
    Bikes: '自転車',
    Camping: 'キャンプ',
    Climbing: 'クライミング',
    Fishing: '釣り',
    Kites: '凧',
    Knots: '結び目',
    Launchers: 'ランチャー',
    Rockets: 'ロケット',
    Skateboarding: 'スケートボード',
    Sports: 'スポーツ',
    Survival: 'サバイバル',

    // Science
    Chemistry: '化学',
    Electricity: '電気',
    Electromagnetism: '電磁気',
    Bubble: '泡',
    Thermology: '熱学',
    Air: '空気',
    Optics: '光学',
    Sound: '音声',
    Mechanics: '力学',
    Water: '水',
    Paper: '紙',
  },
  allTopics: {
    title: 'すべてのテーマ',
  },
  selectTopic: {
    title: 'テーマを選ぶ',
  },
  cart: {
    title: '買い物リスト',
    section: {
      materials: {
        title: '材料',
      },
    },
    emptyMessage: 'まだ材料を入れておりません。',
  },
  recentViewed: {
    title: '最近見たプロジェクト',
  },
  about: {
    title: 'Birdiyについて',
  },
  feedback: {
    title: 'ご意見',
    type: {
      feature: 'ご意見、ご要望',
      bug: '機能の不具合',
    },
    placeholder: 'あなたのご意見をお聞かせください。',
    submit: '意見を送る',
  },
  settings: {
    title: '設定',
    profile: {
      title: 'プロフィール編集',
      avatar: 'アバター',
      name: {
        title: 'ニックネーム',
        placeholder: 'ニックネームを入力',
      },
    },
    account: {
      title: 'アカウント編集',
    },
    display: {
      title: 'ディスプレイ設定',
      language: {
        title: '言語',
        interface: {
          title: 'アプリ言語',
        },
        displayProjects: {
          title: '表示するプロジェクトの言語',
        },
      },
    },
    notification: {
      title: '通知設定',
    },
  },
  login: {
    google: 'Googleでログイン',
    facebook: 'Facebookでログイン',
    loginRequiredMessage: 'ログインしてください',
  },
  searchBar: {
    placeholder: 'プロジェクト検索',
  },
  postButton: {
    title: '新規プロジェクト・投稿',
  },
  followUserActions: {
    follow: 'フォロー',
    unfollow: 'フォローしない',
  },
  loginActions: {
    title: 'ログインが必要',
    defaultMessage: 'この機能を利用するにはログインが必要です',
    likeProjectMessage: 'この機能を利用するにはログインが必要です',
    favoriteProjectMessage: 'この機能を利用するにはログインが必要です',
    creatingFollowingPostMessage: 'この機能を利用するにはログインが必要です',
    followingMessage: 'この機能を利用するにはログインが必要です',
    unfollowingMessage: 'この機能を利用するにはログインが必要です',
    creatingProjectMessage: 'この機能を利用するにはログインが必要です',
  },
  imageUploadActions: {
    upload: '写真を選択',
    camera: '新しい写真を取る',
  },
  alert: {
    login: 'ログインしてください',
    loginFailed: 'ログイン失敗',
    saveProjectSuccess: 'プロジェクトを保存しました',
    saveProjectFailed: 'プロジェクトの保存が失敗しました',
    publishProjectSuccess: 'プロジェクトを公開しました',
    unpublishProjectSuccess: 'プロジェクトを非公開にしました',
    setProjectStatusFailed: 'プロジェクト状態の設定が失敗しました',
    deleteProject: {
      title: 'プロジェクトを削除',
      message: '削除したプロジェクトは手動で復元できません。削除してもよろしいですか？',
    },
    deleteProjectSuccess: 'プロジェクトを削除しました。復元したい場合スタッフに連絡してください。',
    deleteProjectFailed: 'プロジェクトの削除が失敗しました',
    createPostSuccess: '投稿を送りました',
    createPostFailed: '投稿の作成が失敗しました',
    editPostSuccess: '投稿を保存しました',
    editPostFailed: '投稿の保存が失敗しました',
    deletePostSuccess: '投稿を削除しました。復元したい場合スタッフに連絡してください。',
    deletePostFailed: '投稿の削除が失敗しました',
    editProfileFailed: 'プロフィールの保存が失敗しました',
    goBack: '本当に戻りますか？',
    unsavedGoBack: '本当に保存しないまま戻りますか？',
    deleteCartProject: {
      title: '買い物リストを削除',
      message: '%{projectName} を買い物リストから削除しますか？',
    },
    sendFeedbackSuccess: 'ご意見頂きありがとうございます',
    fileTooLarge: 'ファイルサイズの上限は%{limit}です',
  },
  errors: {
    required: '必須',
    photos: {
      min: '写真%{min}枚が必要',
    },
    methods: {
      notEmpty: '最小ステップ１つが必要',
    },
    video: '正しい動画リンクが必要',
  },
};
