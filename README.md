# react-native-alphabetaList

在根目录下运行如下命令：
```
npm install
```


# 示意图

**IOS:**

![image](https://github.com/cqm1994617/react-native-alphabetaList/blob/master/components/img/alpha-ios.gif)


**Android:**

![image](https://github.com/cqm1994617/react-native-alphabetaList/blob/master/components/img/alpha-android.gif)

# 组件

## Head

Head组件代表头部栏

```
<Head 
  headHeight={46} 
  changeHeadHeight={(e)=>this.changeHeadHeight(e)} 
/>
```
**headHeight:**设置Head的高度

**changeHeadHeight:**改变index中state中头部栏高度的数值

***




## FunctionList

FunctionList代表功能栏，就是图中群聊、标签、公众号的列表。

```
<FunctionList changeFunctionHeight = {(e)=>this.changeFunctionHeight(e)} />
```
**changeFunctionHeight:**改变index中state中功能栏高度的数值。

***





## MainList

MainList代表主信息栏，代表拼音开头从A到Z(不是A到Z的归类到#栏)的所有联系人栏。

```
<MainList dataSource={this.state.dataSource} />
```
**dataSource:**联系人信息的json数组(每一个json中包含name和url)转成的ListView.DataSource

***




## FriendList

FriendList代表好友栏，图中我的朋友一栏

```
<FriendList dataSource={this.state.dataSource2} />
```
**dataSource:**好友信息的json数组(每一个json中包含name和url)转成的ListView.DataSource

***




## AlphabetaList

代表右侧的小栏目

```
<AlphabetaList 
  scroll={()=>this.getScroll()} 
  headHeight={this.state.headHeight}
  functionHeight={this.state.functionHeight}
/>

```
**scroll:**当前index的ScrollView，传递其this.refs

**headHeight:**当前的头部栏高度

**functionHeight:**当前状态栏高度

