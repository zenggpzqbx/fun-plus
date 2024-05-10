# 引入方式
## import方式
```javascript
import {count, countBy} from '@zqbx/fun-plus'
```
## umd方式
```javascript
// 默认使用的全局变量：f
```
# 函数用例
## count
```javascript
count([1,2,2,2,23,4,2,3,4,5])
// => { '1': 1, '2': 4, '3': 2, '4': 2, '5': 1, '23': 1 }
```
## countBy
```javascript
countBy([{zmb:'123'}, {zmb:'123'}, {zmb:'12344'}],  item => item.zmb)
// => { '123': 2, '12344': 1 }

countBy([6.1, 4.2, 6.3])
// => {'6': 2,'4': 1}
```
## pick
```javascript
pick({name:'abc', age:28, sex:'男'}, 'name')
// => { 'name': 'abc'}

pick({name:'abc', age:28, sex:'男'}, ['name', 'age'])
// => { 'name': 'abc', 'age': 28 }
```
# debounce
```javascript
let debounced = debounce(callbackFun, 1000)
```
## throttle
```javascript
//第三个参数是一个boolean，false:代表非立即运行；ture:代表立即运行
let throttle_one = throttle(callbackFun, 1000)
let throttle_two = throttle(callbackFun, 1000, ture)
```
