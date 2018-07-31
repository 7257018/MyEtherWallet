import common from './common/cn-sim'
import header from './header/cn-sim'
import home from './home/cn-sim'
import footer from './footer/cn-sim'
import privacyPolicy from './privacy-policy/cn-sim'
import termsOfConditions from './terms-of-conditions/cn-sim'
import createWallet from './create-wallet/cn-sim'
import accessWallet from './access-wallet/cn-sim'
import interfaceTranslations from './interface/cn-sim'
import team from './team/cn-sim'

const cnSim = {
  common: common,
  header: header,
  home: home,
  footer: footer,
  privacyPol: privacyPolicy,
  termsOfConditions: termsOfConditions,
  team: team,
  accessWallet: accessWallet,
  createWallet: createWallet,
  interface: interfaceTranslations
}
const cnSim = {
  reused: {
    getAFreeWallet: '新建一个钱包',
    accessMyWallet: '进入我的钱包',
    faqs: 'FAQs',
    sendTx: '发送交易',
    swap: 'Swap',
    unlockWallet: '解锁钱包',
    createWallet: '创建钱包',
    useMnemonic: '创建助记词',
    useKeystore: '创建Keystore',
    customerSupport: '帮助支持',
    address: '地址',
    balance: '余额',
    confirmSend: '确认发送',
    terms: 'Terms',
    continue: '继续',
    connectDevice: '请连接您的设备',
    jsonF: 'Keystore',
    mnemonicP: '助记词',
    privKey: '私钥',
    mewConnect: 'MEW Connect',
    hardware: '硬件支持',
    noWallet: '没有钱包?',
    toolTip1: 'Unfortunately, we encounter these phishing scams/attacks on a daily basis. Typically, the reason for these incidents is entering your private key on a malicious website. Sometimes it is a fake MyEtherWallet site (e.g. myethreawllet[.]com) and other times it is a fake ICO site or airdrop site or EthZero site. If you enter your private key (or keystore file, mnemonic phrase, passwords) on a malicious website, they have complete access to your funds. Because of the nature of the blockchain and cryptography, there is no way to reverse transactions or reset your passwords. Once a transaction is on the blockchain, it\'s final. For this reason, you need to move your funds as soon as possible and discontinue use of this wallet. We do actively attempt to track down the people behind these sites and do what we can to warn others, take down the site, or whatever we can given the particular situation.',
    toolTip2: 'Typically, the reason for these incidents is entering your private key on a malicious website.',
    toolTip3: 'Unfortunately, we encounter these phishing scams/attacks on a daily basis.',
    printWallet: '打印我的钱包',
    previous: '上一步',
    next: '下一步',
    totalBalance: '总余额',
    dontHaveEnough: '余额不足',
    copy: '复制',
    clear: '清除',
    slow: '慢',
    regular: '正常',
    fast: '快',
    advanced: 'Advanced',
    back: '返回',
    check: '检查',
    buy: '购买',
    offline: '离线发送e',
    speedTx: '交易打包速度',
    from: '从',
    to: '到',
    txFee: '手续费',
    dapps: 'Dapps',
    news: 'News',
    interactWcontract: 'Interact with Contract',
    depContract: '部署合约'
  },
  header: {
    home: '主页',
    about: '关于'
  },
  home: {
    title1: '币合钱包',
    title2: '安全开源的网页钱包',
    subheading: '币合钱包帮助你生成以太坊钱包，并且能安全的与区块链网络交互',
    obtainAddress: '获取以太坊地址并且生成你的私钥，你需要保存好生成的地址',
    getStarted: '开始',
    accessMyWalletDesc: '发送交易，查询地址信息,查询交易记录，发布智能合约',
    accessNow: '进入'
  },
  about: {
    title: '关于币合钱包',
    subheading: 'MyEtherWallet(MEW)  provides a easy to use interface. We won’t hold your keys, also we can’t access accounts, recover your keys, reset your passwords, nor reverse your transactions. Please pay attention that you are on Correct URL.',
    beResponsible: 'Please Take Responsible For Your Account Security.',
    watchVideo: 'Watch Video',
    mewWallet: '币合钱包',
    mewWalletDesc: 'Text here for feature description, Text here for feature description, Text here for feature description, Text here for feature description, Text here for feature description.',
    hardwareWallet: 'Hardware Wallet Support',
    hardwareWalletDesc: 'Text here for feature description, Text here for feature description, Text here for feature description, Text here for feature description, Text here for feature description.',
    swapDesc: 'Text here for feature description, Text here for feature description, Text here for feature description, Text here for feature description, Text here for feature description.',
    mewConnectDesc: 'Text here for feature description, Text here for feature description, Text here for feature description, Text here for feature description, Text here for feature description.'
  },
  faqs: {
    subheading: 'Have not found the question that you are looking for?',
    seeMore: '查看更多...',
    gettingStarted: '开始使用币合钱包',
    article1: 'What is MEW?',
    article2: '怎样创建一个钱包?',
    article3: 'How to properly save and backup your wallet',
    article4: 'How to access your wallet',
    article5: 'Protecting yourself and your funds',
    article6: 'Checking the balance of your account',
    securityAndPhishing: 'Security And Phishing',
    transactions: 'Transactions',
    privKeyandPass: 'Private Keys And Passwords'
  },
  social: {
    title: '联系我们',
    subheading: 'Your Cryptocurrency Masters Are Getting Hilariously Rich.'
  },
  promo: {
    title1: '安全的',
    title2: '网页钱包'
  },
  footer: {
    discover: 'Discover',
    units: 'Units',
    txStat: 'TX Status',
    debugs: 'Debugs',
    extension: 'Extension',
    others: 'Others',
    affiliates: 'Affiliates',
    ledger: 'Ledger Wallet',
    digital: 'Digital Bitbox',
    ethCard: 'Ether Card',
    trezor: 'Trezor',
    bity: 'Bity',
    mew: 'MEW',
    about: 'About us',
    team: 'Team',
    welcome: 'Welcome to Donate to Us',
    welcomeDes: 'Your donation will help us a lot to build our MEW Community.',
    feedback: 'Feedback',
    privacy: 'Privacy',
    copyright: 'Copyright 2018 All right reserved by 币合区块链'
  },
  privacyPol: {
    title: 'Privacy Policy',
    date: 'Last updated May 10, 2018',
    paragraph1: 'Be safe & secure: We highly recommend that you read our guide on How to Prevent Loss & Theft for some recommendations on how to be proactive about your security.',
    paragraph2: 'Always backup your keys: MyEtherWallet.com & MyEtherWallet CX are not "web wallets". You do not create an account or give us your funds to hold onto. No data leaves your computer / your browser. We make it easy for you to create, save, and access your information and interact with the blockchain.',
    paragraph3: 'We are not responsible for any loss: Ethereum, MyEtherWallet.com & MyEtherWallet CX, and some of the underlying Javascript libraries we use are under active development. While we have thoroughly tested & tens of thousands of wallets have been successfully created by people all over the globe, there is always the possibility something unexpected happens that causes your funds to be lost. Please do not invest more than you are willing to lose, and please be careful.',
    paragraph4: 'Translations of MyEtherWallet: The community has done an amazing job translating MyEtherWallet into a variety of languages. However, MyEtherWallet can only verify the validity and accuracy of the information provided in English and, because of this, the English version of our website is the official text.',
    paragraph5: 'MIT License Copyright © 2015-2017 MyEtherWallet INC',
    paragraph6: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:',
    paragraph7: 'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.',
    paragraph8: 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
  },
  termsOfConditions: {
    title: 'Terms of Conditions',
    date: 'Last updated May 10, 2018',
    paragraph1: 'Be safe & secure: We highly recommend that you read our guide on How to Prevent Loss & Theft for some recommendations on how to be proactive about your security.',
    paragraph2: 'Always backup your keys: MyEtherWallet.com & MyEtherWallet CX are not "web wallets". You do not create an account or give us your funds to hold onto. No data leaves your computer / your browser. We make it easy for you to create, save, and access your information and interact with the blockchain.',
    paragraph3: 'We are not responsible for any loss: Ethereum, MyEtherWallet.com & MyEtherWallet CX, and some of the underlying Javascript libraries we use are under active development. While we have thoroughly tested & tens of thousands of wallets have been successfully created by people all over the globe, there is always the possibility something unexpected happens that causes your funds to be lost. Please do not invest more than you are willing to lose, and please be careful.',
    paragraph4: 'Translations of MyEtherWallet: The community has done an amazing job translating MyEtherWallet into a variety of languages. However, MyEtherWallet can only verify the validity and accuracy of the information provided in English and, because of this, the English version of our website is the official text.',
    paragraph5: 'MIT License Copyright © 2015-2017 MyEtherWallet INC',
    paragraph6: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:',
    paragraph7: 'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.',
    paragraph8: 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
  },
  team: {
    title: 'Meet Our Team',
    desc: 'MyEtherWallet is comprised of talented, inspiring, and hardworking individuals from around the world. We share the passion to code, create, and ultimately build an open, accessible and fair financial future, one piece of software at a time. Together, we work hard, brainstorm nonstop, and brew endless coffee.'
  },
  sendTx: {
    amount: '数量',
    toAddr: '转到地址'
  },
  txAddress: {
    title: '地址'
  },
  txBalance: {
    detail: '详情'
  },
  txNetwork: {
    title: '网络',
    change: '切换'
  },
  txSideMenu: {
    title: '发送',
    contract: '合约'
  },
  pageTitle: {
    alreadyHave: '已有钱包?'
  },
  pageFooter: {
    title: '想了解更多? 点击进入'
  },
  unlockWallet: {
    jsonFDesc: 'Update ordrop your keystore file here',
    mnemonicPDesc: '输入您的助记词',
    metamaskDes: '使用metamask解锁钱包',
    privKeyDesc: '输入私钥解锁钱包'
  },
  accessMyWalletOptions: {
    hdDerivationPath: 'HD Derivation Path',
    customPath: 'Add Custom Path',
    interactAddr: 'Address to Interact With',
    id: 'ID',
    acceptTerms: 'To unlock my wallet, I accept',
    mewConnectDesc: 'Use MEW Connect to access my wallet',
    metaMaskDesc: 'Use extention to access my wallet',
    metaMaskModalDesc: 'Please use MyEtherWallet on a secure (SSL / HTTPS) connection to connect.',
    software: 'Software',
    softwareDesc: 'Keystore、私钥、助记词',
    notRecommended: '不推荐',
    unlock: '解锁'
  },
  byJsonFile: {
    saveKeystore: '保存Keystore文件',
    dontLoseTitle: '不要丢失',
    dontLoseDesc: '请注意，一但丢失，将无法恢复',
    dontShareTitle: '不要分享给别人',
    dontShareDesc: '请不要分享该文件给别人，否则资产可能会被盗窃',
    makeBackupTitle: '开始备份',
    makeBackupDesc: 'Secure it like the millions of dollars it may one day be worth.',
    downloadKeyFile: '下载Keystore文件'
  },
  byMnemonic: {
    success: '成功',
    successfullyCreated: '创建成功',
    value: 'Value',
    random: '换一组',
    writeDown: '请将下面单词按照顺序记录下来',
    alreadyWritten: '下一步'
  },
  createWallet: {
    title: '欢迎使用币合钱包',
    subheading: 'MyEtherWallet.com doesn\'t hold your keys for you. We can’t access accounts, recover keys, reset passwords, nor reverse transactions. Protect your keys & always check that you are on CORRECT URL. You are responsible for your security.',
    firstTime: '我是新手',
    veteran: '大神，你懂吗',
    yourPw: '输入钱包密码',
    doNotForget: '务必',
    doNotForgetDesc: '保存好你的密码， 这是你个人秘钥，你需要用',
    keyPass: '密码 + Keystore',
    keyPassDesc: '文件来解锁你的账户',
    passwordHint: '输入钱包密码'
  },
  interface: {
    addCustomNode: '添加自定义节点',
    save: '保存',
    dontKnow: 'Don\'t know what it is?',
    learnMore: '了解更多',
    httpBasicAccess: 'HTTP Basic Access Athentication',
    tokens: 'Tokens',
    customToken: '自定义 Tokens',
    dataGas: 'Data & Gas Limited',
    sendTx: '发送交易',
    haveIssues: '有问题?',
    registerDns: 'Register Domain - ENS',
    registerDnsDesc: 'DomainSale is a secondary market for the Ethereum Name Service that allows you to buy and sell domains that are already owned.',
    checkDomain: 'Check Domain',
    subDomain: 'Sub Domain',
    allSubDomains: 'All Sub Domains',
    online: 'Online',
    generateInfo: 'Generate Information',
    generateTx: 'Generate Transaction',
    offline: 'Offline',
    sendPubTx: 'Send/Publish Transaction',
    generate: 'Generate',
    registerDom: 'Register Domain',
    registerDomDesc: 'This is a function for register domain',
    domSale: 'Domain Sale',
    domSaleDesc: 'DomainSale is a secondary market for the Ethereum Name Service that allows you to buy and sell domains that are already owned.',
    domSaleBal: 'Domain Sale Balance',
    readWriteC: '查看合约',
    read: '阅读',
    contractAddr: '合约地址',
    abiJsonInt: 'ABI/JSON Interface'
  },
  strength: {
    title: '密码强度：',
    veryWeak: '非常弱',
    weak: '弱',
    strong: '强',
    veryStrong: '非常强'
  },
  dialog: {
    sendingTransaction: '交易请求已发送，请自行检查是否成功',
    closeButton: '关闭'
  },
  transaction: {
    success: '交易成功',
    failed: '交易失败'
  }
}

export default cnSim
